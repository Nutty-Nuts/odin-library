/*

    TODO: Refactor Code

    TODO: Implement Data Attribute Values in HTML for ease of Access

    TODO: Get the Read Status Button Working per Instance

    TODO: Get the Remove Button working per Instance
    
*/

let addBtn = document.getElementById("add");
let modal = document.getElementById("modal");
let close = document.getElementById("close");

let bookStorage = [];

addBtn.addEventListener("click", showElement);
close.addEventListener("click", hideElement);

function showElement() {
    modal.style.display = "block";

    console.log("Modal Visible");
}

function hideElement() {
    modal.style.display = "none";

    console.log("Modal Invisible");
}
