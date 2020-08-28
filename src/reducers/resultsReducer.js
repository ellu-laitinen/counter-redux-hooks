import * as actionTypes from '../actions/actions'

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.myExportedResult
                })


            }
        case actionTypes.DELETE_RESULTS:
            const updatesResult = state.results.filter(result => result.id !== action.id)
            return {
                ...state,
                results: updatesResult

            }
        default: return state
    }

}

const initialState = {
    results: [
        { id: 1, value: 'first result' },
        { id: 2, value: 'second result' }
    ]
};


export default resultsReducer;