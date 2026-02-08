class TodoService {
  async getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error('Failed to fetch todo');
    }

    return response.json();
  }
}

class UserService {
  async getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    return response.json();
  }
}

const todoService = new TodoService();
const userService = new UserService();

const allPromises = Promise.all([
  todoService.getTodo(),
  userService.getUser()
]);

allPromises
  .then(([todo, user]) => {
    console.log('Promise.all result:');
    console.log(todo);
    console.log(user);
  })
  .catch(error => {
    console.error(error);
  });

const racePromises = Promise.race([
  todoService.getTodo(),
  userService.getUser()
]);

racePromises
  .then(result => {
    console.log('Promise.race result:');
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
