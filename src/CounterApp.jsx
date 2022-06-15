import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {
  
  // state
  const [counter, setCounter] = useState( value );
  
  const handleAdd = () => {
    setCounter(counter + 1);
    // otra forma de actalizar el estado donde c es el valor actual del state
    // setCounter( (c) => c + 1 )
  }
  const handleReset = () => setCounter( value );
  const handleSubstract = () => setCounter( counter - 1 );

  return (
    <>
      <h1>Counter App</h1>
      <h2> { counter } </h2>

      <button onClick={ (e) => handleAdd(e) }> +1 </button>
      <button aria-label="btn-reset" onClick={ (e) => handleReset(e) }> Reset </button>
      <button onClick={ (e) => handleSubstract(e) }> -1 </button>            
    </>
  )
}


CounterApp.propTypes = { 
  value: PropTypes.number.isRequired,
}
