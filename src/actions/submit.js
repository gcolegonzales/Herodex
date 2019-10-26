import axios from 'axios';
export const SEARCHING = 'SEARCHING';
export const HERO_FOUND = 'HERO_FOUND';
export const HERO_MIA = 'HERO_MIA';
export const SUBMIT = 'SUBMIT';

export function submitInput(input) {
    return dispatch => {
        dispatch({ type: SUBMIT, payload: input });
        
        const url = 'https://superheroapi.com/api/2441252115951184';

        axios
            .get(`https://cors-anywhere.herokuapp.com/${url}/search/${input}`)
                .then((res) => {
                    console.log(res.data.results);
                    dispatch({ type: SEARCHING });
                    dispatch({ type: HERO_FOUND, payload: res.data.results});
                })
                .catch((err) => {
                    console.log(err);
                })
    }
}