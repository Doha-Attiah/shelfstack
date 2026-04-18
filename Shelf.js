//#TASK5 - Doha Ahmad Attiah
// Part A — JavaScript file `part-a.js`
// Classes: `LibraryItem`, `Book` , `Member`, `LibraryCatalog` and short demo.

class LibraryItem {
    constructor(id, title, isAvailable) {
        this.id = id;
        this.title= title;
        this.isAvailable= isAvailable;
    }
    describe() {
        console.log(this.title);
    }
    
    borrow(){
        this.isAvailable=false;
    }
    returnItem(){
        this.isAvailable= true;
    }
}


class Book extends LibraryItem {
    constructor({ id, title, isAvailable= true, isbn, author }) {
        super(id, title, isAvailable);
        this.isbn = isbn;
        this.author= author;
    }

    describe() {
     console.log(`this book is: ${this.title} and its author is: ${this.author} and ISBN: ${this.isbn}`);
    }

}


class Member{
    #balance = 0;
    deposit(n) {
        this.#balance += n;
    }
    getBalance() {
        return this.#balance;
    }

}

class LibraryCatalog{
    constructor() {
        this.arrbooks = [];
    }

    addItem(book){
        this.arrbooks.push(book);
    }

    static nextId() {
        return Math.floor(Math.random() * 1000000);
    }
    /*
    or:
    static nextId(lastId) {
        return lastId + 1;
    }
    */

    registerLoan({ memberId, itemId }){
        const book = this.arrbooks.find(b => b.id === itemId);
        if (book && book.isAvailable) {
            book.borrow();
            console.log(`Member ${memberId} borrowed ${book.title}`);
        }
        else {
            console.log("Book not available");
        }

    }
    snapshotStats() {
        const total= this.arrbooks.length;
        const available = this.arrbooks.filter(b => b.isAvailable).length; 
        return { total, available } 
    }
}



const cat= new LibraryCatalog();

// array destructuring proof
const [a, b] = ["b1", "b2"];

// add books
cat.addItem((new Book({ id: "b1", title: "Learn JS", isbn: "978-0132350884", author: "Doha"})));
cat.addItem((new Book({ id: "b2", title: "Learn c++", isbn: "32350884", author: "Lolo"})));

// loan
cat.registerLoan({ memberId: "m1", itemId: "b1" });

// print book
cat.arrbooks[0].describe();

// stats
const { total, available } = cat.snapshotStats();
console.log(total, available);
