import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import {  useStore } from '../../stores/Store'
  import ProjectRow from './ProjectRow';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik'


function ProjectsList() {

     const {projectStore} = useStore();

useEffect(()=>{
    projectStore.loadOrders()
} , [projectStore])



function handleSubmit(values : any  , {setErrors } : any) {
   console.log(values);
   
  }



 if(projectStore.loadingInitial) return( <div className='d-flex justify-content-center' > <Lottie   animationData={loaderAnimation} /> </div>)

    return (
        <div>
         <Link to="/Projects/AddProject" className="btn btn-icon icon-left btn-primary"> <i className="fa fa-plus" > </i> Add New Project  </Link> 

        <div className="card" >  
        <Formik 

             initialValues={{}}

           onSubmit={(values, {setErrors}) =>{handleSubmit(values, {setErrors})}}

            >
            {({errors, touched, handleSubmit, isSubmitting, isValid, dirty}) => (

               <Form onSubmit={handleSubmit}  autoComplete="off">
            <div className="form-group">
                    <label>File</label>
                    <Field name="file" type="file" className="form-control"/>
            </div>

            <div className="form-group">
                          <button disabled={!isValid || !dirty || isSubmitting} type="submit" className="btn btn-primary btn-lg btn-block">
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