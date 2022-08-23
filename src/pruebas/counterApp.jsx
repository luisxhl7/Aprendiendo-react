import { useState } from 'react';
import PropTypes from 'prop-types';
//funciones que no dependen de las propiedades

export const CounterApp = ({value}) => {
    
    const [ counter, setCounter ] = useState( value );
    
    const sumar = ()=> {
        setCounter(counter + 1);
    }
    const restar = () => {
        setCounter(counter - 1);
    }
    const limpiar = () => {
        setCounter( value );
    }
    /*-----------------------------------------VISTA-----------------------------------------*/
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={sumar} name="hola">+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={limpiar}>limpiar</button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: 10
}