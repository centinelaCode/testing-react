import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-functions';


describe('Pruebas en 05-functios', () => {

  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();    
    expect(testUser).toEqual(user);
  })


  test('getUsuarioActivo debe de retornar un objeto', () => {

    const nombre = 'Raul';    

    const userActivo = getUsuarioActivo(nombre);
    expect(userActivo).toEqual({
      uid: 'ABC5678',
      username: nombre
    });

  })

})