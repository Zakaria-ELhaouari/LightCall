import React from 'react';

import { useStore } from '../../stores/Store';



function OperateurRow() {

   const {operateurStore} = useStore();

   const {operateurs} = operateurStore



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
           
            <button className="btn btn-danger">Delete</button>
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default OperateurRow;