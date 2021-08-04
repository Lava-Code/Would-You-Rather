import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { addAuthedUser } from '../actions/authedUser'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Ahmed Elhawary
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export class Login extends Component {
    state = {
        authedUser: '',
    }

    handleSelectChange = (e) => {
        this.setState({ authedUser: e.target.value })
    }

    handleSignIn = (e) => {
        e.preventDefault()
        this.props.dispatch(addAuthedUser(this.state.authedUser))
    }

    render() {
        const { users } = this.props
        const { authedUser } = this.state
        return (
            <Container component="main" maxWidth="xs">
                <div className='container' style={{ width: 380, paddingTop: 30 }}>
                    <div style={{ paddingLeft: 150, paddingTop: 30 }}>
                        <Avatar >
                            <LockOutlinedIcon color="secondary" />
                        </Avatar>
                    </div>
                    <Typography style={{ paddingLeft: 135 }} component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form >
                        <FormControl >
                            <InputLabel color="secondary">Select User Name</InputLabel>
                            <Select
                                onChange={this.handleSelectChange}
                                value={authedUser}
                                style={{ width: 350 }}>

                                {users && Object.keys(users).map((userID) => (
                                    <MenuItem key={userID} value={userID} style={{ width: 350 }}>
                                        {users[userID].name}
                                        {/* <img
                                            src={users[userID].avatarURL}
                                            alt=''
                                            style={{ width: 50, marginLeft: 150 }}>
                                        </img> */}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            onClick={this.handleSignIn}
                            style={{ marginTop: 20 }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary">
                            Sign In
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(Login)
