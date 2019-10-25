const SUBMIT = 'SUBMIT'

export function submitInput(input) {
    return {
        type: SUBMIT,
        payload: input
    }
}