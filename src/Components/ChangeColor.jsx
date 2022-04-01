import { useState } from "react";


function ChangeColor() {
    const [color, setColor] = useState('');

    const handleColor = () => {
        setColor('red');
    }
    return(
        <>
            <p style={{color}}>This paragraph will change to red when you click the button</p>
            <button onClick={handleColor}>Change</button>
        </>
    )
}

export default ChangeColor;