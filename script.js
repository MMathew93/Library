//GLOBAL VARIABLES//
const titleInput = document.getElementById("title-input")
const authorInput = document.getElementById("author-input")
const pagesInput = document.getElementById("pages-input")
const submit = document.getElementById("submit")
const cancel = document.getElementById("cancel")
const addbook = document.getElementById("new-book")
const formContainer = document.querySelector(".form-container")


//Array that holds user submissions
let myLibrary = [];

//book constructor
class Book {
  constructor(title, author, pages, read) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = true;
  }

  info() {
    return `${this._title} by ${this._author}, ${this._pages} pages, ${this._read}`
  }
}

//Shows the hidden form for users to submit books
function showForm() {
  formContainer.classList.remove("hidden");
}


//Adds user submission into array    
function addBookToLibrary() {
  let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
  myLibrary.push(newBook);
  console.log(myLibrary)
  clear()
}

//Cancel button clears and re-hides form
function close() {
  clear();
  hideForm();
}

//Clears the form
function clear() {
  titleInput.value = ""
  authorInput.value = ""
  pagesInput.value = ""
}

//Re-hides the form
function hideForm() {
  formContainer.classList.add("hidden");
}


//EVENT LISTENERS//
submit.addEventListener("click", addBookToLibrary);
cancel.addEventListener("click", close);
addbook.addEventListener("click", showForm);