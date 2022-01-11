let myLibrary = [];

function Book(title, author, length, read) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
    this.info = function() {
        const readstring = read ? "already read" : "not read yet";
        return `${title} by ${author}, ${length} pages, ${readstring}`;
    }
}

function addBookToLibrary(title, author, length, read) {
    myLibrary.push(new Book(title, author, length, read));
}

function display() {
    let body = document.getElementsByTagName("body")[0];
    myLibrary.forEach(function(item) {
        let row = document.createElement("tr");
        let rowText = document.createTextNode(item.info());
        row.appendChild(rowText);
        body.appendChild(row);
    });
}

document.getElementById('newBookBtn').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
})


hp = new Book("Harry Potter", "JK Rowling", 305, true);
gg = new Book("Great Gatsby", "F Scott Fitzgerald", 280, false);
addBookToLibrary("Harry Potter", "JK Rowling", 305, true);
addBookToLibrary("Great Gatsby", "F Scott Fitzgerald", 280, false);
display();