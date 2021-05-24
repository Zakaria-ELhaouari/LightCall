import { observer } from 'mobx-react-lite';
import React , {useState , SyntheticEvent} from 'react';
import { Button } from "semantic-ui-react"
import { useStore } from '../../stores/Store';



function OrderRow() {

  const [target, setTarget] = useState('');
   const {projectStore} = useStore();
   
   const {projects , deleteProject , loading} = projectStore

   const handleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(id);
    deleteProject(id)
}


    return ( 
        <>
       
        {projects.map((project)=> {
            console.log(project.id);
            
         return ( 
        <tr key={project.id}>
        <td>{project.project_Type}</td>
        <td>{project.isShopify ? "http://localhost:5000/api/order/shopify/"+project.id : "false" }</td>
        
        {/* <td>{order.project?.project_Type}</td> */}
       
        <td>
          <div>
           
            <Button  loading={loading && target === project.id} className="btn btn-danger" color='red' onClick={(e)=> handleDelete( e ,project.id) } content="Delete" />
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default observer(OrderRow);