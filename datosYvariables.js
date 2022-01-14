//Num() String() boolean()

var a = false;

console.log(a);
console.log(typeof(a));
console.log(typeof(toString(a)));
console.log(typeof(Number(a)));

var b = true;

console.log(b);
console.log(typeof(b));
console.log(typeof(toString(b)));
console.log(typeof(Number(b)));

var c = 0;

console.log(c);
console.log(typeof(c));
console.log(typeof(toString(c)));
console.log(typeof(Boolean(c)));

var d = 1;

console.log(d);
console.log(typeof(d));
console.log(typeof(toString(d)));
console.log(typeof(Boolean(d)));

var e = "0";

console.log(e);
console.log(typeof(Number(e)));
console.log(typeof(e));
console.log(typeof(Boolean(d)));

var f = "000";

console.log(f);
console.log(typeof(Number(f)));
console.log(typeof(f));
console.log(typeof(Boolean(f)));

var g = "1";

console.log(g);
console.log(typeof(Number(g)));
console.log(typeof(g));
console.log(typeof(Boolean(g)));

var h = NaN;

console.log(h);
console.log(typeof(Number(h)));
console.log(typeof(toString(h)));
console.log(typeof(Boolean(h)));

var i = Infinity;

console.log(i);
console.log(typeof(Number(i)));
console.log(typeof(toString(i)));
console.log(typeof(Boolean(i)));

var j = -Infinity;

console.log(j);
console.log(typeof(Number(j)));
console.log(typeof(toString(j)));
console.log(typeof(Boolean(j)));

var k = "";

console.log(k);
console.log(typeof(Number(k)));
console.log(typeof(toString(k)));
console.log(typeof(Boolean(k)));

var l = "20";

console.log(l);
console.log(typeof(Number(l)));
console.log(typeof(l));
console.log(typeof(Boolean(l)));

var m = "Twenty";

console.log(m);
console.log(typeof(Number(m)));
console.log(typeof(m));
console.log(typeof(Boolean(m)));

var n = null;

console.log(n);
console.log(typeof(Number(n)));
console.log(typeof(toString(n)));
console.log(typeof(Boolean(n)));

var o = undefined;

console.log(o);
console.log(typeof(Number(o)));
console.log(typeof(toString(o)));
console.log(typeof(Boolean(o)));

//Ejercicio 2 calculadora de edad

function edad(){
    var datoAño = prompt("Ingresa el año en el que naciste");
    var datoIngresado = prompt("Ingresa un año en el futuro:");
    var resultado = datoIngresado-datoAño;
    alert("Tu edad en ese año será: "+ resultado );
}
edad();
