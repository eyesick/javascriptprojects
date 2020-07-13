window.alert('hi');
var first = "2", second = '3';

var first = first.fontcolor('red');
document.write(5 * 15);

var string1 = "this is the first line" // this declares the variable string1 and gives it the value of "this is the first line"
var string2 ="this is the second line" // this delares the variable string2 and gives it the value of "this is the second line"
var longstring = string1 + string2 // this declares the varable longstring and gives it the value of string1 + string 2 by concatenating them together

var longstring = longstring.fontcolor("red") // this takes the variable longstring and changes the font color to red
document.write(longstring)// this dispays long string to the browser






function My_First_Function() { // declares the creation of the function ands its name
    var str = "This text is green"; //creating a var and naming it str and assigning it the value of "this text is green"

    var result = str.fontcolor("green");// creating another varible called result that is equal to str with a green font color

    document.getElementById("Green_Text").innerHTML = result;// using the document.getelementbyid to identify which elements have the id green_text and then assiging the .innerhtml to the value of the result variable we created earlier
}
