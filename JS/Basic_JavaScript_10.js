function call_loop(){
    var a = "";
    var b = 1;
    while (b < 11) {
        a += "<br>" + b;
        b++;
    }
    document.getElementById("loop").innerHTML = a;
}

function strlen(){
    var x = document.getElementById("loop").innerHTML
    var a = x.length;
    document.getElementById("result").innerHTML = a;
}

var list = ["eggs", "milk", "bread", "cheese", "juice"];
var element = "";
var y;

function make_list() {
    for (y = 0; y < list.length; y++) {
        if (y === 2) {break}
        element += list[y] + "<br>"
    }
    document.getElementById("list").innerHTML = element;
}

function array_function(){
    var a = ["eggs", "milk", "bread", "cheese", "juice"];
    document.getElementById("array").innerHTML = a[2];
}

function constatnt_function(){
    const car = {make:"chevrolet", model:"camaro", year:"2019"}
    car.color = "blue"
    car.year = "2020"
    document.getElementById('constant').innerHTML = "i want to get a " + car.year + " " + car.model + " in the color " + car.color;
}

function let_func(){
    var x = 13;
    document.getElementById("letkey1").innerHTML = "<br>" + x;
        {let x = 20;
        document.getElementById("letkey2").innerHTML = "<br>" + x;}
    var x = 14;
    document.getElementById("letkey3").innerHTML = "<br>" + x;
}

function find_sum(a, b){
    sum = a + b;
    return sum
}

function display_sum(){
    document.getElementById("findsum").innerHTML = sum;
}



let student = {
    Fistname: "john ",
    Lastname: "smtih ",
    Major: "Math ",
    Summery : function() {
        return this.Fistname + this.Lastname + "is studying " + this.Major;
    }
};
function display_student(){
    document.getElementById("student").innerHTML = student.Summery();
}