"use strict";

let bookshelf = function () {
    let books = [];
    return {
            add: function (name, author, price) {
                let book = {
                    name: name,
                    author: author,
                    price: price
                };

                books.push(book);
            },

            list: function () {
                for(let i=0; i<books.length; i++) {
                    let book = books[i];
                    console.log(`${book.name} (${book.author}) - ${book.price}р.`);
                }
            }
    };
}();





