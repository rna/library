window.onload = function() {
  /* Add your logic here */
  let myLibrary = [
    {
      slno:1,
      title:"Alchemist",
      author:"Paulo Coehlo",
      pages:182,
      readStatus:"unread",
      action:"Delete"
    }
  ];
  
/* create table */


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();


  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
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
generateTable(table, myLibrary);
generateTableHead(table, data);




  function Book(title,author,pages) {
      this.slno = slno
      this.title =  title
      this.author =  author
      this.pages = pages
      this.readStatus = readStatus
      this.action = action
  }
  
  function addBookToLibrary(){
  
  }
  }
