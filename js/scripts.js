// instrukcje warunkowe
var a,
	b,
	value;
	a = 2;
	b = 3;
	value = 7;

var a = prompt("podaj a");
var b = prompt("podaj b");
var value = alert((a * a) + (2 * a * b) - (b * b));
console.log('pierwsza zmienna a: ' + a + ' druga zmienna b: ' + b + ' wynosi: ' + value);

if (isNaN(a)) {
    alert("a nie jest liczbą!");
}

if (isNaN(b)) {
    alert("b nie jest liczbą!");
}

if ((a * a) + (2 * a * b) - (b * b) == 0) {
    	alert("Wynik zero")
} 	else if ((a * a) + (2 * a * b) - (b * b) > 0) {
    	alert("Wynik dodatni");
}	else if ((a * a) + (2 * a * b) - (b * b) < 0) {
    	alert("Wynik ujemny");
}	else if (isNaN(a)) {
		alert("BŁĄD!!!")
}	else if (isNaN(b)) {
		alert("BŁĄD!!!")
}
