let myLibrary = [];

// Create a new book
class Book{
    constructor(title, author, length, read) {
        this.title = title;
        this.author = author;
        this.length = length;
        this.read = read;
    }
    
    get info() {
        const readstring = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.length} pages, ${readstring}`;
    };
    
    readStatusToggle() {
        this.read = !this.read;
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
    myLibrary.forEach(function(element, index) {
        
        const container = document.createElement('div');
        const cardTitle = document.createElement('div');
        const cardDetails = document.createElement('div');
        const removeButton = document.createElement('button');
        const trashIcon = document.createElement('i');
        const readStatusButton = document.createElement('button');

        // Add card classes
        container.classList.add('card');
        if (element.read) {
            container.classList.add('read');
        } else {
            container.classList.add('unread');
        }
        
        // Add card text details and classes
        cardTitle.textContent = element.title;
        cardTitle.classList.add('card-title');
        cardDetails.textContent = `by ${element.author} (${element.length} pages)`;
        cardDetails.classList.add('card-details');

        // Add attributes, class and text to remove button
        removeButton.setAttribute('data-index', index);
        removeButton.classList.add('remove-button');
        removeButton.textContent = "Remove";
        trashIcon.classList.add('material-icons');
        trashIcon.textContent = "delete";
        removeButton.appendChild(trashIcon);

        // Add attribute, class and text to read status button
        readStatusButton.setAttribute('data-index', index);
        readStatusButton.classList.add('read-status-button');
        readStatusButton.appendChild(document.createTextNode(myLibrary[index].read ? 'Read' : 'Unread'));

        // Event: Remove book from library collection when remove button is clicked
        removeButton.addEventListener('click', (e) => {
            myLibrary.splice(parseInt(e.target.getAttribute('data-index')), 1);
            display();
        })

        // Event: Change read status when button is clicked
        readStatusButton.addEventListener('click', (e) => {
            myLibrary[parseInt(e.target.getAttribute('data-index'))].readStatusToggle();
            display();
        })

        container.appendChild(cardTitle);
        container.appendChild(document.createElement('hr'));
        container.appendChild(cardDetails);
        container.appendChild(readStatusButton);
        container.appendChild(removeButton);
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


display();