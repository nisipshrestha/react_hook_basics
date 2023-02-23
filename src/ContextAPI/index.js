import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
import { ProductContext } from './ProductContext';

const ContextAPIExample = () => {
    const [data, setData] = useState({ common: '' });
    const [isCommon, setIsCommon] = useState(false);

    const toggleCommon = () => {
        setIsCommon(!isCommon);
    };

    const handleClick = e => {
        if (isCommon) setData({ common: `click from ${e.target.name}` });
        else setData({ ...data, [e.target.name]: `click from ${e.target.name}` });
    };

    return (
        <div className='container'>
            <div>
                <h1 className='header'>Context API Example</h1>

                <div className="wrapper">
                    <input type='checkbox' value={isCommon} onClick={toggleCommon} />
                    <label htmlFor="isCommon">Is Common</label>
                    
                    <div className="wrapper">
                        <ProductContext.Provider value={{ data, isCommon, handleClick }}>
                            <Child1 />
                            <Child2 />
                        </ProductContext.Provider>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContextAPIExample;