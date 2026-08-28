function myFunction1() {
    var a = parseFloat(document.getElementById('text_1').value);
    var b = parseFloat(document.getElementById('text_2').value);
    var c = document.getElementById('select');
    var value = parseInt(c.options[c.selectedIndex].value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').value = "";
        document.getElementById('display').innerHTML = "Vui long nhap diem hop le";
        document.getElementById('display').style.color = "red";
        return;
    }

    var k = 0;

    if (value === 1 || value === 2) {
        k = (a + b) / 2;
    }

    document.getElementById('result').value = k.toFixed(2);

    if (k >= 9) {
        document.getElementById('display').innerHTML = "Hoc sinh gioi";
        document.getElementById('display').style.color = "red";
    } else if (k >= 7 && k < 9) {
        document.getElementById('display').innerHTML = "Hoc sinh kha";
        document.getElementById('display').style.color = "blue";
    } else if (k >= 5 && k < 7) {
        document.getElementById('display').innerHTML = "Hoc sinh Trung binh";
        document.getElementById('display').style.color = "yellow";
    } else {
        document.getElementById('display').innerHTML = "Hoc sinh yeu";
        document.getElementById('display').style.color = "black";
    }
}

function myFunction2() {
    document.getElementById('text_1').value = "";
    document.getElementById('text_2').value = "";
    document.getElementById('result').value = "";
    document.getElementById('display').innerHTML = "";
    document.getElementById('select').value = "1";
}