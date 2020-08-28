import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Counter.css'

import { addOne, removeOne, addFive, removeFive, reset } from '../actions/actions'

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const notes = useSelector((state) => state.counter.notes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Number now:</h1> <h1 className="counterNumber"> {counter}</h1>
            <h1>Notes: {notes}</h1>
            <button onClick={() => dispatch(addOne())}>Add one</button>
            <button onClick={() => dispatch(removeOne())}>Remove one</button>
            <button onClick={() => dispatch(addFive())}>Add 5</button>
            <button onClick={() => dispatch(removeFive())}>Remove 5</button>
            <button onClick={() => dispatch(reset())}>Reset counter</button>
        </div>
    );
}

export default Counter;
