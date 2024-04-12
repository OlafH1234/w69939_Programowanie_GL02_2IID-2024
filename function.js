<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Script</title>
</head>
<body>

<label for="age">Enter Age:</label>
<input type="text" id="age" name="age">
<button onclick="checkAge()">Check Age</button>
<br><br>

<label for="temp">Enter Temperature:</label>
<input type="text" id="temp" name="temp">
<button onclick="calculateTemperature()">Calculate Temperature</button>
<br><br>

<script>
    function checkAge() {
        let age = parseInt(document.getElementById("age").value);
        if (age > 17) {
            console.log("Tak");
        } else {
            console.log("Nie");
        }
    }

    function calculateTemperature() {
        let temp = parseInt(document.getElementById("temp").value);
        console.log((temp * 2) + 30);
    }

    const tab = [1, 2, 3, 70698, 5, 6];
    var suma = 0;
    console.log("suma wartosci.");
    for (var i = 0; i < tab.length; i++) {
        suma += tab[i];
    }
    console.log(suma);
    console.log("parzyste.");
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            console.log(tab[i]);
        }
    }
    console.log("wartosci razy 3.");
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i] * 3);
    }
    console.log("index numeru albumu.");
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] == 70698) {
            console.log(i);
            break;
        }
    }
    console.log("srednia");
    console.log(suma / tab.length);
    console.log("najwieksza liczba");
    var max = tab[0];
    for (var i = 1; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    console.log(max);

    var fib = [1, 1];
    for (var i = 0; i < 98; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }
    console.log(fib);
</script>

</body>
</html>
