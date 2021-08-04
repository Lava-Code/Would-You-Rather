import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'react-bootstrap'

export class LeaderBoard extends Component {
    render() {
        const { userScoreData } = this.props
        return (
            <div >
                <ul className='list'>
                    {userScoreData.map((user) => (
                        <li key={user.id}>
                            <div className='score-info '>
                                <div>
                                    <img className='avatar' src={user.avatar} alt={`${user.userName} avatar`} />
                                    <div>
                                        <p>{user.userName}</p>
                                        <Badge pill variant="danger">Score {user.UserScore}</Badge><br />
                                        <Badge pill variant="primary">Created Questions {user.createdQuestions}</Badge>
                                        <Badge pill variant="primary">Answered Questions {user.answeredQuestions}</Badge>
                                    </div>
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userScoreData = Object.keys(users).map((userID => ({
        id: userID,
        userName: users[userID].name,
        avatar: users[userID].avatarURL,
        answeredQuestions: Object.keys(users[userID].answers).length,
        createdQuestions: users[userID].questions.length,
        UserScore: (Object.keys(users[userID].answers).length) + (users[userID].questions.length),
    })))
        .sort((a, b) => b.UserScore - a.UserScore)
    return {
        userScoreData
    }
}

export default connect(mapStateToProps)(LeaderBoard)
