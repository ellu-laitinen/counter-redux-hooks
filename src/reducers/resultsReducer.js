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
        case actionTypes.DELETE_ALL:
            return initialState;

        default: return state
    }

}

const initialState = {
    results: []
};


export default resultsReducer;