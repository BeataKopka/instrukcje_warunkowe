// instrukcje warunkowe
var a,
	b,
	value;
	a = 2;
	b = 3;
	value = 7;
	a = prompt("podaj a");
	b = prompt("podaj b");
	value = ((a * a) + (2 * a * b) - (b * b));
	alert(value);

console.log('pierwsza zmienna a: ' + a + ' druga zmienna b: ' + b + ' wynosi: ' + value);

if (isNaN(a)) {
    alert("a nie jest liczbą!");
}

if (isNaN(b)) {
    alert("b nie jest liczbą!");
}

if (value === 0) {
    	alert("Wynik zero")
} 	else if (value > 0) {
    	alert("Wynik dodatni");
}	else if (value < 0) {
    	alert("Wynik ujemny");
}	else if (isNaN(a) || isNaN(b)) {
		alert("BŁĄD!!!")
}	
