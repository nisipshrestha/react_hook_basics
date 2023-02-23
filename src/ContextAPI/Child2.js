import React, { useContext } from 'react'
import { ProductContext } from './ProductContext';
import GrandChild from './GrandChild'

const name = 'child-btn-2';
const Child2 = () => {
    const { data, handleClick } = useContext(ProductContext);
    return (
        <div className='child-container'>
            <div>
                <h2 className='sub-header'>Child2</h2>
                <p>child 2:{data[name] || data.common}</p>
                <button name={name} onClick={handleClick}>Btn 2</button>
            </div>
            <GrandChild></GrandChild>
        </div>
    )
}

export default Child2