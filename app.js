var score = -1;
function myFunction() {
    const random = Math.floor(Math.random() * 25 + 1);
    const r = Math.floor(Math.random() * 254 + 1);
    const g = Math.floor(Math.random() * 254 + 1);
    const b = Math.floor(Math.random() * 254 + 1);
    const r2 = r + 20;
    score = score + 1;
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
    document.getElementById(random).style.backgroundColor = "rgb(" + r2 + ", " + g + "," + b + ")";
    document.getElementById('demo').innerHTML = score;
    
}