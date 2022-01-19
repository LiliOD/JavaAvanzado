//Exercise #1
//You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]
//Part 1
//Write a function to insert a name to the end of the list. Add your own name to the end of the list.
/*
var names = ["María","Antony","Joy","Juan"];

console.log(names);
/*
function add(){
    names.push("Liliana");
    console.log(names);
}
add();

//Part 2
//Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.
var name1 = prompt("Insert one name");

if (name1==names[0]||name1==names[1]||name1==names[2]||name1==names[3]||name1==names[4]){
    console.log(true);
}else{
    console.log(false);
}

//Part 3
//Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.

var names = ["María","Antony","Joy","Juan"];

var fillNames = [
        prompt("Prompt the first name"),prompt("Prompt the second name"),prompt("Prompt the third name"),prompt("Prompt the fourth name")];

        function isArrayName(arr1,arr2){
            let filter = [];
            arr1.forEach((element) => {
                arr2.forEach((element2) =>{
                    if(element==element2){
                        filter.push(element);
                    }
                });
            });
            return filter;
        }
        
        console.log(isArrayName(names,fillNames));


//Part 4
//Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function

var intNames =[
    prompt("Prompt the first name"),
    prompt("Prompt the second name"),
    prompt("Prompt the third name"),
    prompt("Prompt the fourth name"),
];

function integerNames(intNames){
    let newWrray = [];
    intNames.forEach((element)=>{
        newWrray.push(element.length);
    })
    return newWrray;
}
console.log(integerNames(intNames));

*/

//Exercise #2

console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//Exercise #3
var logNumber = prompt("Log a number");

if (logNumber>=0 && logNumber<=25){
    console.log(logNumber + " is between 0 and 25.")
}else if(logNumber>=26 && logNumber<=100){
    console.log(logNumber + " is between 26 and 100");
}else if(logNumber>100){
    console.log(logNumber + " is grater than 100");
}else{
    console.log(logNumber + " is less than 0");
}

//Additional Exercises
var a; //undefined
var b = null; //null
var c = undefined;  //undefined
var d = 4; //4
var e = 'five'; //five
var f = a || b || c || d || e; //4 (d)

console.log(f);