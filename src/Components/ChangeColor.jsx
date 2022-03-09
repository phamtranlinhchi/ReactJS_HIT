import React, { useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState('red');

    const handleColor = () => {
        setColor('blue');
    }
    return(
        <>
            <p style={{color}}>This paragraph will change its color when you click the button</p>
            <button onClick={handleColor}>Change</button>
        </>
    )
}

export default ChangeColor;