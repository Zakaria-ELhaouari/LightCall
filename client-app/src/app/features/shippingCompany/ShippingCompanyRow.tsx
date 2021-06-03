import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/Store';

function ShippingCompanyRow() {
    const {shippingCompanyStore} = useStore();
    const {deleteShippingCompany, shippingCompanys, selectShippingCompany} = shippingCompanyStore;
    return ( 
        <>
            {shippingCompanys.map((company)=> {
                return ( 
                    <tr key={company.id}>
                        <td>{company.name}</td>
                        <td>{company.apiClient}</td>
                        {/* {company.cities.forEach(city =>{
                            {console.log(city)}
                            <td>{city}</td>
                        })} */}
                        <td>
                            <div>
                                <Link to="/shippingCompany/EditCompany" onClick={()=> selectShippingCompany(company.id) } className="btn btn-info mr-2" >Edit</Link>
                                <button className="btn btn-danger" onClick={()=> deleteShippingCompany(company.id) } >Delete</button>
                            </div>
                        </td>
                    </tr>)}
            )}
        </>
    );
}

export default ShippingCompanyRow;