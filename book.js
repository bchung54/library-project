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
    let collection = document.getElementById('collection');
    
    // Clear contents from collection
    while (collection.firstChild) {
        collection.removeChild(collection.lastChild);
    }

    // Loops through myLibrary and displays each book as a card
    myLibrary.forEach(function(item) {
        let container = document.createElement('div');
        container.classList.add('collection-container');
        let card = document.createElement('div');
        card.classList.add('card');
        let cardText = document.createTextNode(item.info());
        card.appendChild(cardText);
        container.appendChild(card)
        collection.appendChild(container);
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
addBookToLibrary("Great", "F Scott", 250, false);
addBookToLibrary("Chicken", "F Scott Fitzgerald", 100, true);


display();