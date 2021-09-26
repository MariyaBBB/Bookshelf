"use strict";
let chocolate = function () {
    let choco = [];
    return {
        add: function(name, type, price) {
            let availableType = [белый, черный, молочный];
            for(let types of availableType){
                if (type = types) {
                    let chocolate = {
                        name: name, 
                        type: type,
                        price: price
                    }
                    choco.push(chocolate);
                }
            }
        }
    }
}();


