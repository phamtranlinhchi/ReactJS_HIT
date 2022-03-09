// import logo from './logo.svg';
import Heading from './Heading';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [post, setPost] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(json => setPost(json))
  }, []);

  //useEffect co [] => Se chi goi useE va call chay 1 lan
  //useEffect co [gi do] => Se chay khi doi so trong [] thay doi

  return (
    <div className="App">
      <header className="App-header">
        <Heading/>
        {
          post && (
            post.map((item, index) => {
              console.log(item);
              return (
                <p key={index}>{item.name}</p>
              )
            })
          )
        }
      </header>
    </div>
  );
}

export default App;
