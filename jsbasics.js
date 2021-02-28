//----------------------------------------------

console.log("Basic Program for Functions")
function helloWorld(){
    console.log("HELLO WORLD!!")
}
 var greetings = helloWorld();

 function variables(){
     var num1 = 100;
     var name = "xyz";
     var pass = true; 
     var undef ;
     

     console.log("num1 :",num1,typeof(num1),"\nname :",name,typeof(name),"\npass :",pass,typeof(pass),"\nundef :",undef)
}
var variableValue = variables()

function areaofCircle(radius){
    return Math.PI*Math.pow(radius,2)
}
console.log("Area of Circle with radius 5:",areaofCircle(5))

//--------------------------------------------------------

console.log("\n\nLoops")

var array = ["Ajinkya",1000,4,92]

console.log("\nElements of Array: ",array)

console.log("\nfor loop")
for(i=0;i<array.length;i++)
{
    console.log(array[i])
}

console.log("\nwhile loop")
var i=0
while(i<array.length)
{
    console.log(array[i])
    i++
}

console.log("\ndo-while loop")
var i = 0;
do{
    console.log(array[i]);
    i++;
}while(i<array.length);