import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
  _saveQuestion,
} from './_DATA'

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  )
}

export function saveQuestionAnswer(answerData) {
  return _saveQuestionAnswer(answerData)
}

export function saveNewQuestion(question) {
  return _saveQuestion(question)
}

