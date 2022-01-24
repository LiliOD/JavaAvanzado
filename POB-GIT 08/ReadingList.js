class book {
    constructor (title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }

    libro (){
        return "<br>Title: " + this.title + "<br>Author: " + this.author + "<br>Genre: " + this.genre + "<br>Read: " + this.read +"<br>Date: " + this.Date;
    }
    setRead(valor){
        this.read = valor;
    }
    setReadDate(){
        this.readDate = new Date();
    }
}

let book1 = new book ("The Fault in Our Stars", "Teen Literature", "Jhon Green", true, " ");

let book2 = new book ("The Perks of Being a Wallflower", "Teen Literature", "Stephen Chbosky", false, new Date())

document.getElementById ("Book1").innerHTML=book1.libro();
document.getElementById("Book2").innerHTML=book2.libro();