import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
    const btnRef = useRef();
    const [counter, setCounter] = useState(60);
    const intervalRef = useRef();

    // Element property modification.
    // useEffect(() => {
    //     if (counter % 2 === 0) {
    //         btnRef.current.style.color = 'red';
    //     }
    //     else {
    //         btnRef.current.style.color = 'green';
    //     }
    // }, [counter]);
    useEffect(() => {
        // intervalRef.current = setInterval(() => {
        //     setCounter(prev => prev + 1);
        // }, 1000);
    }, []);

    function handleStart() {
        intervalRef.current = setInterval(() => {
            setCounter(prev => prev - 1);
        }, 1000);
    }
    function handleStop() {
        clearInterval(intervalRef.current);
        setCounter(60);
    }

    return (
        <div>UseRefExample
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <p>Counter: {counter}</p>
            {/* <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button> */}
            <button ref={btnRef}>Test Button</button>
        </div>
    )
}

export default UseRefExample;