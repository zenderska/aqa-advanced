import Book from "./Book.js";

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

<<<<<<< HEAD
=======
  // getter
>>>>>>> 266b233e998c643784dfc6c20009cf16ef9745cf
  get fileFormat() {
    return this._fileFormat;
  }

<<<<<<< HEAD
=======
  // setter з валідацією
>>>>>>> 266b233e998c643784dfc6c20009cf16ef9745cf
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a string");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `Title: "${this.title}", Author: ${this.author}, Year: ${this.year}, File format: ${this.fileFormat}`
    );
  }

<<<<<<< HEAD
=======
  // ===== 4.3 статичний метод =====
>>>>>>> 266b233e998c643784dfc6c20009cf16ef9745cf
  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;