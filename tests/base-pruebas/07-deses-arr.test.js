import { retornaArray } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arrays', () => {

  test('debe de retornar un string y un numero', () => {

    const [letters, numbers] = retornaArray();
    
    // evaluar que sea un valor especifico
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
    
  })


})