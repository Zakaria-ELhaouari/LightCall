import Lottie from 'lottie-react';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import HomePage from '../features/home/HomePage';
import { useStore } from '../stores/Store';
import Page403 from '../security/Page403';
import { observer } from 'mobx-react-lite';
import loaderAnimation from "../assets/loader.json";
import PrivateOperatorRoute from '../security/PrivateOperatorRoute';
import PivateLayout from '../security/PivateLayout';
import OperatorDashoard from '../features/Operator/OperatorDashoard';
import Main from '../features/Admin/Main';
import ManageOperator from './../features/Admin/ManageOperator';

function App() {
  const {userStore, commonStore: {setApploaded, token, appLoaded}} = useStore();

  useEffect(() => {
   if(token){
     userStore.getUser().finally(() => setApploaded());
   }else {
     setApploaded();
   }
  }, [setApploaded, token, userStore])

  if(!appLoaded) return( <div className='d-flex justify-content-center' > <Lottie  animationData={loaderAnimation} /> </div>)

  return (
    <div id="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/register' component={RegisterPage}  />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/RestrictedAccess' component={Page403} />
          <PrivateOperatorRoute exact path="/OperatorDashboard" component={OperatorDashoard} />
          {/* <Route  exact component={Layout} /> */}
          <PivateLayout exact path="/manageOperators" component={ManageOperator} />
          <PivateLayout exact path="/Admindashboard" component={Main} />
         


        </Switch>
    </div>
  );
}

export default observer(App);
