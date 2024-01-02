import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.button} onClick={handleCount}>increment</button>
        </div>
    );
};

