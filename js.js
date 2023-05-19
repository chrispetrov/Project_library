function Book(name,author) {
    this.name=name
    this.author=author
    this.read=false
  }

let myLibrary = [];
const contain = document.getElementById('container')
const bookOne = new Book("Teddy", "Rosefalt")
addBookToLibrary(bookOne);
const bookTwo = new Book("Mad", "House")
addBookToLibrary(bookTwo);





function addBookToLibrary(book) {
    myLibrary.push(book)
    const newP=document.createElement("p")
    const buttRemove=document.createElement("button")
    newP.setAttribute("data-number", myLibrary.length-1)
    buttRemove.innerText='Remove Book'
    buttRemove.setAttribute("data-number", myLibrary.length-1)
    buttRemove.addEventListener("click", removeBook)
    newP.innerHTML= book.name + " " + book.author
    
   
    newP.appendChild(buttRemove)
    contain.appendChild(newP)
}

function checkLibrary(){
    contain.innerHTML='<button onclick="addBook()">Add new Book</button>'
    myLibrary.forEach(book => {
        const newP=document.createElement("p")
        const buttRemove=document.createElement("button")
        newP.setAttribute("data-number", myLibrary.length-1)
        buttRemove.innerText='Remove Book'
        buttRemove.setAttribute("data-number", myLibrary.length-1)
        buttRemove.addEventListener("click", removeBook)
        newP.innerHTML= book.name + " " + book.author
        
       
        newP.appendChild(buttRemove)
        contain.appendChild(newP)
    });
}

function removeBook(){
    const del=this.getAttribute("data-number")
    console.log(del)
    
    myLibrary.splice(del,1)
    console.log(myLibrary)
    checkLibrary()
}
function addBook(){
    const name=prompt("Enter the Name of the Book")
    const author=prompt("Enter the author of the Book")
    const newBook= new Book(name,author)
    addBookToLibrary(newBook)
    console.log(myLibrary)
}

Book.prototype.hasRead = function(){
    console.log("read?")
    this.read=true
}
console.log(bookOne.read)
bookOne.hasRead()
console.log(bookOne.read)
console.log(myLibrary)