

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
};


var funcs = {

    posNeg: function(){
        outPutArea.innerHTML = parseInt(outPutArea.innerHTML)* -1;
    },

    percentage: function(){

    },

    clear: function(){
            outPutArea.innerHTML = '0';
            console.log("clear button clicked");
        },

    equals: function(){
        outPutArea.innerHTML = eval(outPutArea.innerHTML);
        console.log("equals button clicked");
    }

};

var handlers = {

    equals : buttons.equals.addEventListener('click', function(){
        funcs.equals()
    }),

    posNeg : buttons.posNeg.addEventListener('click', function(){
        funcs.posNeg()
    }),

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

    times : buttons.times.addEventListener('click', function(){
        outPutArea.innerHTML += '*';
    }),

    plus : buttons.plus.addEventListener('click', function(){
        outPutArea.innerHTML += '+';
    }),

    minus : buttons.minus.addEventListener('click', function(){
        outPutArea.innerHTML += '-';
    }),

    divide : buttons.divide.addEventListener('click', function(){
        outPutArea.innerHTML += '/';
    }),

};
