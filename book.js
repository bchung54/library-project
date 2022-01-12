let myLibrary = [];

// Create a new book
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

// Add new book to the library collection
function addBookToLibrary(title, author, length, read) {
    myLibrary.push(new Book(title, author, length, read));
}

// Displays entire library collection
function display() {
    let body = document.getElementsByTagName("body")[0];
    myLibrary.forEach(function(item) {
        let row = document.createElement("tr");
        let rowText = document.createTextNode(item.info());
        row.appendChild(rowText);
        body.appendChild(row);
    });
}

// Event: Display modal form for adding a new book when new book button is clicked
document.getElementById('newBookBtn').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
});

// Event: Close modal form when user clicks on X
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
});

const addBookBtn = document.getElementById('form');

// Event: Add a book through the modal form
addBookBtn.addEventListener('submit', (e) => {

    // Prevent default submit
    e.preventDefault();

    // Clear the popup
    document.querySelector('.bg-modal').style.display = 'none';

    // Collect input and turn into an array
    const inputArr = Array.from(document.querySelectorAll('#form input')).reduce((acc, input) => (
        { ...acc, [input.id]: input.value}), {}
    );

    // Use collected input to add new book to library
    addBookToLibrary(inputArr['newBookTitle'], inputArr['newBookAuthor'], inputArr['newBookPages'], document.getElementById('checkBox').checked);
    
    display();

    form.reset();
});

addBookToLibrary("Harry Potter", "JK Rowling", 305, true);
addBookToLibrary("Great Gatsby", "F Scott Fitzgerald", 280, false);
display();