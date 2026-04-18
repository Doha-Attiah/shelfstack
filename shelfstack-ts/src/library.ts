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
    return list.find((book:Book) => book.isbn === isbn);
  }
 
const books: Book[] = [];

const book1: Book = {
  id: "1",
  title: "Learn JS",
  isbn: "888-765",
  author: "Doha"
};

const updated = addBook(books, book1);

console.log(findByIsbn(updated, "888-765"));
