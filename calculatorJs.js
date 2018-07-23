
var interface = document.getElementById("interface");
var output = document.getElementById('output');
var entries = [];   
var temp = '';
output.innerHTML = 0;


var funcs = { 

    posNeg: function(){
        temp = parseInt()* -1;
        console.log(temp);
    },

    percentage: function(){
        
    },

    clear: function(){
        temp = '';
        entries = [];
        output.innerHTML = 0;
        },

    equals: function(){
        entries.push(temp);
        temp = '';
        numbers = entries.join('');
        output.innerHTML = eval(numbers);
        
    },

};


interface.addEventListener("click", function(e){      
        
    var clickedItem = e.target.innerHTML;
        
        if (!isNaN(clickedItem) || clickedItem === '.' ){
           temp += clickedItem;
            output.innerHTML = temp.substring(0,10);
        }else if (clickedItem === 'C'){    
            funcs.clear();
        }else if(clickedItem === 'X'){
            entries.push(temp);
            entries.push('*');
            temp = '';
            console.log(entries);
        }else if(clickedItem === '/'){
            entries.push(temp);
            entries.push('/');
            temp = '';
            console.log(entries);
        }else if(clickedItem === '-'){
            entries.push(temp);
            entries.push('-');
            temp = '';
            console.log(entries);
        }else if(clickedItem === '+'){
                entries.push(temp);
                entries.push('+');
                temp = '';
                console.log(entries);
        }else if(clickedItem = '='){
            funcs.equals();
        }else if(clickedItem = '+/-'){
            funcs.posNeg();
        }
    e.stopPropagation();
});


