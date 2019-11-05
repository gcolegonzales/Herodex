const initialState = {
    inputValue: '',
    isLoading: false,
    response: [],
    currentHero: {}
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

        case 'LOAD_HERO':
            return {
                ...state,
                currentHero: action.payload
            }

        default: 
            return state
    }
}