let initialState = {
    comments: [],
    payload: [],
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
                ...state,
                comments: action.payload.data,
                payload: action.payload
            };
        

        case 'GET_MORE_COMMENTS':
            return {
                ...state,
                comments: [...state.comments,...action.payload.data],
                payload: action.payload
            };
        
        default:
            return state;
    }
}

export default commentReducer;