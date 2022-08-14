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
}

function addBook() {
    author = document.getElementById("author").value;
    title = document.getElementById("title").value;
    pages = document.getElementById("pages").value;

    var newBook = new Book(author, title, pages);
    libraryCollection.push(newBook);

    generateBooks();

    console.log("Add Book");
}

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

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

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);

    books.appendChild(book);
}
