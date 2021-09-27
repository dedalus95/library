
const btn = document.getElementById('btn');
btn.addEventListener('mousedown', showForm);

function showForm() {
  const form = document.getElementById('book-form');
  form.classList.remove('hidden');
  btn.classList.add('hidden');
}

function showTable() {
  const tableHeader = document.getElementById('table-header');
  tableHeader.classList.remove('hidden');
}

let myLibrary = [];


function Book(title, author, pages, read, added)
{
  this.title = title; 
  this.author = author;
  this.pages = pages; 
  this.read = read; 
  this.added = added;
}

document.getElementById('book-form').addEventListener('submit', function(event) {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  const date = new Date();
  const dateFormat = `${date.getDate()} ${((date.getMonth() + 1)<10?'0':'') + (date.getMonth() + 1)} ${date.getFullYear()} ${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}:${(date.getSeconds()<10?'0':'') + date.getSeconds()}`
  
  addBookToLibrary(title.value, author.value, pages.value, read.value, dateFormat);
  cloneRow();

  showTable();
  form.reset();
 
  event.preventDefault();

});

document.getElementById('deleteBtn').addEventListener('mousedown', () => alert('sto cazzo'));

function addBookToLibrary(title, author, pages, read, date) {
  a = new Book(title, author, pages, read, date);
  myLibrary.unshift(a);
  console.log(a);
}

function removeElement(elem) {
  elem.remove();
}


    function cloneRow() {      
      let row = document.getElementById("table-row"); // find row to copy
      let table = document.getElementById("table");
      let cloneRow = row.cloneNode(true); // copy children too
      table.appendChild(cloneRow);
      cloneRow.classList.remove('hidden');
      cloneRow.childNodes[1].innerHTML = myLibrary[0].title;
      cloneRow.childNodes[3].innerHTML = myLibrary[0].author;
      cloneRow.childNodes[5].innerHTML = myLibrary[0].pages;
      cloneRow.childNodes[9].innerHTML = myLibrary[0].added;
      cloneRow.childNodes[11].childNodes[1].addEventListener('click', () => {
        removeElement(cloneRow);
      })


      if (myLibrary[0].read === 'yes')
      {cloneRow.childNodes[7].innerHTML = setIcon('check', 'green');}
      else if (myLibrary[0].read === 'Currently reading')    
      {cloneRow.childNodes[7].innerHTML = setIcon('arrow-right', 'black');}
      else {
        cloneRow.childNodes[7].innerHTML = setIcon('times', 'red');
       }

      cloneRow.childNodes[7].addEventListener('click', () => {
        let a = cloneRow.childNodes[7].innerHTML;
        if (a === setIcon('check', 'green')) {cloneRow.childNodes[7].innerHTML = setIcon('times', 'red')}
        else if (a === setIcon('times', 'red')) {cloneRow.childNodes[7].innerHTML = setIcon('arrow-right', 'black')}
        else {cloneRow.childNodes[7].innerHTML = setIcon('check', 'green')}   
    })}

    function setIcon(icon, color) {
      return `<i class="fa fa-${icon}" style="color: ${color}"></i>`
    }