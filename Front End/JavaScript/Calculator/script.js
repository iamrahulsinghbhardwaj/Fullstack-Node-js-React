
var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");

var operator=null;
var operant1=0;
var operant2=null;
function isOperator(value){
    return value=='-' || value=='+' || value=='/' || value=='*';
}

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        var text=display.textContent.trim();

        if(isOperator(value)){
            operator=value;
            operant1=parseFloat(text);
            display.textContent="";
        }
        else if(value=="ac"){
            display.textContent="";
        }
        else if(value=="sign"){
            operant1=parseFloat(text);
            operant1=-1*operant1;
            display.textContent=operant1;
        }
        else if(value=='.'){
            if(text.length && !text.includes('.')){
                display.textContent=text+'.';
            }
        }
        else if(value=='%'){
            operant1=parseFloat(text);
            operant1=operant1/100;
            display.textContent=operant1;
        }
        else if(value=='='){
            operant2=parseFloat(text);
            var result=eval(operant1+' '+operator+' '+operant2);
           
            if(result){
                display.textContent=result;
                operant1=result;
                operant2=null;
                operator=null;
            }else{
                display.textContent=0;
            }
        }else{
            display.textContent+=value;
        }
    });
}




