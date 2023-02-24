import React, { useEffect, useMemo, useState } from 'react'

const checkRender = new Set();

const UseMemoExample = () => {
    const [data, setdata] = useState([]);
 const [counter, setcounter] = useState(0);

    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const value = await response.json();
        setdata(value);
    }
    useEffect(() => {
        getData();
    }, [])

    const filteredArray = useMemo(() => {
        return data.filter(each => each.id % 2 === 0).slice(0, 21);
    }, [data]);

    // const filteredArray =data.filter(each => each.id % 2 === 0).slice(0, 21);
    checkRender.add(filteredArray)
    console.log(checkRender.size);
    return (
        <div>UseMemoExample
            <button onClick={()=> setcounter(counter +1)}>{counter}</button>
            <ul>
                {
                    filteredArray.map(each => (
                        <li key={each.title}>{each.title}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default UseMemoExample;