function Dictonary_1() {
    var Camaro = {
    Make:"Chevrolet",
    Model:"Camaro",
    Year:"2019",
    Transmission:"Manual",
    Engine:"V8",
    Engine:"V6"
    };
    delete Camaro.Year
    document.getElementById("dictionary").innerHTML = Camaro.Year;
}3