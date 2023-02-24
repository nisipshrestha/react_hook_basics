import React, { useCallback, useEffect, useMemo, useState } from 'react'

const checkRender = new Set();

const Button = ({ btnVal, handleSubmit }) => {
    checkRender.add(handleSubmit);
    console.log(checkRender.size);
    return (
        <button onClick={()=>handleSubmit("from child")}>{btnVal}</button>
    )
}

const UseCallbackExample = () => {
    const [data, setdata] = useState({});
    const [counter, setcounter] = useState(0);

    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const value = await response.json();
        setdata(value);
    }
    useEffect(() => {
        getData();
    }, []);
    // const handleSubmit = (arg, number) => {
    //     console.log("arg", arg, number);
    //     // POST API ....
    //     console.log(data);
    // };

    const handleSubmit = useCallback((arg, number) => {
        console.log("arg", arg, number);
        // POST API ....
        console.log(data);
    }, [data]);
    checkRender.add(handleSubmit);
    console.log(checkRender.size);

    return (
        <div>UseCallbackExample
            <button onClick={() => setcounter(counter + 1)}>{counter}</button>
            <p>{data.title}</p>

            <button onClick={() => handleSubmit("some arg...", 1)}>Submit</button>
            <Button btnVal={data.title} handleSubmit={handleSubmit}>Child button</Button>
        </div>
    )
}

export default UseCallbackExample;