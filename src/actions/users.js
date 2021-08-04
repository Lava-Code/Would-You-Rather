/* TODO
    * Create Action creator for receiving users list
    * Create Action creator for updating the user answers
    */
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_QUESTIONS_ANSWERS = 'USER_QUESTIONS_ANSWERS'
export const Add_UserQuestion = 'Add_UserQuestion'

export function receivedUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userQuestionsAnswers(qid, answer, authedUser) {
    return {
        type: USER_QUESTIONS_ANSWERS,
        qid,
        answer,
        authedUser
    }
}

export function AddUserQuestion(qid, authedUser) {
    return {
        type: Add_UserQuestion,
        qid,
        authedUser
    }
}
