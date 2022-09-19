console.log("File attached successfully!");

// constructor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor

function Display() {

}

//  Add methods to display prototype
Display.prototype.add = function (book) {
    console.log('Adding to ui');
    tableBody = document.getElementById('tableBody');
    let uiString = `
        <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        </tr>`;
    tableBody.innerHTML += uiString;
};

// Implementing the clear function

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
};

// implementing the validate function

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// Show Function

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message :</strong> ${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('Programming');
    let cooking = document.getElementById('Cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    console.log('Form Submitted!');

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been added');
    }
    else {
        //return error
        display.show('danger', ' Sorry, You cannot add this Book');
    }


    e.preventDefault();

}