import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import MyTextInput from '../../common/form/MyTextInput';
import { useStore } from '../../stores/Store';


const RegisterPage = () => {

  const {userStore} = useStore();

  const initialValues = {
    userName: '',
	  firstName: '',
	  lastName: '',
    password: '',
    passwordConfirmation:'',
    email: '',
    skypeId: '',
    agree: '',
    error: null
}


const [registerForm] = useState(initialValues)

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
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  agree: Yup.boolean().required("Ooh shoot You just forgot to check to checkbox")

})



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
                    onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => setErrors({error}))} 
                    validationSchema={registerSchema}
                     >
                     {({errors, touched, handleSubmit, isSubmitting, isValid, dirty}) => (

                        <Form onSubmit={handleSubmit}  autoComplete="off">
                            <div className="row">
                                  <div className="form-group col-6">
                                    <MyTextInput placeholder="First Name" name="firstName" label="First Name" />
                                  </div> 
                                  <div className="form-group col-6">
                                    <MyTextInput placeholder="Last Name" name="lastName" label="First Name" />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="form-group col-6">
                                    <MyTextInput placeholder="User Name" name="userName" label="User Name" />
                                  </div>
                                  <div className="form-group col-6">
                                    <MyTextInput placeholder="Skype id" name="skypeId" label="Skype Id" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <MyTextInput type="email" placeholder="your email" name="email" label="Email" />
                                </div>
              
                                <div className="row">
                                  <div className="form-group col-6">
                                    <MyTextInput type="password" className="pwstrength" name="password" label="password" data-indicator="pwindicator" />
                                    <div id="pwindicator" className="pwindicator">
                                      <div className="bar"></div>
                                      <div className="label"></div>
                                    </div>
                                  </div>
                                  <div className="form-group col-6">
                                    <MyTextInput type="password" className="pwstrength" name="passwordConfirmation" label="Password Confirmation"/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="custom-control custom-checkbox">
                                    <Field type="checkbox" name="agree" className={`custom-control-input ${errors.agree && touched.agree && "is-invalid" }`}  id="agree"/>
                                    <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
                                    {errors.agree && touched.agree && (<div className="invalid-feedback">{errors.agree}</div>)}
                                  </div>
                                </div>
                                <div className="form-group">
                                  <button disabled={!isValid || !dirty || isSubmitting} type="submit" className="btn btn-primary btn-lg btn-block">
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
