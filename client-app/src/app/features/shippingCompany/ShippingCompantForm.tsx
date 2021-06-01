import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import MyTextInput from "../../common/form/MyTextInput"
import { shippingCompany } from '../../models/shippingCompany';
import { useStore } from '../../stores/Store';
// import {multiSelect} from 'multiselect-react-dropdown';

export default function ShippingCompanyForm(){
    const {shippingCompanyStore} = useStore();
    const {creatShippingCopany , updateShippingCompany , shippingCompanySelected} = shippingCompanyStore;
    let initialValues  = shippingCompanySelected ?? {
      id : '',
      Name : '',
      ApiClient : '',
      city : ''
    }
    const [company ] = useState(initialValues);
    function handleSubmit(values : shippingCompany  , {setErrors } : any) {
      shippingCompanySelected ? updateShippingCompany(values) : creatShippingCopany(values);
      }
    return(
        <div className="card card-primary">
            <div className="card-header"><h4>Add shipping Company</h4></div>
            <div className="card-body">
            <Formik initialValues={company} 
                onSubmit={(values, {setErrors}) =>
                {handleSubmit(values, {setErrors})}}>
             {({errors, touched, handleSubmit, isSubmitting, isValid, dirty}) => (
                <Form onSubmit={handleSubmit}  autoComplete="off">
                        <div className="form-group">
                          <MyTextInput type="Name" placeholder="Name" name="Name" label="Name" />
                        </div>
                        <div className="form-group">
                          {/* <MyTextInput type="email" placeholder="email" name="email" label="email" /> */}
                          {/* <MultiSelect/> */}
                        </div>
                        <div className=" form-group custom-control custom-checkbox">
                            <Field type="checkbox" className="custom-control-input" name="Status" id="customCheck1"  />
                            <label className="custom-control-label" htmlFor="customCheck1"> Is Active</label>
                        </div> 
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-lg btn-block">
                            Add shipping company
                          </button>
                          
                        </div>
                </Form>
             )}
         </Formik>

        </div>
      </div>
    )
}