var openMLFav = parseFloat(-116);
var openMLDog = parseFloat(+103);

// Favorite
var impProbFav;
if (openMLFav < 0) {
    openMLFav = Math.abs(openMLFav);
    impProbFav = ((openMLFav / (openMLFav + 100)) * 100).toFixed(2);
} else {
    impProbFav = ((100 / (openMLFav + 100)) * 100).toFixed(2);
}

// Underdog
var impProbDog;
if (openMLDog < 0) {
    openMLDog = Math.abs(openMLDog);
    impProbDog = ((openMLDog / (openMLDog + 100)) * 100).toFixed(2);
} else {
    impProbDog = ((100 / (openMLDog + 100)) * 100).toFixed(2);
}

console.log('Favorite Imp Prob to win:', impProbFav + '%');
console.log('Underdog Imp Prob to win:', impProbDog + '%');

var totalImpProb = parseFloat(impProbFav) + parseFloat(impProbDog);
var vig = (totalImpProb - 100).toFixed(2);

var noVigImpProbFav = ((parseFloat(impProbFav) / totalImpProb) * 100).toFixed(2);
var noVigImpProbDog = ((parseFloat(impProbDog) / totalImpProb) * 100).toFixed(2);

console.log('Viggorish:', vig + '%');
console.log('No Vig Favorite Imp Prob:', noVigImpProbFav + '%');
console.log('No Vig Underdog Imp Prob:', noVigImpProbDog + '%');
