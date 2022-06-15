

const myuseContext= ({ clave, nombre, edad, rango = 'Capitan' }) => {    
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 34.987465,
            lng: 11.234323
        }
    }
}

