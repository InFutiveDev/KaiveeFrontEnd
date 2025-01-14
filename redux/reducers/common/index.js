// **  Initial State
const initialState = {
    dynamicMetaTitle: null
}

const manageCommonVarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DYNAMIC_META_TITLE_DES':
            return {
                ...state,
                dynamicMetaTitle: action.data
            }
        default:
            return state
    }
}

export default manageCommonVarReducer
