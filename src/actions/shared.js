/* TODO
    *Create thunk action creator, the action will only reach the reducers once the API request is completed
    */
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receivedUsers } from '../actions/users'
import { receivedQuestions } from '../actions/questions'


// Asynchronous action creator
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receivedUsers(users))
                dispatch(receivedQuestions(questions))
                dispatch(hideLoading())
            })
    }
}