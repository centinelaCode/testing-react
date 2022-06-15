import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-import-export';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-import-export', () => {

  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'});   
  })

  test('getHeroeById debe retornar undefined si no exist el ID', () => {
    const id = 100;
    const hero = getHeroeById(id);
    // console.log(typeof hero)

    expect(hero).toBe( undefined );   
  })

  test('getHeroesByOwner debe retornar heroes de DC', () => {
    const owner = 'DC';
    const herosDC = getHeroesByOwner(owner);
    // console.log(herosDC);

    expect(herosDC.length).toBe(3);
    expect(herosDC).toEqual([
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ]
    )
    const checkHeroesDC = heroes.filter((heroe) => heroe.owner === owner)
    expect(herosDC).toEqual( checkHeroesDC );
  })

  test('getHeroesByOwner debe retornar heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
    // console.log(heroesMarvel);

    expect(heroesMarvel.length).toEqual(2)
    const checkHeroesMarvel = heroes.filter((heroe) => heroe.owner === owner)
    expect(heroesMarvel).toEqual( checkHeroesMarvel );
  })


})