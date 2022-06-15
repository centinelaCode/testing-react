import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promises";

describe('Pruebas en 09-promises', () => {

  test('getHeroeByIdAsync debe retornar un heroe', (done) => {

    const id = 1;
    getHeroeByIdAsync(id)
    .then( hero => {

      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      });

      done();
    })    
  })

  test('getHeroeByIdAsync debe obtener un error si hero no existe', (done) => {

    const id = 100;
    getHeroeByIdAsync(id)
    .then( hero => {
      expect(hero).toBeFalsy();
      done();
    })
    .catch( error => {

      // console.log(error)

      expect(error).toBe(`No se pudo encontrar el heroe ${id}`);
      
      done();
    })    
  })


})