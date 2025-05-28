function oblicz() {
    var dlugosc = parseFloat(document.getElementById("dlugosc").value);
    var szerokosc = parseFloat(document.getElementById("szerokosc").value);
    var wynikElement = document.getElementById("wynik");
    var typ = 0;

    if (document.getElementById("laminowane").checked) {
        typ = 12;
    } else if (document.getElementById("winylowe").checked) {
        typ = 14;
    } else if (document.getElementById("deska").checked) {
        typ = 18;
    }

    if (!isNaN(dlugosc) && !isNaN(szerokosc) && typ !== 0) {
        var liczba = dlugosc * szerokosc;
        var koszt = liczba * typ;
        wynikElement.innerHTML = "Koszt: " + koszt + " zł";
    } else {
        wynikElement.innerHTML = "Wpisz poprawne dane";
    }
}
