import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, ProgressBar } from 'react-bootstrap'

import { connect } from 'react-redux'

class Votes extends Component {
  render() {
    // const { author, optionOne,} = this.props.question
    const { question, users, authedUser } = this.props
    const author = question.author
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const avatar = users[author].avatarURL
    const totalOptionOneAnswers = question.optionOne.votes.length
    const totalOptionTwoAnswers = question.optionTwo.votes.length
    const totalAnswers = totalOptionOneAnswers + totalOptionTwoAnswers
    const optionOneVotes = Math.round((totalOptionOneAnswers / totalAnswers) * 10000) / 100
    const optionTwoVotes = Math.round((totalOptionTwoAnswers / totalAnswers) * 10000) / 100
    const myVoteOnOptionOne = question.optionOne.votes.includes(authedUser)
    const myVoteOnOptionTwo = question.optionTwo.votes.includes(authedUser)


    return (
      <div className='question-Card '>
        <div className='question-info'>
          <img className='avatar' src={avatar} alt={`${author} avatar`} />
          <div>
            <span>{question.author} Ask You Whould You Rather </span>

            <p className='Badge'>{optionOne}</p> <Badge pill variant="primary">Vote Rate {totalOptionOneAnswers} / {totalAnswers}</Badge>
            {myVoteOnOptionOne && (<Badge className='Badge' pill variant="success">Your Vote</Badge>)}
            <ProgressBar now={optionOneVotes} label={`${optionOneVotes}%`} />

            <p>{optionTwo}</p> <Badge pill variant="primary">Vote Rate {totalOptionTwoAnswers} / {totalAnswers}</Badge>
            {myVoteOnOptionTwo && (<Badge className='Badge' pill variant="success">Your Vote</Badge>)}
            <ProgressBar now={optionTwoVotes} label={`${optionTwoVotes}%`} />

          </div>
        </div>

      </div>
    )
  }
}
function mapStateToProps({ authedUser, users }) {

  return {
    authedUser,
    users
  }
}
export default connect(mapStateToProps)(Votes)
