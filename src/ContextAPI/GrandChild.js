import React, { useContext } from 'react'
import { ProductContext } from './ProductContext';

const name ='grand-child-btn';
const GrandChild = () => {
    const { data, handleClick } = useContext(ProductContext);

    return (
        <div className='child-container'>
            <div>
                <h2 className='sub-header'>
                    GrandChild
                </h2>
                <p>G.child data: {data[name] || data.common}</p>
                <button name={name} onClick={handleClick}>G.Btn</button>
            </div>
        </div>
    )
}

export default GrandChild