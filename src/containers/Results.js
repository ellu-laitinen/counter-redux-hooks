import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Results.css'

import { storeResults, deleteResults, deleteAll } from '../actions/actions'

const Results = () => {

    const results = useSelector((state) => state.results.results);
    const currentState = useSelector(state => state.counter.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(storeResults(currentState))}>Store the results</button>
            <button onClick={() => dispatch(deleteAll())}>Delete all results</button>
            <ul>
                {results.map(item => <li onClick={() => dispatch(deleteResults(item.id))} key={item.id}>{item.value}</li>)}

            </ul>
        </div>
    );
}

export default Results;
