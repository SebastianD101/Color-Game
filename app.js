var score = -1;

var randomArr = [];
var highScore = 0;

function tile1() {
    myFunction(1);
}

function tile2() {
    myFunction(2);
}

function tile3() {
    myFunction(3);
}

function tile4() {
    myFunction(4);
}

function tile5() {
    myFunction(5);
}
function tile6() {
    myFunction(6);
}

function tile7() {
    myFunction(7);
}

function tile8() {
    myFunction(8);
}

function tile9() {
    myFunction(9);
}

function tile10() {
    myFunction(10);
}

function tile11() {
    myFunction(11);
}

function tile12() {
    myFunction(12);
}

function tile13() {
    myFunction(13);
}

function tile14() {
    myFunction(14);
}

function tile15() {
    myFunction(15);
}

function tile16() {
    myFunction(16);
}

function tile17() {
    myFunction(17);
}

function tile18() {
    myFunction(18);
}

function tile19() {
    myFunction(19);
}

function tile20() {
    myFunction(20);
}

function tile21() {
    myFunction(21);
}

function tile22() {
    myFunction(22);
}

function tile23() {
    myFunction(23);
}

function tile24() {
    myFunction(24);
}

function tile25() {
    myFunction(25);
}

function myFunction(tileNum) {
    const random = Math.floor(Math.random() * 25 + 1);
    randomArr.push(random);
    const r = Math.floor(Math.random() * 254 + 1);
    const g = Math.floor(Math.random() * 254 + 1);
    const b = Math.floor(Math.random() * 254 + 1);
    var r2 = r;
    var g2 = g;
    var b2 = b;

    if (score < 3) {
        level = 1;
        difference = 17;
    } else if (score < 6) {
        level = 2;
        difference = 14;
    } else if (score < 9) {
        level = 3;
        difference = 10;
    } else if (score < 12) {
        level = 4;
        difference = 7;
    } else {
        level = 5;
        difference = 4;
    }

    if (r > 200) {
        r2 = r - difference;
    } else {
        r2 = r + difference;
    } 

    if (g > 200) {
        g2 = g - difference;
    } else {
        g2 = g + difference;
    }

    if (b > 200) {
        b2 = b - difference;
    } else {
        b2 = b + difference;
    }

    if (tileNum == randomArr[randomArr.length - 2]) {
        score = score + 1;
    } else {
        level = 0;
        score = 0;
    }

    if (score > highScore) {
        highScore = score;
    }

    if (level == 2) {
        // make id2 invisible
        document.getElementById("id2").style.visibility = "hidden";
    }
    
    document.getElementById('id1').style.color = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('1').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('2').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('3').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('4').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('5').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('6').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('7').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('8').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('9').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('10').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('11').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('12').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('13').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('14').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('15').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('16').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('17').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('18').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('19').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('20').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('21').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('22').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('23').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('24').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById('25').style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
    document.getElementById(random).style.backgroundColor = "rgb(" + r2 + ", " + g2 + "," + b2 + ")";
    document.getElementById('demo').innerHTML = score;
    document.getElementById('level').innerHTML = level;
    document.getElementById('highScore').innerHTML = highScore;
}