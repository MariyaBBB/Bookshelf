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
                for(let book of books) {
                    console.log(`${book.name} (${book.author}) - ${book.price}р.`);
                }
            },

            amount: function () {
                let n = 0;
                for(let book of books) {
                    n++;
                }
                console.log(`Всего ${n} книг`);
            },

            total: function () {
                let m=0;
                for(let book of books) {
                    m=m+book.price;
                }
                console.log(`Общая стоимость ${m}р.`)
            },

            delete: function (name) {
                for(let i=0; i<books.length; i++) {
                    if (books[i].name == name) {
                        books.splice(i,1);
                    }
                }

            }
    };
}();










