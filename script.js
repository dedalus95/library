const btn = document.getElementById('btn');
btn.innerHTML = 'sto cazzo';
const form = document.getElementById('book-form');

function showForm() {
  form.classList.remove('hide-form');
}

function showTable() {
  let tableHeader = document.getElementById('table-header');
  let tableRow = document.getElementById('table-row');
  tableHeader.classList.remove('hidden');
  // tableRow.classList.remove('hidden');
}

btn.addEventListener('mousedown', showForm);

let myLibrary = [];

function Book(title, author, pages, read)
{
  this.title = title 
  this.author = author
  this.pages = pages 
  this.read = read 
}

let a = document.getElementById('book-form').addEventListener('submit', function(event) {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  addBookToLibrary(title.value, author.value, pages.value, read.value);
    cloneRow();
  // loopsThroughTheArray();
  showTable();
  form.reset();
  event.preventDefault();

});

function addBookToLibrary(title, author, pages, read) {
  a = new Book(title, author, pages, read);
  myLibrary.unshift(a.title, a.author, a.pages, a.read);
}


function loopsThroughTheArray() {
  let one = document.getElementById('1');
  let two = document.getElementById('2');
  let three = document.getElementById('3');
  let four = document.getElementById('4');
  
    one.innerHTML += `${myLibrary[0]} `;
    two.innerHTML += `${myLibrary[1]} `;
    three.innerHTML += `${myLibrary[2]} `;
    four.innerHTML += `${myLibrary[3]} `;
    }



    function cloneRow() {
      let row = document.getElementById("table-row"); // find row to copy
      let header = document.getElementById('table-header');
      let clone = row.cloneNode(true); // copy children too
      row.before(clone); // add new row to end of table
      console.log(clone.childNodes)
      clone.classList.remove('hidden');
      clone.childNodes[1].innerHTML = myLibrary[0];
      clone.childNodes[3].innerHTML = myLibrary[1];
      clone.childNodes[5].innerHTML = myLibrary[2];
      clone.childNodes[7].innerHTML = myLibrary[3];


      console.log(clone);

    }

  