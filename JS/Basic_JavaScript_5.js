document.write(typeof 4)
document.write("<br>")
function n() {
    document.getElementById("test").innerHTML = 0 / 0
}

function v() {
    document.getElementById("a").innerHTML = isNaN('string')
}

function b() {
    document.getElementById("n").innerHTML = isNaN(34)
}

function w() {
    document.getElementById("t").innerHTML = 3E311
}

function e() {
    document.getElementById("r").innerHTML = -3E1151
}

document.write(3 > 5)
document.write("<br>")

document.write(10 > 5)
document.write("<br>")

console.log(2 + 2)
document.write("<br>")

document.write(10 + "3")
document.write("<br>")

console.log(3 > 5)
document.write("<br>")

document.write(10 == 10)
document.write("<br>")

document.write(10 == 15)
document.write("<br>")

var a = 10

var b = 10

var c = "10"

var d = 1

var e = "1"

document.write(a === b)
document.write("<br>")

document.write(a === e)
document.write("<br>")

document.write(a === c)
document.write("<br>")

document.write(a === d)
document.write("<br>")

document.write("5 > 4 && 10 > 5 = ")
document.write(5 > 4 && 10 > 5)
document.write("<br>")

document.write('5 > 6 && 10 > 5 = ')
document.write(5 > 6 && 10 > 5)
document.write("<br>")

document.write('5 > 4 || 10 < 1 = ')
document.write(5 > 4 || 10 < 1)
document.write("<br>")

document.write('3 > 4 || 10 < 1 = ')
document.write(3 > 4 || 10 < 1)
document.write("<br>")

function not_function() {
    document.getElementById("not").innerHTML = !(20 < 10)
}

function nott_function() {
    document.getElementById("nott").innerHTML = !(5 < 10)
}