const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    iscleaned: true
};

//1.  for(let i=0; i<10; i++){}
//2.  for(const num of numbers){} //array or array like objest use kori
//3.  for (const prop in  student){} //object

for (const prop in bottle) {
    //console.log(prop);
    //console.log(prop, bottle[prop]);
}

/* console.log(Object.keys(bottle)); // array return */

// Advanced
const entries = Object.entries(bottle);
//console.log(entries);
//const [key, value] = ['color', 'yellow']
for (const [key, valus] of Object.entries(bottle)) {
    console.log(key, valus);
}
