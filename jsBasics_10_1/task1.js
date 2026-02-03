import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("The Secret History", "Donna Tartt", 1993);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Fahrenheit 451", "Ray Bradbury", 1953);
const book4 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1998);

book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();

const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");
const ebook2 = new EBook("The Shining", "Stephen King", 1977, "PDF");
ebook1.printInfo();
ebook2.printInfo();

ebook1.fileFormat = "EPUB";
console.log("New File format:", ebook1.fileFormat);


ebook1.fileFormat = "EPUB";
console.log("New File format:", ebook1.fileFormat);

ebook1.fileFormat = "EPUB";
console.log("New File format:", ebook1.fileFormat);

const books = [book1, book2, book3, book4, ebook1, ebook2];
const oldestBook = Book.getOldestBook(books);

console.log("Oldest Book:");
oldestBook.printInfo();

const newEBook = EBook.fromBook(book4, "FB2");
newEBook.printInfo();