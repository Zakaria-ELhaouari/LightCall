import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import MyTextInput from '../../common/form/MyTextInput';

const RegisterPage = () => {

  const initialState = {
    userName: '',
	  firstName: '',
	  lastName: '',
    password: '',
    email: '',
    skypeId: ''
}

const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')

})

  const [registerForm, setRegisterForm] = useState(initialState)

    return (
        <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <div className="login-brand">
                <img src="../assets/img/lightcalllogo.png" alt="logo" width="240" className=""/>
              </div>
  
              <div className="card card-primary">
                <div className="card-header"><h4>Register</h4></div>
  
                <div className="card-body">
                 <Formik 
                    enableReinitialize
                    initialValues={registerForm} 
                    onSubmit={values => console.log(values)}
                    validationSchema={registerSchema}
                     >
                     {({errors,touched, handleSubmit}) => (

                        <Form onSubmit={handleSubmit}  autoComplete="off">
                            <div className="row">
                                  <div className="form-group col-6">
                                    <MyTextInput placeholder="First Name" name="firstName" label="First Name" />
                                  </div> 
                                  <div className="form-group col-6">
                                    <label htmlFor="last_name">Last Name</label>
                                    <Field id="last_name" type="text" className="form-control"  name="lastName"/>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="form-group col-6">
                                    <label htmlFor="UserName">User Name</label>
                                    <Field id="UserName" type="text" className="form-control" name="userName"   autoFocus />
                                  </div>
                                  <div className="form-group col-6">
                                    <label htmlFor="SkypeId">Skype Id</label>
                                    <Field id="SkypeId" type="text" className="form-control" name="skypeId"  />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email">Email</label>
                                  <Field id="email" type="email" className="form-control" name="email"  />
                                  <div className="invalid-feedback">
                                  </div>
                                </div>
              
                                <div className="row">
                                  <div className="form-group col-6">
                                    <label htmlFor="password" className="d-block">Password</label>
                                    <Field id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator" name="password"  />
                                    <div id="pwindicator" className="pwindicator">
                                      <div className="bar"></div>
                                      <div className="label"></div>
                                    </div>
                                  </div>
                                  <div className="form-group col-6">
                                    <label htmlFor="password2" className="d-block">Password Confirmation</label>
                                    <Field id="password2" type="password" className="form-control" name="passwordConfirmation" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="custom-control custom-checkbox">
                                    <Field type="checkbox" name="agree" className="custom-control-input" id="agree"/>
                                    <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
                                  </div>
                                </div>
              
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Register
                                  </button>
                                </div>
                        </Form>
                     )}
                 </Formik>

                </div>
              </div>
              <div className="simple-footer">
                Copyright &copy; LightCall {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default RegisterPage
