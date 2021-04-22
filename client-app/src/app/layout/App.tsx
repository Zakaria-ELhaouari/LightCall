import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import HomePage from '../features/home/HomePage';
import './App.css';
import Layout from './Layout';


function App() {

  // const DefaultRoutes = () => {
  //   return(
    
  //       <div className="main-wrapper">
  //           <div className="navbar-bg"></div>
  //           <Header/>
  //           <SideBar/>
  //             <Switch>
  //                 <Route exact path="/dashboard" component={Main} />
  //             </Switch>
  //           <Footer/>
  //       </div>
     
  //   )
  // }

  return (
    <div id="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/register' component={RegisterPage}  />
          <Route exact path='/login' component={LoginPage} />
          <Route component={Layout} />
        </Switch>
    </div>
  );
}

export default App;
