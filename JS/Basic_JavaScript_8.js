function slice_method(){
    var a = "this is the slice method";
    var b = a.slice(3, 13);
    document.getElementById("slice").innerHTML = b;
}

function uppercase(){
    var a = document.getElementById("up").innerHTML;
    document.getElementById("up").innerHTML = a.toUpperCase();
}

function locate(){
    var a = document.getElementById("search").innerHTML;
    var b = a.search("waldo");
    document.getElementById("waldo").innerHTML = b;
}

function makestring(){
    var a = document.getElementById("length").innerHTML;
    var b = a.length;
    document.getElementById("aw").innerHTML = b.toString();
}

function specify(){
    var x = 130.52656868;
    document.getElementById("specific").innerHTML = x.toPrecision(6)
}

function fix(){
    var a = 5.5623;
    var b = a.toFixed(3)
    document.getElementById("fixed").innerHTML = b;
}

function string(){
    var a = "hello world";
    var b = a.valueOf();
    document.getElementById("string_sample").innerHTML = b;
}

function countdown(){
    var seconds = document.getElementById("seconds").value

    function tick(){
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000)
    if (seconds == -1 ){
        alert("times up")
    }
        }
    tick();
}