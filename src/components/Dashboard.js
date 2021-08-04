
import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import Question from './Question'


export class Dashboard extends Component {
    render() {
        // Destructuring the require data from props
        const { questionIDS, questions, authedUser } = this.props

        // Get the answerd question by authed user
        const answeredQuess = questionIDS.filter((quesID) =>
            questions[quesID].optionOne.votes.includes(authedUser) ||
            questions[quesID].optionTwo.votes.includes(authedUser))

        // Get the answerd question by authed user
        const unAnsweredQuess = questionIDS.filter((quesID) =>
            !questions[quesID].optionOne.votes.includes(authedUser) &&
            !questions[quesID].optionTwo.votes.includes(authedUser))

        return (
            <div>
                <Tabs className='nav-items' defaultActiveKey="Unanswered Questions" id="uncontrolled-tab-example">
                    <Tab eventKey="Answered Questions" title="Answered Questions">
                        <ul className='list'>
                            {answeredQuess.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>
                    </Tab>
                    <Tab eventKey="Unanswered Questions" title="Unanswered Questions">
                        <ul className='list'>
                            {unAnsweredQuess.map((id) => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>

                    </Tab>
                </Tabs>
            </div>
        )
    }
}
// Destructuring the required piece of state (questions,authedUser) which will shown as property
function mapStateToProps({ authedUser, questions }, { id }) {

    return {
        questionIDS: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
        questions


    }
}
export default connect(mapStateToProps)(Dashboard)
