window.onload = function () {
  let myLibrary = [
    {
      slno: 1,
      title: "Alchemist",
      author: "Paulo Coehlo",
      pages: 182,
      readStatus: "unread",
      action: "Delete",
    },
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

  let table = document.querySelector("table");
  let data = Object.keys(myLibrary[0]);

  generateTableHead(table, data);
  generateTable(table, myLibrary);

  function Book(title, author, pages) {
    //this.slno = slno;
    this.title = title;
    this.author = author;
    this.pages = pages;
    //this.readStatus = readStatus;
    //this.action = action;
  }

  // New Book Form Generation
  let button = document.getElementById("newBook");

  button.addEventListener("click", function () {
    form = document.createElement("form");
    form.name = "newBookForm";
    form.method = "POST";

    title_field = document.createElement("input");
    title_field.type = "text";
    title_field.placeholder = "Enter Book Title";
    title_field.name = "titleInput";
    form.appendChild(title_field);

    author_field = document.createElement("input");
    author_field.type = "text";
    author_field.placeholder = "Enter Author name";
    author_field.name = "authorInput";
    form.appendChild(author_field);

    pages_field = document.createElement("input");
    pages_field.type = "text";
    pages_field.placeholder = "Enter No of Pages";
    pages_field.name = "pagesInput";
    form.appendChild(pages_field);

    submit_button = document.createElement("input");
    submit_button.type = "submit";
    submit_button.value = "Add Book";
    form.appendChild(submit_button);

    document.getElementById("newBookForm").appendChild(form);
  });

  function addBookToLibrary() {
    //event.preventDefault();
    const title = document.getElementsByName('titleInput').value;
    const author = document.getElementsByName('authorInput').value;
    const pages = document.getElementsByName('pagesInput').value;
    const newbook = new Book(title, author, pages);
    myLibrary.push(newbook);
    console.log(title, author, pages);
  }
};
