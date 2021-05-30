import React from 'react'
import { observer } from "mobx-react-lite";
import LoginPage from '../auth/LoginPage';

const HomePage = () => {
    // const {commonStore: {TokenRoles, isRoles}, userStore: {login}} = useStore();

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

    return (
        <LoginPage/>
    )
}

export default observer(HomePage)
