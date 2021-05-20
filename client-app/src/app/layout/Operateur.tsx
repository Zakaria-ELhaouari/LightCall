import React from 'react'
import { Route, Switch } from 'react-router'
import OperateurList from '../features/operateur/OperateurList'
import OperateurForm from '../features/operateur/OperateurForm'

const Main = () => {
    return (
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Operateurs</h1>
          </div> 
          <Switch>
           <Route exact path="/Operateur" component={OperateurList} />
           <Route exact path="/Operateur/AddOperateur" component={OperateurForm} />
           <Route exact path="/Operateur/EditOperateur" component={OperateurForm} />
         </Switch>
        </section>
      </div>
    )
}

export default Main
