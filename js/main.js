let skaicius1 = 1
let skaicius2 = 5
let skaicius3 = 8

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);

let raide1 = "a"
let raide2 = "b"
let raide3 = "c"

console.log(raide1);
console.log(raide2);
console.log(raide3);

let keliSkaiciai = [1, 2, 3, 4, 5]
console.log(keliSkaiciai);
let keliSkaiciai2 = [5, 11, 3, 4, 5]
console.log(keliSkaiciai2);
let keliSkaiciai3 = [10, 2, 9, 4, 5]
console.log(keliSkaiciai3);

let raides1 = ['a', 'b', 'c', 'd', 'e']
console.log(raides1);

let suma = skaicius1 + skaicius2 + skaicius3 
console.log(suma);

tekstoRaides = raide1 + ' ' + raide2 + ' ' + raide3
console.log(tekstoRaides);

apskaiciuotiVerte = keliSkaiciai[0] - keliSkaiciai[1] + keliSkaiciai[2] - keliSkaiciai[3] + keliSkaiciai[4]
console.log(apskaiciuotiVerte);

const metai = 100
const riba  = 18

if ( metai < riba ) {
    console.log('Pomidoras');
    
}
else {
    console.log('Bandykite dar karta');
    
}

let nuo = 0;
let iki = 4;
let value = 0;

for ( let i=nuo; i<=iki; i++ ) {
    value = value + i
    }
console.log(value);

const tekstas = 'abcdef'
let atvirksiai = ''

for ( let i=tekstas.length-1; i>=0; i-- ) {
     atvirksiai = atvirksiai + tekstas[i]
 }

 console.log(atvirksiai);

 const nuonuo = -11 
 const ikiiki = 0 
 const dalyba = 3
 let count = 0

 for ( let i=nuonuo; i<=ikiiki; i++ ) {
    console.log(i+ "--->" +( i % dalyba )) 
    if ( i % dalyba === 0 ) {
      count++;  
    }
}
console.log(count);

function daugyba(num1, num2) {
    if ( typeof(num1) ) {
       return console.error('klaida...');        
    }
    if ( typeof(num2) ) {
       return console.log('Klaida...');
        
    }
    return num1 * num2 
}


console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

console.log( daugyba('dsdsdss', 8415) );







    
