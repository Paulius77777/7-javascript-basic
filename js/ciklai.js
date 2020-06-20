const pazymiai = [10, 5, 2, 8, 7]

console.log(pazymiai);

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);
console.log(pazymiai[3]);
console.log(pazymiai[4]);

for (let m=0; m<12; m++ ){
   for ( let d=0; d<60; d++ ){
       console.log( m + ':' + d);
    }
}  

console.log('--------');

let nuo = 0;
let iki = 100;
let suma = 0;
for (let i=nuo; i<=iki; i++ ) {
    suma = suma + i;
}
console.log(nuo, iki , suma);

console.log('----------');

const from = -12;
const till = 11;
const divider = 3;
let count = 0;

for (let i=from; i<=till; i++ ) {
    console.log(i+ ' -->'+ (i % divider ));
    if ( i % divider === 0 ) {
        count++;
    }
    
}

console.log('count: ' + count );

nuo = 0
iki= 10
suma = 0

for (let i=nuo; i<=iki; i++) {
    suma = suma + i   
}
console.log(suma);


    

