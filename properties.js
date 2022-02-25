const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    iscleaned: true
};

// getting all propertise names
const keys = Object.keys(bottle);
//console.log(keys);
//  getting all values  
const valus = Object.values(bottle);
//console.log(valus);

const pairs = Object.entries(bottle); // access pair
//console.log(pairs);
delete bottle.iscleaned;
console.log(bottle);