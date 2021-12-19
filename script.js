let myLibrary = new Array;



class Book {
  
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.date = new Date();
  }
    
    getTitle = function() {
      return this.title;
    }
    getAuthor = function() {
      return this.author;
    }

    getPages = function() {
      return this.pages;
    }

    hasBeenRead = function() {
      return this.read;
    }

    getDate = function() {
      return this.date;
    }

}

let addBookToThelibrary = function(book) {
  myLibrary.push(book);
}


document.getElementById('submitBtn').addEventListener('submit', function(event) {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');

  const newBook = new Book(title.value, author.value, pages.value, read.value);
  
  
  addBookToLibrary(newBook);
  // console.log(myLibrary);
 
  // form.reset();
  event.preventDefault();

});




let renderBooks = function() {
  
  for(let i = 0; i < myLibrary.length; i++) {
  
let ab = document.createElement('div');

ab.style.backgroundColor = 'white';
ab.style.border = 'black solid 2px';
ab.style.width = '996px';
ab.style.height = '50px';
ab.style.display = 'flex';
ab.style.justifyContent = 'center';
ab.style.marginLeft = '209px';

document.body.appendChild(ab);

let titleDiv = document.createElement('div');
let authorDiv = document.createElement('div');
let pagesDiv = document.createElement('div');
let readDiv = document.createElement('div');
let dateDiv = document.createElement('div');
let deleteDiv = document.createElement('div');




ab.appendChild(titleDiv);
ab.appendChild(authorDiv);
ab.appendChild(pagesDiv);
ab.appendChild(readDiv);
ab.appendChild(dateDiv);
ab.appendChild(deleteDiv);

titleDiv.style.width = '170px';
authorDiv.style.width = '170px';
pagesDiv.style.width = '170px';
readDiv.style.width = '170px';
dateDiv.style.width = '170px';
deleteDiv.style.width = '170px';

titleDiv.style.height = '50px';
authorDiv.style.height = '50px';
pagesDiv.style.height = '50px';
readDiv.style.height = '50px';
dateDiv.style.height = '50px';
deleteDiv.style.height = '50px';


titleDiv.style.display = 'flex';
authorDiv.style.display = 'flex';
pagesDiv.style.display = 'flex';
readDiv.style.display = 'flex';
dateDiv.style.display = 'flex';
deleteDiv.style.display = 'flex';


titleDiv.style.justifyContent = 'center';
authorDiv.style.justifyContent = 'center';
pagesDiv.style.justifyContent = 'center';
readDiv.style.justifyContent = 'center';
dateDiv.style.justifyContent = 'center';
deleteDiv.style.justifyContent = 'center';

titleDiv.style.alignItems = 'center';
authorDiv.style.alignItems = 'center';
pagesDiv.style.alignItems = 'center';
readDiv.style.alignItems = 'center';
dateDiv.style.alignItems = 'center';
deleteDiv.style.alignItems = 'center';



titleDiv.innerHTML += myLibrary[i].getTitle();
authorDiv.innerHTML += myLibrary[i].getAuthor();
pagesDiv.innerHTML += myLibrary[i].getPages();
readDiv.innerHTML += myLibrary[i].hasBeenRead();
dateDiv.innerHTML += myLibrary[i].getDate().toDateString();
deleteDiv.innerHTML += "merda";

  }
}




