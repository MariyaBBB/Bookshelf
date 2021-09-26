"use strict";
let chocolate = function () {
    let choco = [];
    return {
        add: function(name, type, weight, price) {
            let availableType = ['белый', 'черный', 'молочный'];
            let check = availableType.includes(type);
            if (check === true)    {
                let item = {
                    name: name,
                    type: type,
                    weight: weight,
                    price: price
                }
                choco.push(item);
            }
            else {
                console.log('Невозможно добавить указанный тип.');
            }
            
        },

        list: function(){
            for(let item of choco) {
                console.log(`${item.name}, ${item.type} ${item.weight} грамм ${item.price}p.`);
            }
        }
    }
}();


