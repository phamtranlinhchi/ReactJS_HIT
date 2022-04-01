import React, { useState, useContext } from 'react'
import { ThemeContext } from '../ThemeContext';

function IncreaseNum() {
    const context = useContext(ThemeContext);
    const [ number, setNumber ] = useState(0);
    const handleNumber = () => {
        setNumber(number + 1);
    }

    return(
        <div className={context.theme}>
            <h1>{number}</h1>
            <button onClick={handleNumber}>Set Number</button>
        </div>
    );
}

export default IncreaseNum;