import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnswerQuestion from './ِAnswerQuestion'
import Votes from './Votes'
import { Redirect } from 'react-router-dom'
export class QuestionDetails extends Component {
    render() {
        const { question, authedUser } = this.props
        // Protect the route from undefined question
        if (!question) {
            return <Redirect to='/PageNotFound' />
        }
        // Check and route for answered and unanswered questions
        const isAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
        return (
            isAnswered ? (<Votes question={question}></Votes>) : (<AnswerQuestion question={question} />)
        )
    }
}
function mapStateToProps({ questions, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
        question,
        authedUser,
    }

}
export default connect(mapStateToProps)(QuestionDetails)
