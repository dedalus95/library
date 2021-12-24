let myLibrary = new Array;



class Book {
  
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.date = new Date();
    this.rendered = false;
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

    setHasBeenRead = value => {
      this.read = value;
    }

    getDate = function() {
      return this.date;
    }

    setIsRendered = (rend) => {
      this.rendered = rend;
    }

    getIsRendered = function() {
      return this.rendered;
    }

}

let addBookToThelibrary = function(book) {
  myLibrary.push(book);
}

function submitBooks(event) {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');

  const newBook = new Book(title.value, author.value, pages.value, read.value);
  
  
  addBookToThelibrary(newBook);
  renderBooks();
  console.log(myLibrary);
 
  form.reset();
  event.preventDefault();

}

let button = document.getElementById('book-form');
button.addEventListener('submit', submitBooks);




let renderBooks = function() {

for(let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i].getIsRendered() === false || myLibrary.length === 0) {

    let ab = document.createElement('tr');
    let tBody = document.getElementById('tbody');
    tBody.appendChild(ab);
    ab.dataset.book = myLibrary[i].getTitle() + myLibrary[i].getPages();

    let titleCell = document.createElement('th');
        titleCell.scope = 'row';
    let authorCell = document.createElement('td');
    let pagesCell = document.createElement('td');
    let readCell = document.createElement('td');
    let yesOrNoDiv = document.createElement('div');
        readCell.appendChild(yesOrNoDiv);
        yesOrNoDiv.id = 'yes-or-no';
    let dateCell = document.createElement('td');
    let deleteCell = document.createElement('td');
    let deleteBtn = document.createElement('button');
        deleteBtn.id = 'deleteBtn';
    let toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggleBtn';
    let toggleIcon = document.createElement('i');
        toggleIcon.classList.add('fa');
        toggleIcon.classList.add('fa-exchange');

        deleteBtn.innerHTML = 'delete';
        deleteBtn.dataset.book = myLibrary[i].getTitle() + myLibrary[i].getPages();
        toggleBtn.dataset.book = myLibrary[i].getTitle() + myLibrary[i].getPages();

        ab.appendChild(titleCell);
        ab.appendChild(authorCell);
        ab.appendChild(pagesCell);
        ab.appendChild(readCell);
        ab.appendChild(dateCell);
        ab.appendChild(deleteCell);


        titleCell.innerHTML += myLibrary[i].getTitle();
        authorCell.innerHTML += myLibrary[i].getAuthor();
        pagesCell.innerHTML += myLibrary[i].getPages();
        readCell.childNodes[0].innerHTML += myLibrary[i].hasBeenRead();
        dateCell.innerHTML += myLibrary[i].getDate().toDateString();

        deleteCell.appendChild(deleteBtn);
        toggleBtn.appendChild(toggleIcon);
        readCell.appendChild(toggleBtn);



myLibrary[i].setIsRendered(true);

toggleStatus(ab, toggleBtn);
removeBooks(ab, deleteBtn, i);
    }
   }
  }


function removeBooks(div, btn) {
  btn.addEventListener('click', () => {

    for(let o = 0; o < myLibrary.length; o++) {
      if(myLibrary[o].getTitle() + myLibrary[o].getPages() === div.dataset.book) {
            myLibrary.splice(o, 1);
            div.remove();
      }
    }
  })
}


function toggleStatus(div, btn) {
  btn.addEventListener('click', () => {

    for(let p = 0; p < myLibrary.length; p++) {
      if(myLibrary[p].getTitle() + myLibrary[p].getPages() === div.dataset.book) {
              if(myLibrary[p].hasBeenRead() === 'yes') {
                myLibrary[p].setHasBeenRead('no');
                div.childNodes[3].childNodes[0].textContent = 'no';
              } else {
                myLibrary[p].setHasBeenRead('yes');
                div.childNodes[3].childNodes[0].textContent = 'yes';
              }
      }
    }
  })
}


