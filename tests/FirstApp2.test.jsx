import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

/*
  scree => si se soloca debajo del render seria todo el contenido del
           body con todos sus elementos.

  screen.debug() => permite hacer un debug e identificar quien es en 
                    ese momento scren

  getByRole => elementos html
*/


describe('Prueba en <FisrtApp />', () => {
  const title = 'Hola, Soy Goku';
  const subTitle = 'Soy un subtitulo';

  // ====================== Prueba 1
  test('debe de hacer match con el snapshot', () => {

    const { container } = render( <FirstApp title={ title } />)
    expect( container ).toMatchSnapshot();    
  });


  // ====================== Prueba 2
  test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {    
    render( <FirstApp title={ title } />);
    expect( screen.getByText(title) ).toBeTruthy();    
    // screen.debug();
  })


  // ====================== Prueba 3
  test('debe de mostrar el titulo en un h1', () => {    
    render( <FirstApp title={ title } />);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain( title );
  })


  // ====================== Prueba 4
  test('debe de mostrar el subtitulo', () => {    
    render( 
      <FirstApp  
        title={title}
        subTitle={subTitle}
      /> 
    );
    expect( screen.getAllByText(subTitle).length ).toBe(2);
  })



})