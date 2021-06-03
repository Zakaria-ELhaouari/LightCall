import React from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores/Store';



function OperateurRow() {

   const {operateurStore} = useStore();

   const {operateurs , deleteOperateur , selecteOperateur} = operateurStore



    return ( 
        <>
       
        {operateurs.map((operateur)=> {
         return ( 
        <tr key={operateur.id}>
        <td>{operateur.lastName}</td>
        <td>{operateur.lastName}</td>
        <td>{operateur.email}</td>
        <td>{operateur.Status}</td>
        <td>
          <div>
            <Link to="/Operateur/EditOperateur" onClick={()=> selecteOperateur(operateur.id) } className="btn btn-info mr-2" >Edit</Link>
            <button className="btn btn-danger" onClick={()=> deleteOperateur(operateur.id) }>Delete</button>
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default OperateurRow;