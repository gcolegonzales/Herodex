const initialState = {
    inputValue: '',
    isLoading: false,
    response: []
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
                response: action.payload// Point this to endpoint
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