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
                let N = 0;
                for(let book of books) {
                    N++;
                }
                console.log(`Всего ${N} книг`);
            },

            total: function () {
                let M=0;
                for(let book of books) {
                    M=M+book.price;
                }
                console.log(`Общая стоимость ${M}р.`)
            }
    };
}();









