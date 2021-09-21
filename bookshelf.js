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
            }
    };
}();
bookshelf.add('Семейная жизнь весом 148 ф', 'Джон Ирвинг', 600);
bookshelf.add('Последняя ночь у извилистой реки', 'Джон Ирвинг', 700);
bookshelf.list();





