

let outPutArea = document.getElementById('output');

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
   
};
