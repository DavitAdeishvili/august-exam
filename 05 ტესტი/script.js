document.addEventListener("DOMContentLoaded", function() {
    class Book {
        constructor(title, read = false, favorite = false) {
            this.title = title;
            this.read = read;
            this.favorite = favorite;
        }
    }

    class BookList {
        constructor(name, author) {
            this.books = [
                new Book("Harry Potter"),
                new Book("Hobbit"),
                new Book("Secret Island"),
                new Book("Quinn Gambit"),
                new Book("Anne Frank"),
                new Book("Invisable man"),
                new Book("Merchant of Venice"),
                new Book("Sherlock Holmes"),
                new Book("Wonder"),
                new Book("Dubliners")
            ];
        }

        render() {
            const bookListElement = document.getElementById("book-list")
            bookListElement.innerHTML = ""

            this.books.forEach((book, index) => {
                const listItem = document.createElement("li");
                listItem.className = "book-item";

                const bookDetails = document.createElement("div")
                bookDetails.className = "book-details"

                const readCheckbox = document.createElement("input");
                readCheckbox.type = "checkbox";
                readCheckbox.className = "read-checkbox";
                readCheckbox.checked = book.read;
                readCheckbox.addEventListener("change", () => {
                    book.read = readCheckbox.checked;
                });

                const bookTitle = document.createElement("span");
                bookTitle.className = "book-title";
                bookTitle.textContent = book.title

                bookDetails.appendChild(readCheckbox)
                bookDetails.appendChild(bookTitle);

                const favoriteButton = document.createElement("button");
                favoriteButton.className = "favorite-button";
                favoriteButton.textContent = "Favorite"
                favoriteButton.addEventListener("click", () => {
                    book.favorite = !book.favorite;
                    favoriteButton.style.background("#ff5100cb")
                });

                listItem.appendChild(bookDetails)
                listItem.appendChild(favoriteButton)

                bookListElement.appendChild(listItem);
            });
        }
    }
    const bookList = new BookList();
    bookList.render();
});