function printTextAfterDelay(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

printTextAfterDelay('Hello my friend', 5000);