import { useContext } from 'react';
import { Routes, Route, Link /*useLocation*/ } from 'react-router-dom';
import FormLogin from './components/FormLogin';
import ToDoList from './components/ToDoList';
import { ThemeContext } from './ThemeContext';

function App() {
    const context = useContext(ThemeContext);
    // const location = useLocation();

    // console.log(location);

    return (
        <div className={context.theme}>
            <button onClick={context.toggleTheme}>Change Theme</button>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/todolist'>To Do List</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/login' element={<FormLogin />} />
                <Route path='/login/:params' element={<FormLogin />} />
                <Route path='/todolist' element={<ToDoList />} />
            </Routes>
        </div>
    );
}

export default App;
