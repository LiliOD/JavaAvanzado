//Business hours
/*
function businessHours (dayNumber, hourNumber){
    var dayNumber = prompt("Ingrese el día de la semana");
    var hourNumber = prompt("Ingrese la hora del día");

    if (dayNumber >=1 && dayNumber <=5){
        if (hourNumber >= 9 && hourNumber<= 18){
        alert("True: horario de trabajo");
    }
    
    else{
        alert("False: no es horario de trabajo");
    }
}
};
businessHours();

//Día del año

function getDayNumber(janFirstDay,yearDayNumber,modDay, endDay){
    var janFirstDay = prompt("Ingrese el día que comenzó enero");
    var yearDayNumber = prompt("Ingresa un día");
    var modDay = (yearDayNumber % 7);
    var endDay = (modDay+(janFirstDay-1))%7;

    if (endDay == 0){
        alert("Domingo");
    }
    else if (endDay == 1){
        alert("Lunes");
    }
    else if (endDay == 2){
        alert("Martes");
    }
    else if (endDay == 3){
        alert("Miércoles");
    }
    else if (endDay == 4){
        alert("Jueves");
    }
    else if (endDay == 5){
        alert("Viernes");
    }
    else if (endDay == 6){
        alert("Sábado");
    }

    console.log(endDay);
}
getDayNumber();
*/

function businessDay (yearDayNumber, hourNumber, modDay){
    var yearDayNumber = prompt("Ingrese el día del año actual.");
    var hourNumber = prompt ("Ingrese un horario en formato 24 horas.")
    var modDay = (((yearDayNumber%7)+(5))%7);
    
    if (modDay >=1 && modDay <=5){
        if(hourNumber>=9 && hourNumber<=18){
            alert("True: business hours");
        }

    }
    else{
        alert("False: not business hours");
    }
    console.log(modDay);
}

businessDay();
