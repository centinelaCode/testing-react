/*
  Si la prueba solo tiene un test la prueba va pasar, es algo que tenemos que tener en cuenta, se puede hacer con un throw new Error
*/

describe('Pruebas Demo', () => {

  test('Esta prueba no debe de fallar', () => {  
    // Pasos para las pruebas
    // inicializacion
    const message1 = 'Hola Mundo';
  
    // estimulo
    const message2 = message1.trim();
  
    // observar el comportamiento .... esperado
    expect( message1 ).toBe( message2 );    
  })

})
