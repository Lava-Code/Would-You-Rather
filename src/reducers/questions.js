/* TODO
    * The result of questions action going through its questions reducer.
    */
//import the constant of question from actions
import { RECEIVE_QUESTIONS } from '../actions/questions'
import { QUESTION_ANSWER } from '../actions/questions'
import { ADD_QUESTION_BY_USER } from '../actions/questions'

export default function questions(questions = {}, action) {
    switch (action.type) {

        case RECEIVE_QUESTIONS:
            return {
                ...questions,
                ...action.questions
            }

        case QUESTION_ANSWER:
            console.log(questions[action.qid])
            const selectedAnswer = questions[action.qid][action.answer]
            return {
                // Return the whole previous questions
                ...questions,
                // Select the selected question                      
                [action.qid]: {
                    // Return the whole properties of the selected question
                    ...questions[action.qid],
                    // Select the answer of the selected question
                    [action.answer]: {
                        // Return the whole properties of the selected answer
                        ...selectedAnswer,
                        // Include the authedUser to the returned votes
                        votes: [...selectedAnswer.votes, action.authedUser],
                    },
                },
            }

        case ADD_QUESTION_BY_USER:
            return {
                // Return the whole previous questions
                ...questions,
                // Add the new question
                [action.question.id]: action.question,
            }
        default:
            return questions
    }
}
