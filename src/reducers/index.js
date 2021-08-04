/* TODO
    * combine all reducers into one main, root reducer, 
which will combine the results of calling the questions reducer, users reducer, 
and authedUser reducer into a single state object. Remember, we need to do this because 
the createStore function only accepts a single reducer.
    */

import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
    authedUser,
    users,
    questions,
    lodingBar: loadingBarReducer,
})