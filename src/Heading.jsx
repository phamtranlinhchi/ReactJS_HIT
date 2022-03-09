import React, { useState } from 'react'

function Heading() {
    const [ number, setNumber ] = useState(0);
    const handleNumber = () => {
        setNumber(number + 1);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={handleNumber}>Set Number</button>
        </>
    );
}

export default Heading;