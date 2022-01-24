
class Person {
    constructor(name1, age){
        this.name1 = name1;
        this.age = age;
    }

    Describe (){
        return (
            this.name1 + ", " + this.age +" years old");
        
    }

}

let persona = new Person("name", "age");

document.getElementById("submmit").addEventListener("click", function (){
    let name1 = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let persona = new Person (name1, age);
    document.getElementById("persona").innerHTML= persona.Describe();

});

