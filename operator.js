let operation = prompt("input operator");
let num1 = Number(prompt("first number"));
let num2 = Number(prompt("second number"));

if(operation=="add"){
    console.log(num1 + num2)
} 

else if(operation == "substract"){
    console.log(num1-num2) ;
}

else if(operation=="multiply" ){
    console.log(num1*num2) ;
}

else if(operation == "divide" ){
    console.log(num1/num2)
}

else if (operation == "modulus"){
    console.log(num1%num2)
} 
 else {
    console.log("invalid operation")
 }