import  { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import {  useStore } from '../../stores/Store'
import ProjectRow from './ProjectRow';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik'


function ProjectsList() {

     const {projectStore , orderStore} = useStore();
     const {UploadExel} = orderStore

useEffect(()=>{
    projectStore.loadOrders()
} , [projectStore])



function handleSubmit(values : any  , {setErrors } : any) {
   const data = new FormData();

   console.log(values.importFile);
   

   data.append("importFile" ,values.importFile)
   
   console.log(data);
   
    UploadExel(data);

  }



 if(projectStore.loadingInitial) return( <div className='d-flex justify-content-center' > <Lottie   animationData={loaderAnimation} /> </div>)

    return (
        <div>
         <Link to="/Projects/AddProject" className="btn btn-icon icon-left btn-primary"> <i className="fa fa-plus" > </i> Add New Project  </Link> 

        <div className="card p-3 mt-4" >  
        <Formik 

             initialValues={{}}

           onSubmit={(values, {setErrors}) =>{handleSubmit(values, {setErrors})}}

            >
            {({errors, touched, handleSubmit, isSubmitting, isValid, dirty , setValues , values }) => (

               <Form onSubmit={handleSubmit}  autoComplete="off">
            <div className="form-group">
                    <label>File</label>
                    <input name="importFile"  type="file" onChange={(event) => setValues({
    ...values,
    [event.currentTarget.name]: event.currentTarget.files![0]
})} className="form-control"/>
            </div>

            <div className="ml-auto">
                          <button disabled={!isValid || !dirty || isSubmitting} type="submit" className="btn btn-primary btn-lg btn-block ">
                            Import
                          </button>
            </div>
            </Form>
             )}
            </Formik>
            
        </div>
      
         <div className="card mt-4">

                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Project Name</th>
                          <th scope="col">Is Shopify</th>
                          <th scope="col">Actions</th>

                        </tr>
                      </thead>
                      <tbody>
                      
                   <ProjectRow/> 

                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    );
}

export default observer(ProjectsList) ;