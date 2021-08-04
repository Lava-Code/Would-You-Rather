/* TODO
    * Create a controlled component to answer question

    */

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Image, Col, Row } from 'react-bootstrap'
import { handleQuestionAnswer } from '../actions/questions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AnswerQuestion extends Component {
  state = {
    value: '',
  }

  handleAnswer = (e) => {
    e.preventDefault()
    const { dispatch, authedUser, question } = this.props
    const answer = this.state.value
    const qid = question.id
    dispatch(handleQuestionAnswer(qid, answer, authedUser
    ))
  }

  handleRadioValue = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { question, users } = this.props
    const userAvatar = users[question.author].avatarURL

    return (
      <div className='question-Card' >
        <Form>
          <Row>
            <Col >
              <Image roundedCircle style={{ width: 171, height: 180, marginLeft: 100, marginBottom: 20 }} src={userAvatar} alt={`${question.author} avatar`} />
              <h3>{question.author} Asks</h3>
            </Col>
          </Row>
          <Form.Label>Whould You Rather.........?</Form.Label>
          <Form.Check
            type="radio"
            label={question.optionOne.text}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            onChange={this.handleRadioValue}
            value='optionOne'
          />
          <Form.Check
            type="radio"
            label={question.optionTwo.text}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            onChange={this.handleRadioValue}
            value='optionTwo'

          />
          <Button className='submit'
            style={{ width: 350, margin: 10 }}
            onClick={this.handleAnswer}
            type="submit">
            Submit Answer</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}
export default connect(mapStateToProps)(withRouter(AnswerQuestion))
