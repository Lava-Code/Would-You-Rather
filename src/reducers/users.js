/* TODO
    * The result of users action going through its users reducer. 
    */
//import the constants   
import { RECEIVE_USERS } from '../actions/users'
import { USER_QUESTIONS_ANSWERS } from '../actions/users'
import { Add_UserQuestion } from '../actions/users'

export default function users(users = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...users,
                ...action.users
            }

        case USER_QUESTIONS_ANSWERS:
            return {
                // Return the whole previous users
                ...users,
                // Select the target user
                [action.authedUser]: {
                    // Return the whole properties of the target user
                    ...users[action.authedUser],
                    // select the answers
                    answers: {
                        // Return the whole properties of the answers
                        ...users[action.authedUser].answers,
                        // Add the qestion and its answer
                        [action.qid]: action.answer,
                    },
                },
            }

        case Add_UserQuestion:
            return {
                // Return the whole previous users
                ...users,
                // Select the target user  
                [action.authedUser]: {
                    // Return the whole properties of the target user
                    ...users[action.authedUser],
                    // Add the qestion
                    questions: [...users[action.authedUser].questions, action.qid],
                },
            }
        default:
            return users
    }
}
