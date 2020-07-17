function findsum(a,b){
    var sum = a + b;
    document.getElementById('math').innerHTML = sum;
}

function finddif(a,b){
    var dif = a - b;
    document.getElementById('minus').innerHTML = '5 - 4 =' + dif;
}

function findmresult() {
    var  m = 2 * 5;
    document.getElementById('m').innerHTML = '2 * 5 =' + m;
}

function finddresult() {
    var  d = 10 / 2;
    document.getElementById('d').innerHTML = '10 - 2 =' + d;
}

function long() {
    var l = (2 + 5) * 10 / 2 - 5;
    document.getElementById('longop').innerHTML = 'two plus five times ten divided by 2 minus 5 is equal to ' + l;
}

function modulus() {
    var mod = 5 % 2;
    document.getElementById('mo').innerHTML = "5 divided by 2 leaves a reamainder of " + mod;
}

function op() {
    var x = 10
    document.getElementById('ur').innerHTML = -x;
}

function inc(){
    var x = 3 
    x++
    document.getElementById('crement').innerHTML = x;
}

function dec() {
    var x = 3
    x--
    document.getElementById('rement').innerHTML = x;
}

window.alert(Math.random() * 5)

var a = Math.pow(2,4)

document.write(a)