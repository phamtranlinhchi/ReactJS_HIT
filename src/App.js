import IncreaseNum from "./Components/IncreaseNum";
import ChangeColor from "./Components/ChangeColor";
import Content from "./Components/Content";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <ChangeColor />
                <IncreaseNum />
                <Content />
            </header>
        </div>
    );
}

export default App;
