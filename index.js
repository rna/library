window.onload = function () {
  /* create table */

  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      row.appendChild(th);
      th.appendChild(text);
    }
  }

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  function displayTable() {
    let table = document.querySelector("table");
    let headerData = ["Sl.no", "Title", "Author", "Pages", "Status", "Action"];

    generateTableHead(table, headerData);
    generateTable(table, myLibrary);
  }

  displayTable();

  function Book(slno, title, author, pages, readStatus) {
    this.slno = slno;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = `<button onclick="javascript:readstat(this)">${readStatus}</button>`;
    this.action = `<button onclick="javascript:deleteBook(${slno},this)">X</button>`;
  }

  // New Book Form Generation
  let button = document.getElementById("newBook");

  button.addEventListener("click", function () {
    form = document.createElement("form");
    form.name = "newBookForm";
    form.id = "newBookForm";

    title_field = document.createElement("input");
    title_field.type = "text";
    title_field.placeholder = "Enter Book Title";
    title_field.name = "title";
    title_field.id = "title";
    form.appendChild(title_field);

    author_field = document.createElement("input");
    author_field.type = "text";
    author_field.placeholder = "Enter Author name";
    author_field.name = "author";
    author_field.id = "author";
    form.appendChild(author_field);

    pages_field = document.createElement("input");
    pages_field.type = "text";
    pages_field.placeholder = "Enter No of Pages";
    pages_field.name = "pages";
    pages_field.id = "pages";
    form.appendChild(pages_field);

    read_field = document.createElement("select");
    read_option1 = document.createElement("option");
    read_option2 = document.createElement("option");
    read_option1.appendChild(document.createTextNode("Read"));
    read_option1.value = "Read";
    read_option2.appendChild(document.createTextNode("Unread"));
    read_option2.value = "Unread";
    read_field.appendChild(read_option1);
    read_field.appendChild(read_option2);
    read_field.name = "read status";
    read_field.id = "readStatus";
    form.appendChild(read_field);

    submit_button = document.createElement("input");
    submit_button.type = "submit";
    submit_button.value = "Add Book";
    form.appendChild(submit_button);

    document.getElementById("newBookForm").appendChild(form);
  });

  // Add Book to Library
  let form = document.getElementById("newBookForm");
  form.addEventListener("submit", function (e) {
    const slno = myLibrary.length + 1;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").value;
    let newbook = new Book(slno, title, author, pages, readStatus);
    myLibrary.push(newbook);
    addBooktoTable(newbook);
    console.log(myLibrary);
    e.preventDefault();
  });

  // Display book in table
  function addBooktoTable(book) {
    let table = document.querySelector("table");
    let row = table.insertRow();

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
};

let myLibrary = [
  // {
  //   slno: 1,
  //   title: "Alchemist",
  //   author: "Paulo Coehlo",
  //   pages: 182,
  //   readStatus: "unread",
  //   action: "Delete",
  // }
];

// Delete a Book

function deleteBook(i,x) {
  myLibrary.splice(i, 1);
  let table = x.parentNode.parentNode.parentNode;
  let row = x.parentNode.parentNode.rowIndex;

  table.deleteRow(row);
}

function readstat(r) {
  if (r.innerHTML == "unread") {
    r.innerHTML = "read";
  } else {
    r.innerHTML = "unread";
  }
}
