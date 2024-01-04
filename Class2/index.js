function findIndexOf(str, target){
    console.log("Original string",str);
    console.log("index:",str.indexOf(target));

   // console.log("index:",str.lastindexOf(target));
}

findIndexOf("Hello World","Hello World");


//Imp 

const value="sujal maiti";
let ans=value.substr(2,5) ; //op- rkira
let ans2=value.slice(2,5);  //rki


//Splits with delimeter 
const value1="hi my name is Sujal";
const words=value1.split("") //op-> Tell what's the O/P, tell if its .split("h") or .split(",")

console.log(words)

//Post on Twitter tomorrow 
console.log(parseInt("42"));
console.log(parseInt("42paa"))
console.log(parseInt("3.14"));


//forEach

const initialArray=[1,2,3];

function logThing(str){
   consol.log(str); 
}
initialArray.forEach(logThing);