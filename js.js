class Book {
    constructor(name,author){
        this.name=name
        this.author=author
    }
    addBookToLibrary(book) {
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
}

let myLibrary = [];
const contain = document.getElementById('container')
const library= new Book();
const bookOne = new Book("Teddy", "Rosefalt")
console.log(bookOne)
library.addBookToLibrary(bookOne);
const bookTwo = new Book("Mad", "House")
library.addBookToLibrary(bookTwo);







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
    library.addBookToLibrary(newBook)
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