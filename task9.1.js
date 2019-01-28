let cocktail = {
    name: 'Azure',
    ingredients: [{
        name: 'Vodka',
        price: 4
    },
        {
            name: 'Martini_Bianco',
            price: 6
        },
        {
            name: 'Galliano',
            price: 9
        }],
    isAlcohol:  true,
    type: 'alcohol',
};
let cocktail2 = {
    name: 'CocoNuts',
    ingredients: [{
        name: 'Coconut_Milk',
        price: 5
    },
        {
            name: 'Coconut_Syrup',
            price: 4
        },
        {
            name: 'Cherry_Syrup',
            price: 7
        }],
    isAlcohol: false,
    type: 'alcohol',
};
// cocktail.__proto__.getPrice = function(){
//
// }
// ;
// cocktail.__proto__.isAlcohol = function () {
//    
// }
let result = cocktail.ingredients.reduce(function(str,current){
    return str + `${current.name}: ${current.price}`
} , ' ' );
let result1 = cocktail.ingredients.reduce(function(sum,current){
    return sum + current.price
} , 0 );
console.log(result);
console.log(result1);
