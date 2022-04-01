import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function FormLogin() {
    const navigate = useNavigate();
    const { params } = useParams();
    console.log(params);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username);
    console.log(password);

    const handleSubmit = () => {
        navigate('/');
    }


    return (
        <form>    
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
            <br />
            <input type="submit" onClick={handleSubmit}/>
        </form>
    )
}

export default FormLogin;