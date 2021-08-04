/* TODO
    * The result of autheduser action going through its questions reducer.
    */
import { ADD_AUTHED_USER } from '../actions/authedUser'
import { REMOVE_AUTHED_USER } from '../actions/authedUser'

export default function authenticateUser (authedUser = null, action) {
    switch (action.type) {
        case ADD_AUTHED_USER:
            return action.userID
        case REMOVE_AUTHED_USER:
            return null
        default:
            return authedUser
    }
}

