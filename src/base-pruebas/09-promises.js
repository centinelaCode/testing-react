
// Promise en javascript

import { getHeroeById } from './08-import-export';

export const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const p1 = getHeroeById( id ) ;

            if( p1 ) {
                resolve( p1 );
            } else {
                reject('No se pudo encontrar el heroe ' + id)
            }
            // heroe ? resolve( heroe ) : reject( 'Heroe no existe' );
        }, 1000);    
    });

    // return promesa;
}
