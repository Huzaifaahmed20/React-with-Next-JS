import React, { Component } from 'react'
import Layout from "./MyLayout";
import Link from 'next/link';

const styles = {
    loginContainer: {
        backgroundColor: 'yellow',
        marginLeft: 400,
        height: 300,
        width: 200,
        shadowColor: '#000',
        shadowOffset: { width: 100, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },
    heading: {
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },
    loginButton: {
        marginLeft: 55,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: 'purple',
        color: 'white',
        height: 30,
        width: 100,
        border: 'none'
    },
    inputSTyle1: {
        borderRadius: 5,
        border: '1px solid black',
        marginLeft: 20,
        marginTop: 30
    },
    inputSTyle2: {
        borderRadius: 5,
        border: '1px solid black',
        marginLeft: 20,
        marginTop: 20
    }
}

export default class Login extends Component {
    handleLogin() {
        console.log('Login request')
    }
    render() {
        return (
            <div style={styles.loginContainer}>
                <h1 style={styles.heading}>Log In</h1>
                <input style={styles.inputSTyle1} type='text' name='email' /><br /><br />
                <input style={styles.inputSTyle2} type='password' name='password' /><br /><br />
                <Link href={'/'}>
                    <button style={styles.loginButton} onClick={this.handleLogin.bind(this)} >Log In</button>
                </Link>
            </div>
        )
    }
}