import React, { useState } from 'react'

const useLocalStorage = () => {
    const [data, setdata] = useState('');
    function getData(key) {
        const tempData = localStorage.getItem(key);
        setdata(tempData);
        return tempData;
    }
    function setLocData(key, value) {
        localStorage.setItem(key, value);
        setdata(value);
    }
    return [
        data, getData, setLocData
    ];
}

const Custom_hooks = () => {
    const [data, getData, setLocData] = useLocalStorage();
    console.log(data, getData, setLocData);

    return (
        <div>Custom_hooks
            <input value={data} onChange={e => setLocData('key', e.target.value)} />


        </div>
    )
}

export default Custom_hooks