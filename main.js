/*

    TODO: Refactor Code

    TODO: Implement Data Attribute Values in HTML for ease of Access

    TODO: Get the Read Status Button Working per Instance

    TODO: Get the Remove Button working per Instance
    
*/

let add = document.getElementById("add");
let modal = document.getElementById("modal");
let close = document.getElementById("close");
let submit = document.getElementById("submit");

let books = document.getElementById("books");

let bookStorage = [];

// * Event Listeners

add.addEventListener("click", showElement);
close.addEventListener("click", hideElement);
submit.addEventListener("click", () => {
    addBook();
    clearInput();
    hideElement();
});

function showElement() {
    modal.style.display = "block";

    console.log("Modal Visible");
}

function hideElement() {
    modal.style.display = "none";

    console.log("Modal Invisible");
}

// * Constructors

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

Book.prototype.updateRead = function () {
    this.read = !this.read;
};

// * Functions

function clearInput() {
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";
}

function addBook() {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;

    var newBook = new Book(author, title, pages);
    bookStorage.push(newBook);

    console.log("Added Book");
    console.table(bookStorage);

    renderBooks();
}

function renderBooks() {
    for (i in bookStorage) {
        let book = document.createElement("div");
        book.classList.add("book");

        let bookAuthor = document.createElement("div");
        bookAuthor.innerText = bookStorage[i].author;

        let bookTitle = document.createElement("div");
        bookTitle.innerText = bookStorage[i].title;

        let bookPages = document.createElement("div");
        bookPages.innerText = bookStorage[i].pages;

        let read = document.createElement("button");
        read.setAttribute("data-index", i);
        read.innerText = "NOT READ";

        let remove = document.createElement("button");
        remove.setAttribute("onclick", "removeBook()");
        remove.innerText = "REMOVE";

        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(read);
        book.appendChild(remove);

        books.appendChild(book);
    }
}
