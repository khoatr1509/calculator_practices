let runningtotal =0;
let buffer ="0";
let previousOperator=null;
const screen= document.querySelector(".screen");

document.querySelector('.calc-buttons').addEventListener('click', function(event){
    buttonClick(event.target.innerText); // read from the innerText not value
})

function buttonClick(value){
    if( isNaN(parseInt(value)) ){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerender()
}

function handleNumber(value){
    if(buffer==="0"){
        buffer = value;
    }else {
        buffer += value;
    }
}
function handleSymbol(value){
    switch(value){
        case 'C':
            buffer="0"
            runningtotal=0
            previousOperator=null
            break;
        
        case '=':
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            
            buffer=""+runningtotal;
            previousOperator=null
            runningtotal=0
            break;
        
        case "⇦":
            if(buffer.length===1) buffer="0";
            else buffer=buffer.slice(0,buffer.length-1);
            break;
        default: 
            handleMath(value);
            break;

    }
}
function handleMath(value){
    const intBuffer=parseInt(buffer);
    if(runningtotal===0){
        runningtotal=intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator=value;
    buffer="0";
}
function flushOperation(intBuffer){
    if(previousOperator==="+"){
        runningtotal+=intBuffer;
    }else if(previousOperator==="-"){
        runningtotal-=intBuffer;
    }else if(previousOperator==="x"){
        runningtotal *= intBuffer;
    }else runningtotal /= intBuffer;
    
}
function rerender(){
    screen.innerText=buffer;
}