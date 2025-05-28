function oblicz() {
    var dlugosc = parseFloat(document.getElementById("dlugosc").value);
    var szerokosc = parseFloat(document.getElementById("szerokosc").value);
    var wynikElement = document.getElementById("wynik");
    var typ = 0;

    // Получаем выбранный тип панели
    var typPanelu = document.querySelector('input[name="floor"]:checked');
    if (typPanelu) {
        switch (typPanelu.value) {
            case "laminowane":
                typ = 12;
                break;
            case "winylowe":
                typ = 14;
                break;
            case "deska":
                typ = 18;
                break;
        }
    }

    // Проверка и вычисление
    if (!isNaN(dlugosc) && !isNaN(szerokosc) && typ !== 0) {
        var powierzchnia = dlugosc * szerokosc;
        var koszt = powierzchnia * typ;
        wynikElement.innerHTML = "Koszt montażu: " + koszt.toFixed(2) + " zł";
    } else {
        wynikElement.innerHTML = "Wpisz poprawne dane i wybierz typ paneli.";
    }
}
