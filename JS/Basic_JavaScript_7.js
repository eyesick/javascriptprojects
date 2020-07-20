x = 10;

function myFunction() {
    var sum = x + 1
    document.getElementById("sum").innerHTML = sum
}

function myFunction1() {
    var y = 8
    var sum = y + 1
    document.getElementById("sum1").innerHTML = sum
}

function myFunction2() {
    var sum = y + 1
    console.log(y)
}

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "teregst";
    }
}

function show_date() {
    if (new Date().getDate() == 19) {
        document.getElementById("date").innerHTML = "it is the 19th";
    }
    else {
        document.getElementById('date').innerHTML = "it is not the 19th";
    }
}

function fcolor(){
    var a = document.getElementById("color").value;
    if (a == "red") {
        var g = "your favortie color is red" ;
    }
    else {
        var g = "your favorite color is not red because it is " + a;
    }
    document.getElementById("return_color").innerHTML = g;
}

function Time_function(){
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "it is morning time";
    }
    else if (Time > 12 == Time < 18){
        reply = "it is afternoon time";
    }
    else{
        reply = "it is evening time";
    }
    document.getElementById("Time_of_day").innerHTML= reply
}