"use strict";

function skaitmenuKiekisSkaiciuje ( num ) {
    let count = 0;
    // validuojame input
    if ( typeof(num) !== 'number') {
        return console.error('ERROR: skaicius netinkamo tipo')
    }
    //if ( num === Infinity ) {
      //  return console.log(" skaicius netinkamas");
        
    //}
    if (!isFinite(num)) {
        return console.log(" skaicius netinkamas");
    }
    const skaiciustekstu = ''+num
    count = skaiciustekstu.length

    return console.log(count, '---', correct);
}

console.log( skaitmenuKiekisSkaiciuje( 5 ));
console.log( skaitmenuKiekisSkaiciuje( 781 ));
console.log( skaitmenuKiekisSkaiciuje( 142121241421 ));
console.log( skaitmenuKiekisSkaiciuje( true ));
console.log( skaitmenuKiekisSkaiciuje( 'asd' ));
console.log( skaitmenuKiekisSkaiciuje( NaN ));
console.log( skaitmenuKiekisSkaiciuje( Infinity ));
console.log( skaitmenuKiekisSkaiciuje( 14287142848972187124 ));