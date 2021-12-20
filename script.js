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


let button = document.getElementById('book-form');
button.addEventListener('submit', function(event) {
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

});




let renderBooks = function() {
  // console.log(newBook.getIsRendered());


for(let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i].getIsRendered() === false || myLibrary.length === 0) {

    
   
let ab = document.createElement('div');
setContainerDimensions(ab);
document.body.appendChild(ab);
ab.dataset.book = myLibrary[i].getTitle() + myLibrary[i].getPages();



let titleDiv = document.createElement('div');
let authorDiv = document.createElement('div');
let pagesDiv = document.createElement('div');
let readDiv = document.createElement('div');
      let yesOrNoDiv = document.createElement('div');
      readDiv.appendChild(yesOrNoDiv);
let dateDiv = document.createElement('div');
let deleteDiv = document.createElement('div');
let deleteBtn = document.createElement('button');
let toggleBtn = document.createElement('button');
let toggleIcon = document.createElement('i');
toggleIcon.classList.add('fa');
toggleIcon.classList.add('fa-exchange');
toggleBtn.style.border = '#C13584 groove 2px';
toggleBtn.style.borderRadius = '46px';
toggleBtn.style.marginLeft = '5px';
toggleBtn.style.cursor = 'pointer';




deleteBtn.style.width = "50px";
deleteBtn.style.height = '25px';
deleteBtn.style.border = 'black solid 1px';
deleteBtn.style.innerHTML = 'delete';
deleteBtn.style.cursor = 'pointer';
deleteBtn.style.textAlign = 'center';
deleteBtn.style.outline = 'none';
deleteBtn.style.border = '#C13584 groove 2px';
deleteBtn.style.borderRadius = '46px';
deleteBtn.style.backgroundColor = 'white';


deleteBtn.innerHTML = 'delete';
deleteBtn.dataset.book = myLibrary[i].getTitle() + myLibrary[i].getPages();
toggleBtn.dataset.book = myLibrary[i].getTitle() + myLibrary[i].getPages();


let arrayOfDivs = [];
arrayOfDivs.push(titleDiv);
arrayOfDivs.push(authorDiv);
arrayOfDivs.push(pagesDiv);
arrayOfDivs.push(readDiv);
arrayOfDivs.push(dateDiv);
arrayOfDivs.push(deleteDiv);

setDimensions(ab, arrayOfDivs);

titleDiv.innerHTML += myLibrary[i].getTitle();
authorDiv.innerHTML += myLibrary[i].getAuthor();
pagesDiv.innerHTML += myLibrary[i].getPages();
readDiv.childNodes[0].innerHTML += myLibrary[i].hasBeenRead();
dateDiv.innerHTML += myLibrary[i].getDate().toDateString();

deleteDiv.appendChild(deleteBtn);
toggleBtn.appendChild(toggleIcon);
readDiv.appendChild(toggleBtn);

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


  function setContainerDimensions(container) {
    container.style.backgroundColor = 'white';
    container.style.border = 'black solid 2px';
    container.style.width = '996px';
    container.style.height = '50px';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.margin = 'auto';
  }




  function setDimensions(container, array) {

      for (let i = 0; i < array.length; i++) {
        container.appendChild(array[i]);
        array[i].style.width = '170px';
        array[i].style.height = '50px';
        array[i].style.display = 'flex';
        array[i].style.justifyContent = 'center';
        array[i].style.alignItems = 'center';
      }
  }


 