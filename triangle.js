let side1 = prompt("enter a firstside");
let side2 = prompt("enter the second side") ;
let side3 =prompt("enter the third side"); 

console.log("first side = " + side1) ;
console.log("second side  = " + side2) ;
console.log("third side = " + side3) ;

if(side1==side2){
    if (side1==side3){
        console.log("its a equilateral triangle")
    }
    else{
        console.log("its an isoceles")
    } 
 
   
} 

else{
if(side1 == side3){
    console.log("its an isoceles")
}

if (side2==side3){

    console.log("its an isoceles")
}

if(side1 != side2){
    if(side1 != side3){
        if(side2 != side3){
            console.log("its a scalene")
        }
    }
}
}