import { Route, Switch } from 'react-router'
import { useLocation } from 'react-router-dom'
import CityList from '../features/city/CityList'
import CityForm from '../features/city/CityForm'

const City = () => {
    const location = useLocation();
    return (
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Cities</h1>
          </div> 
          <Switch>
           <Route exact path="/cities" component={CityList} />
           <Route key={location.key} path={['/cities/creatCity' , '/cities/:id']} component={CityForm} />
         </Switch>
        </section>
      </div>
      
    )
}

export default City
