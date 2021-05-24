import React from 'react'
import { Route, Switch } from 'react-router'
import StatusList from '../features/Status/StatusList'
import StatusForm from '../features/Status/StatusForm'

const Main = () => {
    return (
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Status</h1>
          </div> 
          <Switch>
           <Route exact path="/Status" component={StatusList} />
           <Route exact path="/Status/AddStatus" component={StatusForm} />
           <Route exact path="/Status/EditStatus" component={StatusForm} />
         </Switch>
        </section>
      </div>
    )
}

export default Main
