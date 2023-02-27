import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [time, setTime] = useState("");
    
    useEffect(() => {
     setInterval(() => {
        setTime(new Date().toLocaleTimeString());
     }, 1000);
    }, []);
    
    const history = useHistory();
    console.log(['history', history]);
    const handleClick = (param) => {
        history.push(`/contact/${param}`, { data: "asdf" });
    }
    return (
        <div>
            <h1>Home ....</h1>
            <p>Time: {time} </p>
            <button onClick={() => history.goBack()}>go back</button>
            <button onClick={() => handleClick(1)}>Route to 1</button>
            <button onClick={() => handleClick(2)}>Route to 2</button>
            <button onClick={() => handleClick(3)}>Route to 3</button>
        </div>
    );
};

export default Home;