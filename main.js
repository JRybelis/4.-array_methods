//Filter method
const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter(score => score > 20);
 
const politicians = [
    {name: 'Winston Churchill', alive: false},
    {name: 'Neville Chamberlain', alive: false},
    {name: 'Tony Blair', alive: true},
    {name: 'David Cameron', alive: true}
];

const deceasedPoliticians = politicians.filter(politician => politician.alive == false)
console.log(deceasedPoliticians);


//Map method
const salePrices = scores.map(score => score / 2);
console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

const saleProducts = products.map(product => {
    if(product.price > 30) {
        return {name: product.name, price: product.price / 2}
    } else {
        return product;
    }
});
console.log(saleProducts);

//Reduce method

const result = scores.reduce((accumulator, current) => {
    if(current >= 50) {
        accumulator++;
    }
    return accumulator;
}, 0);

console.log(result);

//Find method:
const firstHighScore = scores.find((score) => {
    return score >= 50; 
});
console.log(firstHighScore);

//Sort method:
products.sort((a, b) => {
    if(a.name < b.name) {
        return - 1;
    } else if (b.name < a.name) {
        return 1;
    } else {
        return 0;
    }
});
console.log(products);

//Alternative shorter version of the sort method:
products.sort((a, b) => a.name - b.name);
console.log(products);




const filteredArray = products.filter(product => product.price > 20); // returns an array

const promotionals = filteredArray  .map(product => {
    return `The ${product.name} is ${product.price / 2} euros.`
}); // works on an array

//same as above, but with method chaining:
const promos = products
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is ${product.price / 2} euros.`);

console.log(promotionals);
console.log(promos);