import React,{useState} from 'react'
import { INCR, DEC } from '../actions/type';
import React,{usestate} from 'react';

export const counter = () => {
    const [count, setCount]=useState(0);
    return (
        <div>
            <button onClick={()=>INCR()}>+</button>
    <h1>{count}</h1>
            <button onClick={()=>DEC()}>-</button>
        </div>
    )
}
export default counter