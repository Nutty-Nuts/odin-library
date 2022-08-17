// TODO: Refactor Code
// TODO: Implement Data Attribute Values in HTML for ease of Access
// TODO: Get the Read Status Button Working per Instance
// TODO: Get the Remove Button working per Instance

let libraryCollection = [];

menu = document.getElementById("menu-modal");
books = document.querySelector(".books");

function showMenu() {
    menu.classList.add("show");
    menu.classList.remove("hidden");
}

function hideMenu() {
    menu.classList.add("hidden");
    menu.classList.remove("show");

    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";
}

function addBook() {
    author = document.getElementById("author").value;
    title = document.getElementById("title").value;
    pages = document.getElementById("pages").value;

    var newBook = new Book(author, title, pages);
    libraryCollection.push(newBook);

    generateBooks();

    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";

    console.log("Add Book");
    console.log(newBook.read);
}

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

Book.prototype.updateRead = function () {
    this.read = !this.read;
};

var readStatus = false;

function generateBooks() {
    let i = libraryCollection[libraryCollection.length - 1];

    book = document.createElement("div");
    book.classList.add("book");

    bookTitle = document.createElement("div");
    bookTitle.innerText = i.title;

    bookAuthor = document.createElement("div");
    bookAuthor.innerText = i.author;

    bookPages = document.createElement("div");
    bookPages.innerText = i.pages;

    remove = document.createElement("button");
    remove.setAttribute("onclick", "removeBook()");
    remove.innerText = "REMOVE";

    read = document.createElement("button");
    read.setAttribute("onclick", "invertRead()");
    read.innerText = "NOT READ";

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(remove);
    book.appendChild(read);

    books.appendChild(book);
}

function invertRead(e) {
    book.removeChild(read);

    read = document.createElement("button");
    read.setAttribute("onclick", "invertRead()");
    if (readStatus) {
        read.innerText = "READ";
        readStatus = !readStatus;
    } else {
        read.innerText = "NOT READ";
        readStatus = !readStatus;
    }

    book.appendChild(read);
}

function removeBook(e) {
    books.removeChild(book);
}
