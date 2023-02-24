import React, { useState } from 'react'
import Child1 from './Child1'
import WithButton from './withButton';

const Component1 = (props) => {
    const [parentData, setParentData] = useState({});
    const handleClick = (param) => {
        setParentData(param);
    };

    console.log(props);
    return (
        <div>HigherOrderComponents_RenderProps
            {/* Render Props. */}
            {/* <Child1
                temp={
                    (param) => {
                        const newParam = param+'1';
                        return (
                            <p>Temp {newParam}</p>
                            );
                    }
                }
            >
                {(param) => <p onClick={() => handleClick(param)}>{param}</p>}
            </Child1> */}
        </div>
    )
}

export const HigherOrderComponents_RenderProps = WithButton(Component1);