
var interface = document.getElementById('interface');
var output = document.getElementById('output');
var posNeg = document.getElementById('pos-neg');
var percentage = document.getElementById('percentage');
var entries = [];   
var temp = '';
output.innerHTML = 0;


var funcs = { 

    posNeg: function(){
       var parsed = parseInt(temp) * -1;
       temp = parsed; 
    },

    percentage: function(){
        if(entries.length === 0){
            tempNum = parseInt(temp);
            temp = tempNum/100;
        }else{
        num1 = entries.join('');
        num2 = parseInt(temp);
        temp =  parseInt(num1)/100*num2;
        }   
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
        }
    e.stopPropagation();
});

posNeg.addEventListener('click', function(){
    funcs.posNeg();
});

percentage.addEventListener('click', function(){
    funcs.percentage();
});
