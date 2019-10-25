const initialState = {
    inputValue: 'Hello World',
    type: ["Marvel", "DC", "Hero", "Villain"],
    isLoading: false,
    response: {}
}

export function searchReducer (state = initialState, action) {
    switch(action.type) {
        case 'SEARCHING':
            return {
                ...state,
                isLoading: true
            }

        case 'HERO_FOUND':
            return {
                ...state,
                response: {
                    ...state.response // Point this to endpoint
                }
            }
        
        case 'SUBMIT':
            return {
                ...state,
                inputValue: action.payload
            }

        default: 
            return state
    }
}