

let outPutArea = document.getElementById('output');

var buttons = {

        one : document.getElementById('one'),
        two : document.getElementById('two'),
        three : document.getElementById('three'),
        four : document.getElementById('four'),
        five : document.getElementById('five'),
        six : document.getElementById('six'),
        seven : document.getElementById('seven'),
        eight : document.getElementById('eight'),
        nine : document.getElementById('nine'),
        zero : document.getElementById('zero'),

    clear: document.getElementById('clear'),

    plus : document.getElementById('plus'),

    minus : document.getElementById('minus'),

    divide : document.getElementById('divide'),

    times : document.getElementById('times'),

    posNeg : document.getElementById('pos-neg'),

    decimal : document.getElementById('decimal'),

    equals : document.getElementById('equals'),   
}

var arithmetic = {
    
    plus: function(){
    
    },
    
    minus: function(){

    },

    divide: function(){

    },
    
    times: function(){

    }
};

var funcs = {

    posNeg: function(){

    },

    percentage: function(){

    },

    clear: function(){
            outPutArea.innerHTML = '0';
            console.log("clear button clicked");
        },

    equals: function(){

    }

};

var handlers = {

    clear : buttons.clear.addEventListener('click', function(){
        funcs.clear()
    }),

    one : buttons.one.addEventListener('click', function(){
        outPutArea.innerHTML += '1';
    }),

    two : buttons.two.addEventListener('click', function(){
        outPutArea.innerHTML += '2';
    }),

    three : buttons.three.addEventListener('click', function(){
        outPutArea.innerHTML += '3';
    }),

    four : buttons.four.addEventListener('click', function(){
        outPutArea.innerHTML += '1';
    }),

    five : buttons.five.addEventListener('click', function(){
        outPutArea.innerHTML += '5';
    }),

    six : buttons.six.addEventListener('click', function(){
        outPutArea.innerHTML += '6';
    }),

    seven : buttons.seven.addEventListener('click', function(){
        outPutArea.innerHTML += '7';
    }),

    eight : buttons.eight.addEventListener('click', function(){
        outPutArea.innerHTML += '8';
    }),

    nine : buttons.nine.addEventListener('click', function(){
        outPutArea.innerHTML += '9';
    }),

    zero : buttons.zero.addEventListener('click', function(){
        outPutArea.innerHTML += '0';
    }),

    decimal : buttons.decimal.addEventListener('click', function(){
        outPutArea.innerHTML += '.';
    }),
}
