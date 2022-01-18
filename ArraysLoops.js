
//Exercise #1
//Part 1
//There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var arr1= ["Sofia", "David", "Juan"];
console.log(arr1);

//Part 2
//Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?
function newArr(){
    arr1.push("Sara","Agustin");
    arr1.shift();
    console.log(arr1);
}
newArr();
//Part 3
//It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?*/
function changeName(){
    arr1[0]="Renata";
    console.log(arr1);
}
changeName();

//Write a JavaScript program to construct the following pattern, using a nested for loop

function pyramid(){
    var output ="";
    for (var i = 1; i<=4; i++){
        output += "*"
        console.log(output);
    }
}
pyramid();

//– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
//as long as xValue remains positive.

var xValue = 10;

const n = 0.5;
while (xValue>0){
    xValue=xValue-n;
    console.log(xValue);
}

//- Print all the odd numbers between 1 - 100.
var odd = 1;

while (odd <= 100){
    odd=odd+2;
    console.log(odd + "");
    
}

//- Write a method with a while loop to print 1 through n in square brackets. 
//For example, if n = 6 print [1] [2] [3] [4] [5] [6]

var num = 5;
var i = 0;
while (i <= num){
    i++;
    console.log("[" + i + "]");
}

//- Write a method with a while loop that computes the sum of first n positive integers: 
//sum = 1 + 2 + 3 + … + n

function suma(){
    var num = 15;
    var sum = 0;
    while (num > 0){
        sum = sum + num;
        num -=1
    }
    console.log(sum);
}
suma ();

