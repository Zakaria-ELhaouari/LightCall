import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { useStore } from '../../stores/Store'
import CityRow from './CityRow';

export default observer(function CityList(){
    const {cityStore} = useStore();
    const {laodCities} = cityStore
    useEffect(()=>{
      laodCities()
  } , [cityStore])
    return(
        
        <div>
         <div className="card mt-4">
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                            <th scope="col">city</th>
                            <th scope="col">Shiping Compnay</th>
                        </tr>
                      </thead>
                      <tbody>
                        <CityRow/>
                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    )
})