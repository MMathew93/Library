//GLOBAL VARIABLES//
const titleInput = document.getElementById("title-input")
const authorInput = document.getElementById("author-input")
const pagesInput = document.getElementById("pages-input")
const submit = document.getElementById("submit")
const cancel = document.getElementById("cancel")
const addbook = document.getElementById("new-book")
const formContainer = document.querySelector(".form-container")
const erase = document.querySelector(".erase")
const readMe = document.querySelector(".readMe")


//Array that holds user submissions with starters
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const harryPotter = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 246, true);
let library = [hobbit, harryPotter];


populateStorage();


//book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  if (read === "true" || read === true) {
    this.read = true;
  } else {
    this.read = false;
  }
}


//Shows the hidden form for users to submit books
function showForm() {
  formContainer.classList.remove("hidden");
}

render();

//Adds user submission into array    
function addBookToLibrary(event) {
  let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, document.querySelector('input[name=read]:checked').value);
  library.push(newBook);
  populateStorage();
  render()
  clear();
  event.preventDefault();
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

//deletes books from array and updates cards on shelf
function deleteBook(id) {
  library.splice(id, 1);
  populateStorage()
  render();
}

//Re-hides the form
function hideForm() {
  formContainer.classList.add("hidden");
}

//toggles read to not read, visa versa
function readToggle(id) {
  library[id].read = !library[id].read;
  let status= document.getElementById(`${id} h5`)
  if(library[id].read === true) {
    status.innerHTML = 'Read'
  } else {
    status.innerHTML = 'Not Read'
  }
}

//EVENT LISTENERS//
submit.addEventListener("click", addBookToLibrary);
cancel.addEventListener("click", close);
addbook.addEventListener("click", showForm);

//local storage
function render() {
  if (!localStorage.getItem('library')) {
    populateStorage();
  }
  // Set local storage as the library array, returning it from a string with JSON.parse
  library = JSON.parse(localStorage.getItem('library'));
  let shelfString = '';
  for (let i = 0; i < library.length; i++) {
    shelfString += `
      <div class="book" id="${i}">
          <div class="book-cover">
              <h2>${library[i].title}</h2>
          </div>
          <div class="book-info">
              <h3>${library[i].author}</h3>
              <h4>${library[i].pages} pages</h4>
              <button class="readMe" onclick= "readToggle(${i})" >
                <h5 id="${i} h5">${library[i].read ? 'Read' : 'Not Read'}</h5>
              </button>
          </div>
          <button type="button" class="erase" onclick= "deleteBook(${i})">X</button>
      </div>
      
      `;
  }
  shelf.innerHTML = shelfString;
}

function populateStorage() {
  localStorage.setItem('library', JSON.stringify(library));
}
