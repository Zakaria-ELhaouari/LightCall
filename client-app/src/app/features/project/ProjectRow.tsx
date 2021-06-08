import { observer } from 'mobx-react-lite';
import React , {useState , SyntheticEvent} from 'react';
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
            <button  className={`btn btn-danger ${loading && target === project.id ? "btn-progress" : ""}`} color='red' onClick={(e)=> handleDelete( e ,project.id) }>Delete </button>
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default observer(OrderRow);