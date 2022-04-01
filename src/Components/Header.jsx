import React, {useState} from 'react'
import PropTypes from 'prop-types'

Header.defaultProps = {
    text: 'HIT'
}

function Header(props) {
    const [color, setColor] = useState('black');
    const [name, setName] = useState('HIT CLUB');

    const handleText = () => {
        setColor('red');
        setName('CLB HIT');
    }

  return (
    <>
        <h1>{props.text}</h1>
        <h2 style={{color}}>{name}</h2>
        <button onClick={handleText}>Click Change</button>

    </>
  )
}

Header.propTypes = {
    text: PropTypes.string,
    textNumber: PropTypes.number
}

export default Header