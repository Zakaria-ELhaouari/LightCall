import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import HomePage from '../features/home/HomePage';
import { useStore } from '../stores/Store';
import './App.css';
import Layout from './Layout';
import Page403 from '../security/Page403';
import { observer } from 'mobx-react-lite';
import loaderAnimation from "../assets/loader.json";

function App() {
  const {userStore, commonStore} = useStore();

  useEffect(() => {
   if(commonStore.token){
    //  console.log(userStore.user + "before");
     userStore.getUser().finally(() => commonStore.setApploaded());
    //  console.log(userStore.user + "after");
   }else {
     commonStore.setApploaded();
   }


  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return( <div className='d-flex justify-content-center' > <Lottie  animationData={loaderAnimation} /> </div>)

  return (
    <div id="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/register' component={RegisterPage}  />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/RestrictedAccess' component={Page403} />
          <Route component={Layout} />
        </Switch>
    </div>
  );
}

export default observer(App);
