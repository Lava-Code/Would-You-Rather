/* TODO
    * Create Action creator for receiving questions
    * Create Action creator for answer questions
    * Asynchronous action creator for answer questions,to invoke saveQuestionAnswer from API
    */

import { saveQuestionAnswer } from '../utils/api'
import { userQuestionsAnswers } from '../actions/users'
import { _saveQuestion } from '../utils/_DATA'
import { AddUserQuestion } from '../actions/users'

// Export the constans to reducers
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const QUESTION_ANSWER = 'QUESTION_ANSWER'
export const ADD_QUESTION_BY_USER = 'ADD_QUESTION_BY_USER'


export function receivedQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function questionAnswer(qid, answer, authedUser) {
    return {
        type: QUESTION_ANSWER,
        qid,
        answer,
        authedUser
    }
}

export function addQuestionByUser(question) {
    return {
        type: ADD_QUESTION_BY_USER,
        question
    }
}


export function handleQuestionAnswer(qid, answer, authedUser) {
    return (dispatch) => {
        return saveQuestionAnswer({ qid, answer, authedUser })
            .then(() => {
                dispatch(questionAnswer(qid, answer, authedUser))
                dispatch(userQuestionsAnswers(qid, answer, authedUser))
            })
    }
}

export function handleQuestionAdd({ optionOne, optionTwo, author }) {
    return (dispatch) => {
        return _saveQuestion({ optionOne, optionTwo, author })
            .then((question) => {
                const qid = question.id
                dispatch(AddUserQuestion(qid, author))
                dispatch(addQuestionByUser(question))
            })
    }
}