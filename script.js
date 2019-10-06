var firstFraction = 3/4;
var secondFraction = 5/7;

var theBiggest = (function (a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secondFraction);

console.log(theBiggest);