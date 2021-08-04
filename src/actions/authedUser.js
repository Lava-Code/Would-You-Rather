/* TODO
    *Create Action creator for Authenticated user to keep tracking the user behavior
    */
export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function addAuthedUser(userID) {
    return {
        type: ADD_AUTHED_USER,
        userID
    }
}

export function removeAuthedUser(userID) {
    return {
        type: REMOVE_AUTHED_USER,
        userID
    }
}

