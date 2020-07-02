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

myLibrary.forEach(function(item){
  console.log(item)
  document.getElementById('bookData').innerHTML = "<tr><td>"+ item.slno +"</td><td>" + item.title + "</td><td>"
   + item.author + "</td><td>" + item.pages + "</td><td>" + item.readStatus + "</td><td>" + item.action + "</td></tr>"
})


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