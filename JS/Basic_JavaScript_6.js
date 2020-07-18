function Ride_funciton() {
    var Height, Can_ride;
    Height = document.getElementById("height").value;
    Can_ride = (Height < 52) ? "you are to short " : "you are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function vote_funciton() {
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote = (age < 18) ? "you cant " : "you can ";
    document.getElementById("votem").innerHTML = Can_vote + "vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}


var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = "erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function student(Fname, Lname, age) {
    this.student_Fname = Fname;
    this.student_Lname = Lname;
    this.student_age = age;
}

var john = new student("john", "smith", 35)

function a12(){
    document.getElementById("New_and_This").innerHTML = "the new student is " + john.student_Fname + " " + john.student_Lname + "and he is " + john.student_age + "years old"
}

function nest_function(){
    document.getElementById("Nested_Function").innerHTML = pelement();
    function pelement(){
        var ace = 9;
        function plusone(){ace += 1}
        plusone();
        return ace;
    }
}