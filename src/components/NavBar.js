import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Form, Button, NavbarBrand } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class NavBar extends Component {

    handleSignOut = (e) => {
        e.preventDefault()
        const { authedUser, dispatch } = this.props
        dispatch(removeAuthedUser(authedUser))
        
    }

    render() {
        const {  avatar, authedUser } = this.props
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    

                    <Nav className="mr-auto">
                        <Link to='/' className='nav-items'>
                        <NavbarBrand>DashBoard</NavbarBrand>
                        </Link>

                        <Link to='/add' className='nav-items'>
                        <NavbarBrand>New Question</NavbarBrand>
                        </Link>

                        <Link to='/LeaderBoard' className='nav-items'>
                        <NavbarBrand>Leader Board</NavbarBrand>
                        </Link>

                    </Nav>
                    <Form inline>
                        <NavbarBrand className='nav-items'>{authedUser}</NavbarBrand>
                        <img style={{ width: 50, marginRight: 10 }} src={avatar} alt=''></img>
                        <Button onClick={this.handleSignOut} variant="outline-light">Sign Out</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({ users,authedUser}) {
    const avatar = authedUser? users[authedUser].avatarURL:null
    return {
        authedUser,
        avatar
    }
}
export default connect(mapStateToProps)(NavBar)
