import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../ThemeContext';

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const context = useContext(ThemeContext);
    const [posts, setPosts] = useState([]); 
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);
    return(
        <>
            <hr />
            {
                tabs.map((tab) => (
                    <button 
                        key={tab}
                        style={type === tab ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                ))
            }
            <ul
                style={{listStyle: 'none'}}
                className={context.theme}
            >
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Content;