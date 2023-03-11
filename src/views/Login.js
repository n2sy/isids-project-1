


import React, { useRef } from 'react'
import { createContext, useContext } from 'react';
import LoginContext from '../store/Login-context';
import { useNavigate } from 'react-router-dom';

function Login() {
    const login = useRef();
    const pwd = useRef();
    const logCtx = useContext(LoginContext);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const credentials = {
            login: login.current.value,
            pwd: pwd.current.value,
        }
        let cnx = logCtx.seConnecter(credentials);
        if (cnx)
            navigate('/');

    }
    return (
        <div className='container'>
            <form>
                <label>Login</label>
                <input className='form-control' ref={login}></input>
                <label>Password</label>
                <input className='form-control' ref={pwd}></input>
                <br>
                </br>
                <button type='submit' onClick={submitHandler} className='btn btn-primary'>Se connecter</button>
            </form>
        </div>
    )
}

export default Login