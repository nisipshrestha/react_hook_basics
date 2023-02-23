import React, { useContext } from 'react'
import { ProductContext } from './ProductContext';

const name = 'child-btn-1';
const Child1 = () => {
    const { handleClick, data } = useContext(ProductContext);
    return (
        <div className='child-container'>
            <div>
                <h2 className='sub-header'>Child1</h2>
                <p>child 1: {data[name] || data.common}</p>
                <button name={name} onClick={handleClick}>Btn 1</button>
            </div>
        </div>
    )
}

export default Child1