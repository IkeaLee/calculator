var text='';
var answer='';
var step=0;
var stepAssist=0;
function show(value) {
    if(value=='C'){
        text= '';
        answer='';
        step=0;
        document.getElementById("text").innerHTML = text;
        document.getElementById("answer").innerHTML = answer;  
    }
    else if(value=='='){
        document.getElementById("text").innerHTML = text+'='; 
        answer= eval(text);
        document.getElementById("answer").innerHTML = answer; 
        step++;
        stepAssist=step;
    }
    else if((value=='+'||value=='-'||value=='*'||value=='/')&&(step!=0)&&(step==stepAssist)){
        text=answer;
        text+=value;
        document.getElementById("text").innerHTML = text; 
        stepAssist++;
    }
    else{
        text+=value;
        document.getElementById("text").innerHTML = text; 
    }
       
}    
