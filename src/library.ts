interface Book {
  id: string;
  title: string;
  isbn: string;
  author: string;
}

interface Loan {
  id: string;
  bookId: string;
  memberId: string;
}
type BookId = string;

function addBook(list: Book[], book: Book): Book[] {
  return [...list, book];
}

function findByIsbn(list: Book[], isbn: string): Book | undefined {
  return list.find(book => book.isbn === isbn);
}

const books: Book[] = [];

const book1: Book = {
  id: "1",
  title: "Clean Code",
  isbn: "123",
  author: "Robert"
};

const updated = addBook(books, book1);

console.log(findByIsbn(updated, "123"));