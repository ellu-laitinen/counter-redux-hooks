import * as actionTypes from '../actions/actions'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ONE:
            return {
                ...state, counter: state.counter + 1, notes: 'added one'
            }

        case actionTypes.REMOVE_ONE:
            return {
                ...state, counter: state.counter - 1, notes: 'removed one'
            }
        case actionTypes.ADD_FIVE:
            return {
                ...state, counter: state.counter + action.value, notes: `added ${action.value}`
            }
        case actionTypes.REMOVE_FIVE:
            return {
                ...state, counter: state.counter - action.value, notes: `removed ${action.value}`
            }
        case actionTypes.RESET:
            return initialState

        default: return state;

    }

}

const initialState = {
    counter: 0,
    notes: 'some notes will be here'
}



export default reducer;