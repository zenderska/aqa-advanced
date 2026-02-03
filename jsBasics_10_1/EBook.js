import Book from "./Book.js";

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

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

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;