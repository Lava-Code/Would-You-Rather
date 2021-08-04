/* TODO
    * Create a controlled component to answer question
    * Update state component on changes
    * Submit question 
    * Redirect to DashBoard after submit

    */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleQuestionAdd } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class AskQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleSubmitQuestion = (e) => {
    e.preventDefault()
    // Destructuring the options value from state
    const { optionOne, optionTwo } = this.state
    const { dispatch, authedUser: author, history } = this.props
    dispatch(
      handleQuestionAdd({ optionOne, optionTwo, author }))

    //Reset the state after submit
    this.setState({
      optionOne: '',
      optionTwo: '',
    })
    history.push('/')
  }

  handleTextChanges = (e) => {
    const stateTarget = e.target.id
    const stateValue = e.target.value
    this.setState({
      [stateTarget]: stateValue
    })
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div className='container' style={{ width: 500, paddingTop: 30 }}>
        <h3>New Qwestion</h3>
        <Form>
          <Form.Label>Whould You Rather.........?</Form.Label>
          <Form.Group>

            <Form.Control
              type="text"
              placeholder="Option1"
              id='optionOne'
              value={optionOne}
              onChange={this.handleTextChanges} />
          </Form.Group>

          <Form.Label>OR</Form.Label>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Option2"
              id='optionTwo'
              value={optionTwo}
              onChange={this.handleTextChanges} />
          </Form.Group>

          <Button
            onClick={this.handleSubmitQuestion}
            disabled={optionOne === '' || optionTwo === ''}
            className='submit'
            type="submit">
            Submit Question
            </Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(withRouter(AskQuestion))
