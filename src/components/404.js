
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Page404 extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <img src='https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg' alt='avatar'></img>
                </Link>
            </div>
        )
    }
}

export default Page404
