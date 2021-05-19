import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import HomePage from '../features/home/HomePage';
import Page403 from '../security/Page403';
import PrivateAdminRoute from '../security/PrivateAdminRoute';
import { useStore } from '../stores/Store';
import Footer from './Footer';
import Header from './Header';
import LoadingComponent from './LoadingComponent';
import Main from './Main';
import SideBar from './SideBar';
import './Styles.css';
// import '../js/index.js';


function App() {
  const {userStore, commonStore} = useStore();

  useEffect(() => {
   if(commonStore.token){
     console.log(userStore.user + "before");
     userStore.getUser().finally(() => commonStore.setApploaded());
     console.log(userStore.user + "after");

   }else {
     commonStore.setApploaded();
   }
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='loading app ...' />

  const DefaultLayout = () => {
    return (
        
      <div className="main-wrapper">
          <div className="navbar-bg"></div>
          <Header/>
          <SideBar/>
              <Switch>
                  <PrivateAdminRoute exact path="/dashboard" component={Main} />
                  
              </Switch>
          <Footer/>
      </div>
  
)
  }

  return (
    <div id="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/register' component={RegisterPage}  />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/RestrictedAccess' component={Page403} />
          <Route component={DefaultLayout} />
        </Switch>
    </div>
  );
}

export default observer(App);

