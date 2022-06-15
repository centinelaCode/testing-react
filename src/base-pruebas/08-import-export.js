
import heroes from '../data/heroes';

// Función para obtner un heroe por ID
export const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id);
}


// Funcion para obtener a todos los heroes con un owner
export const getHeroesByOwner = (owner)=> {
    return heroes.filter((heroe) => heroe.owner === owner)
}
