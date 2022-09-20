import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((count) => count + 1)
    }

    const decrement = () => {
        setCount((count) => count - 1)
    }

    return (
        <div>
            <button className={classes.btn} onClick={decrement}>
                counter -
            </button>
            <span>
                {count}
            </span>
            <button className={classes.btn} onClick={increment}>
                counter +
            </button>
        </div>
    );
};

