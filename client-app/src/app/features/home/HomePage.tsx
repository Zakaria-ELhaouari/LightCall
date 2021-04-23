import React from 'react'
import { useStore } from './../../stores/Store';

const HomePage = () => {
    const {commonStore: {TokenRoles, isRoles}, userStore: {login}} = useStore();

    const loginVals = {
        email: 'Oskar.Dobler@test.com',
        password: 'Pa$$w0rd',
    }

    const LoginTest = async () => {
        try {
            await login(loginVals);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button className="btn btn-primary" onClick={TokenRoles} >Decode Token</button>
            <button className="btn btn-danger" onClick={LoginTest} >login</button>
            <button className="btn btn-success" onClick={() => isRoles(["Admin", "Operator"])} >CheckRole</button>
        </div>
    )
}

export default HomePage
