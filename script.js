function Book(title, author, pages, read) {
    this._title= title;
    this._author= author;
    this._pages= pages;
    this._read= true;
    info() {
      return `The ${this._title} by ${this._author}, ${this._pages} pages, ${this._read}`
    }
  }
  
  
  const hobbit= new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
  console.log(hobbit.info)