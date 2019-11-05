const SELECT_HERO = 'SELECT_HERO';

export function selectHero(hero) {
    return dispatch => {
        dispatch({ type: SELECT_HERO, payload: hero})
    }
}