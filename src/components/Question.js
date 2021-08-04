import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
  render() {
    const { author, optionOne, id, avatar } = this.props

    return (
      <div className='question-Card '>
        <div className='question-info'>
          <img className='avatar' src={avatar} alt={`${author} avatar`} />
          <div>
            <span>{author} Ask You Whould You Rather </span>
            <p>{optionOne}</p>
            <Link to={`/question/${id}`}>
              <Button className='submit' type="submit">View Question</Button>
            </Link>

          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  return {
    author: question.author,
    optionOne: question.optionOne.text,
    avatar: users[question.author].avatarURL,

  }
}
export default connect(mapStateToProps)(Question)
