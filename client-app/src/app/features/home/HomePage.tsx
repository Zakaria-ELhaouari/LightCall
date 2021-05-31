import React, { useEffect } from 'react'
import { observer } from "mobx-react-lite";
import LoginPage from '../auth/LoginPage';
import { useStore } from '../../stores/Store';
import { history } from './../../../index';

const HomePage = () => {
    const {userStore: {isLoggedIn}} = useStore();

    // const loginVals = {
    //     email: 'Oskar.Dobler@test.com',
    //     password: 'Pa$$w0rd',
    // }

    // const LoginTest = async () => {
    //     try {
    //         await login(loginVals);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        isLoggedIn && history.push('/dashboard');
    })

    return (
        
        <LoginPage/>
      
        
    )
}

export default observer(HomePage)
