const myLibrary = [];

// Delete a Book
function deleteBook(i, x) {
  const index = myLibrary.findIndex((e) => e.slno === i);
  myLibrary.splice(index, 1);
  const table = x.parentNode.parentNode.parentNode;
  const row = x.parentNode.parentNode.rowIndex;

  table.deleteRow(row);
}

function readstat(i, r) {
  const index = myLibrary.findIndex((e) => e.slno === i);
  const row = r.parentNode.parentNode.rowIndex;

  if (r.innerHTML === 'Unread') {
    r.innerHTML = 'Read';
    myLibrary[
      index
    ].readStatus = `<button onclick="javascript:readstat(${row},this)">Read</button>`;
  } else {
    r.innerHTML = 'Unread';
    myLibrary[
      index
    ].readStatus = `<button onclick="javascript:readstat(${row},this)">Unread</button>`;
  }
}

window.onload = function () {
  // create table
  function generateTableHead(table, data) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    row.id = 'tableHeading';

    for (const key of data) {
      const th = document.createElement('th');
      const text = document.createTextNode(key);
      row.appendChild(th);
      th.appendChild(text);
    }
  }

  function generateTable(table, data) {
    for (const element of data) {
      const row = table.insertRow();
      for (const key in element) {
        const cell = row.insertCell();
        const text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  function displayTable() {
    const table = document.querySelector('table');
    const headerData = ['Sl.no', 'Title', 'Author', 'Pages', 'Status', 'Action'];

    generateTableHead(table, headerData);
    generateTable(table, myLibrary);
  }

  displayTable();

  // Book Prototype
  function Book(slno, title, author, pages, readStatus) {
    this.slno = slno;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = `<button onclick="javascript:readstat(${slno},this)">${readStatus}</button>`;
    this.action = `<button onclick="javascript:deleteBook(${slno},this)">X</button>`;
  }

  // New Book Form Generation
  const button = document.getElementById('newBook');

  button.addEventListener('click', () => {
    const form = document.createElement('form');
    form.name = 'newBookForm';
    form.id = 'newBookForm';

    const titleField = document.createElement('input');
    titleField.type = 'text';
    titleField.placeholder = 'Enter Book Title';
    titleField.name = 'title';
    titleField.id = 'title';
    form.appendChild(titleField);

    const authorField = document.createElement('input');
    authorField.type = 'text';
    authorField.placeholder = 'Enter Author name';
    authorField.name = 'author';
    authorField.id = 'author';
    form.appendChild(authorField);

    const pagesField = document.createElement('input');
    pagesField.type = 'text';
    pagesField.placeholder = 'Enter No of Pages';
    pagesField.name = 'pages';
    pagesField.id = 'pages';
    form.appendChild(pagesField);

    const readField = document.createElement('select');
    const readOption1 = document.createElement('option');
    const readOption2 = document.createElement('option');
    readOption1.appendChild(document.createTextNode('Read'));
    readOption1.value = 'Read';
    readOption2.appendChild(document.createTextNode('Unread'));
    readOption2.value = 'Unread';
    readField.appendChild(readOption1);
    readField.appendChild(readOption2);
    readField.name = 'read status';
    readField.id = 'readStatus';
    form.appendChild(readField);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Add Book';
    submitButton.id = 'submitButton';
    form.appendChild(submitButton);

    document.getElementById('newBookForm').appendChild(form);
  });

  // Display book in table
  function addBooktoTable(book) {
    const table = document.querySelector('table');
    const row = table.insertRow();

    row.innerHTML = `
        <td>${book.slno}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td id="stat">${book.readStatus}</td>
        <td>${book.action}</td>
        `;
    table.appendChild(row);
  }

  // Add Book to Library
  const form = document.getElementById('newBookForm');
  form.addEventListener('submit', (e) => {
    const slno = myLibrary.length + 1;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').value;
    const newbook = new Book(slno, title, author, pages, readStatus);
    myLibrary.push(newbook);
    addBooktoTable(newbook);

    e.preventDefault();
  });
};
