function clearScreen() {
    document.getElementById("display").value = "";
    setPoint = false;
    number1;
    number2;
}

let btnNumber = document.querySelectorAll('.btn-number')


let btnDiv = document.querySelector('#btn-div');
let btnMinus = document.querySelector('#btn-minus');
let btnPlus = document.querySelector('#btn-plus');
let btnPoint = document.querySelector('#btn-point');
let btnEquls = document.querySelector('#btn-equls');
let btnMul = document.querySelector('#btn-mul');
let btnSin = document.querySelector('#btn-sin');
let btnCos =document.querySelector('#btn-cos');
let btnTan = document.querySelector('#btn-tan');
let btnPow=document.querySelector('#btn-pow');

let setPoint = false;
let number1, number2, result;
let op = "";

btnNumber.forEach((item) => {
    item.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
});

btnPoint.addEventListener('click', (e) => {
    if (setPoint == false) {
        display.value += ".";
        setPoint = true;
    }
});

btnPlus.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "+";
});

btnMinus.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "-";
});

btnMul.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "*";
});

btnDiv.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "/";
});
btnSin.addEventListener('click',(e)=>{
   number1 = Number(display.value);
    display.value = "";
    op = "sin";
})
btnCos.addEventListener('click',(e)=>{
    number1 = Number(display.value);
     display.value = "";
     op = "cos";
 })
 btnTan.addEventListener('click',(e)=>{
    number1 = Number(display.value);
    display.value = "";
    op="tan";
 }) 
 btnPow.addEventListener('click',(e)=>{
    number1 = Number(display.value);
    display.value = "";
    op="pow";
 })


btnEquls.addEventListener('click', (e) => {
    number2 = Number(display.value);

    switch (op) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
         case "sin":
            result  = Math.sin(number1*Math.PI/180);
            break;
         case "cos":
                result = Math.cos(number1*Math.PI/180);
                break;
        case "tan":
                result = Math.tan(number1*Math.PI/180);
                break;
       case "pow":
            result = Math.pow(number1,number2);
           break;
    }
    display.value=result;

})


document.addEventListener("keydown",keyboardInputHandler);
function keyboardInputHandler(e){
    if (e.key==="0"){
        result.value+="0";
    }
    else if (e.key==="1"){
        result.value+="1";
    }
        else if (e.key==="2"){
        result.value+="2";
    }
     else if (e.key==="3"){
        result.value+="3";
    }

     else if (e.key==="4"){
        result.value+="4";
    }

  else if (e.key==="5"){
        result.value+="5";
    }

   else  if (e.key==="6"){
        result.value+="6";
    }


     else if (e.key==="7"){
        result.value+="7";
    }

   else if (e.key==="8"){
        result.value+="8";
    }
    else if (e.key==="9"){
        result.value+="9";
    }
    if (e.key==="+"){
    res. value+="+";

    }
    else if (e.key==="-"){
        res.value += "-";
    }
    else if (e.key==="*"){
        res.value += "*";

    }
    else if (e.key==="/"){
        res.value += "/";

    }
if (e.key==="."){

    res.value += "."
}

if (e.key==="Enter"){
   calculate(result.value);
   
}
if(e.key==="Backspace"){
    const resultInput = res.value ;
    res.value = resultInput.substring(0,res.value.length -1);
}

}


