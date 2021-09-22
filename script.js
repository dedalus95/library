const btn = document.getElementById('btn');
btn.innerHTML = 'sto cazzo';

function showForm() {
  const form = document.getElementById('book-form');
  form.classList.remove('hide-form');
  form.classList.add('display-form');
}

btn.addEventListener('mousedown', function() {
  showForm();
});


let myLibrary = [];

function Book(title, author, pages, read)
{
  this.title = title 
  this.author = author
  this.pages = pages 
  this.read = read 
}

function addBookToLibrary() {
  
  let a = new Book('Der Zauberberg', 'Thomas Mann', 767, 'read');

  myLibrary.push(`${a.title}, ${a.author}, ${a.pages}, ${a.read}.`);
}


function loopsThroughTheArray() {
  for(let i = 0; i < myLibrary.length; i++) {
    document.body.innerHTML += `${myLibrary[i]} `;
    }
}



addBookToLibrary()
loopsThroughTheArray()