import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Prueba en <FisrtApp />', () => {

  // test('debe de hacer match con el snapshot', () => {

  //   const title = 'Hola, Soy Goku'
  //   const {container} = render( <FirstApp  title={title} /> )
  //   // console.log(container)


  //   // asersion
  //   expect( container ).toMatchSnapshot();
  // })



  test('debe de mostrar el title en un h1', () => {

    const title = 'Hola, Soy Goku';
    const { container,getByText, getByTestId } = render( <FirstApp  title={title} /> )
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // // console.log(h1.innerHTML)
    // // expect(h1.innerHTML).toBe( title );
    // expect(h1.innerHTML).toContain( title );

    /*
      .toBe       => verifica que sean identicos
      .toContain  => verifica que contenga el texto sin importar espacios.
    */

    // expect( getByTestId('test-title').innerHTML).toBe(title);
    expect( getByTestId('test-title').innerHTML).toContain(title);
  })

  test('debe de mostrar el subtituolo por props', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';
    const { getByText, getAllByText } = render( 
      <FirstApp  
        title={title}
        subTitle={subTitle}
      /> 
    );

    // expect( getByText(subTitle) ).toBeTruthy();
    expect( getAllByText(subTitle).length ).toBe(2);
  
  });


})