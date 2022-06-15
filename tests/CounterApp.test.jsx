import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Prueba en <CounterApp />', () => {
  const initValue = 10;
  

  // ====================== Prueba 1
  test('debe de hacer match con el snapshot', () => {

    const { container } = render( <CounterApp value={ initValue } />)
    expect( container ).toMatchSnapshot();    
  });


  // ====================== Prueba 2
  test('debe de mostrar el valor de 100 <CounterApp value={ 100 } />', () => {    
    render( <CounterApp value={ 100 } />);
    expect( screen.getByText(100) ).toBeTruthy();    
    // screen.debug();
  })


  // ====================== Prueba 3
  test('debe de incrementar con el boton +1', () => {    
    
    render( <CounterApp value={ initValue } />);
    fireEvent.click( screen.getByText('+1') )
    expect(screen.getByText('11')).toBeTruthy();

  })


  // ====================== Prueba 4
  test('debe de decrementar con el boton de -1', () => {    
    render( <CounterApp value={ initValue } />);
    fireEvent.click( screen.getByText('-1') )
    // screen.debug();
    expect(screen.getByText('9')).toBeTruthy();
  })


   // ====================== Prueba 5
   test('debe de funcionar el boton de reset', () => {    
     render( <CounterApp value={ 355 } />);
     fireEvent.click( screen.getByText('+1') )
     fireEvent.click( screen.getByText('+1') )
     fireEvent.click( screen.getByText('+1') )
    //  screen.debug();
    fireEvent.click( screen.getByText('Reset') )   
    // fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
    
    expect(screen.getByText(355)).toBeTruthy();
  })



})