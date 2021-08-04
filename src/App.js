import React, { Component, Fragment } from 'react'
import './App.css';

import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
// import { LoadingBar } from 'react-redux-loading'
import Login from './components/Login'
import DashBoard from './components/Dashboard'
import AskQuestion from './components/ِAskQuestion'
import QuestionDetails from './components/QuestionDetails'
import LeaderBoard from './components/LeaderBoard'
import Page404 from './components/404'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        {/* <LoadingBar /> */}
        <NavBar />
        <div>
          {this.props.login ? (<Login></Login>) : (
            <Switch>
              <Route path="/" exact name="DashBoard" component={DashBoard} />
              <Route path="/question/:id" exact component={QuestionDetails} />
              <Route path="/add/" component={AskQuestion} />
              <Route path="/PageNotFound" component={Page404} />
              <Route path="/LeaderBoard" component={LeaderBoard} />
            </Switch>)}
        </div>
      </Fragment>
    )
  }
}
function mapStateToProps({ authedUser, login }) {
  return {
    login: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
