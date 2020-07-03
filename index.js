window.onload = function () {
  let myLibrary = [
    {
      slno: 1,
      title: "Alchemist",
      author: "Paulo Coehlo",
      pages: 182,
      readStatus: "unread",
      action: "Delete",
    }
  ];

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

  function displayTable(){
    let table = document.querySelector("table");
    let data = Object.keys(myLibrary[0]);

    generateTableHead(table, data);
    generateTable(table, myLibrary);
  }

  displayTable();

  function Book(title, author, pages) {
    // this.slno = slno;
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.readStatus = readStatus;
    // this.action = action;
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

    submit_button = document.createElement("input");
    submit_button.type = "submit";
    submit_button.value = "Add Book";
    form.appendChild(submit_button);
    
    document.getElementById("newBookForm").appendChild(form);
  });


  // Add Book to Library
  let form = document.getElementById('newBookForm');  
  form.addEventListener('submit',function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let newbook = new Book(title, author, pages);
    myLibrary.push(newbook);
    addBooktoTable(newbook);
    console.log(myLibrary);
    e.preventDefault();
  })


  function addBooktoTable(book){
    let table = document.querySelector("table");
    let row = table.insertRow();
    
    row.innerHTML = `
        <td>${myLibrary.length+1}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>read</td>
        <td>Delete</td>
        `
    table.appendChild(row);
  }
};
