import React from 'react'
import { Route, Switch } from 'react-router'
import StatusList from '../features/Status/StatusList'
import StatusForm from '../features/Status/StatusForm'
import { useLocation } from 'react-router-dom'
import CityList from '../features/city/CityList'

const Main = () => {
    const location = useLocation();
    return (
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Cities</h1>
          </div> 
          <Switch>
           <Route exact path="/cities" component={CityList} />
           <Route key={location.key} path={['/creatCity' , '/city/:id']} component={StatusForm} />
         </Switch>
        </section>
      </div>
      
    )
}

export default Main
