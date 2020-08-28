export const ADD_ONE = 'ADD_ONE';
export const REMOVE_ONE = 'REMOVE_ONE';
export const ADD_FIVE = 'ADD_FIVE';
export const REMOVE_FIVE = 'REMOVE_FIVE';
export const RESET = 'RESET';

export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';
export const DELETE_ALL = 'DELETE_ALL';



// action constructor
export const addOne = () => ({
    type: ADD_ONE
})
export const removeOne = () => ({
    type: REMOVE_ONE
})
export const addFive = () => ({
    type: ADD_FIVE, value: 5
})
export const removeFive = () => ({
    type: REMOVE_FIVE, value: 5
})
export const reset = () => ({
    type: RESET
})

export const storeResults = (currentState) => ({
    type: STORE_RESULTS,
    myExportedResult: currentState
})

export const deleteResults = (id) => ({
    type: DELETE_RESULTS,
    id: id
})
export const deleteAll = () => ({
    type: DELETE_ALL

})