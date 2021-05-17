import React, { useState } from 'react'
import { Operateur } from '../../models/Operateur';
import { useStore } from '../../stores/Store'
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import MyTextInput from '../../common/form/MyTextInput';

export default function OperateurForm(){
    const {operateurStore} = useStore();
    const {selectedOperateur , creatOperateur , updateOperateur} = operateurStore;
    let initialValues : Operateur =  {
        id : '',
        userName:'',
        firstName: '',
        password:'',
        lastName:'',
        email: '',
        Status: false,
      }
      if(selectedOperateur){
        initialValues = selectedOperateur ;
        }

      const AddOperateurSchema = Yup.object().shape({
            userName: Yup.string()
                .min(3, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),    
            firstName: Yup.string()
                .min(3, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            lastName: Yup.string()
                .min(3, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            email: Yup
                .string()
                .email(),
            Status: Yup.boolean()
                .required('Required'),
        })

        const [addOperateurForm] = useState(initialValues)
        function handleSubmit(values : Operateur  , {setErrors } : any) {
            selectedOperateur ? updateOperateur(values) : creatOperateur(values) ;
          }
    return(
        <div className="card card-primary">
            <div className="card-header"><h4>{selectedOperateur ? "Edit Operateur" : "Add Operateur"}</h4></div>
            <div className="card-body">
                <Formik initialValues={addOperateurForm} 
                      validationSchema={AddOperateurSchema}
                      onSubmit={(values, {setErrors}) =>
                      {handleSubmit(values, {setErrors})}}
                >
             {({errors, touched, handleSubmit, isSubmitting, isValid, dirty}) => (
                <Form onSubmit={handleSubmit}  autoComplete="off">
                        <div className="form-group">
                          <MyTextInput type="Name" placeholder="First name" name="firstName" label="firstName" />
                        </div>

                        <div className="form-group">
                          <MyTextInput type="text" placeholder="last Name" name="lastName" label="lastName" />
                        </div>

                        <div className="form-group">
                          <MyTextInput type="text" placeholder="userName" name="userName" label="userName" />
                        </div>

                        <div className="form-group">
                          <MyTextInput type="email" placeholder="email" name="email" label="email" />
                        </div>

                        <div className="form-group">
                          <MyTextInput type="password" placeholder="password" name="password" label="password" />
                        </div>
                            
                        <div className=" form-group custom-control custom-checkbox">
                            <Field type="checkbox" className="custom-control-input" name="Status" id="customCheck1"  />
                            <label className="custom-control-label" htmlFor="customCheck1"> Is Active</label>
                        </div> 
                        <div className="form-group">
                          <button disabled={!isValid || !dirty || isSubmitting} type="submit" className="btn btn-primary btn-lg btn-block">
                            Creat Operateur
                          </button>
                        </div>
                </Form>
             )}
         </Formik>

        </div>
      </div>
    );
}