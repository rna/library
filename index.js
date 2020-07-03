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

  function Book(slno, title, author, pages, readStatus, action) {
    this.slno = slno
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.action = action;
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
    read_option1.appendChild(document.createTextNode('Read'))
    read_option1.value='Read';
    read_option2.appendChild(document.createTextNode('Unread'))
    read_option2.value='Unread';
    read_field.appendChild(read_option1)
    read_field.appendChild(read_option2)
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
  let form = document.getElementById('newBookForm');  
  form.addEventListener('submit',function(e){
    const slno = myLibrary.length+1;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').value;
    const action = deleleLink(slno);
    let newbook = new Book(slno, title, author, pages,readStatus,action);
    myLibrary.push(newbook);
    addBooktoTable(newbook);
    console.log(myLibrary);
    e.preventDefault();
  })

// Display book in table
  function addBooktoTable(book){
    let table = document.querySelector("table");
    let row = table.insertRow();
    
    row.innerHTML = `
        <td>${book.slno}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.readStatus}</td>
        <td>${book.action}</td>
        `
    table.appendChild(row);
  }


// Delete a Book

  function deleteBook(i){
    myLibrary.splice(i,1);
    let table = document.querySelector("table");
    table.deleteRow(i);
  }

  function deleleLink(num){
    let tag = document.createElement(a);
    let text = document.createTextNode("Delete");
    tag.appendChild(text);
    tag.href = `javascript:deleteBook(${num})`
    return tag
  }
};
