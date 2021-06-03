import React, { useState } from 'react'
import 'bootstrap-social'
import { Link } from 'react-router-dom';
import CurrentYear from '../../common/date/CurrentYear';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useStore } from '../../stores/Store';
import MyTextInput from '../../common/form/MyTextInput';
import { boolean } from 'yup/lib/locale';
import { observer } from 'mobx-react-lite';
const LoginPage = () => {

  const { userStore } = useStore();

  const socialStyle = {
    padding: "5px 12px 4px 50px"
  }

  const initialState = {
    email: '',
    password: '',
    error: null,
    remember: boolean
  }

  const [LoginForm] = useState(initialState)

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Password is required'),
  })
  return (

    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand">
              <img src="../assets/img/lightcalllogo.png" alt="logo" width="240" className="" />
            </div>

            <div className="card card-primary">
              <div className="card-header"><h4>Login</h4></div>

              <div className="card-body">
                <Formik
                  enableReinitialize
                  initialValues={LoginForm}
                  onSubmit={(values, { setErrors }) => userStore.login(values).catch(error => setErrors({ error }))}
                  validationSchema={loginSchema}
                >
                  {({errors, touched, handleSubmit, isSubmitting, isValid, dirty }) => (
                    <Form onSubmit={handleSubmit} autoComplete="off" >
                      <div className="form-group">
                        <MyTextInput id="email" type="email" className="form-control" name="email" tabIndex={1}   />
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">Password</label>
                          <div className="float-right">
                            <a href="auth-forgot-password.html" className="text-small">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <MyTextInput id="password" type="password" className="form-control" name="password" tabIndex={2}   />
                      </div>

                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          {/* <CheckBoxInput name="remember" id="remember-me" tabIndex={3} label="Remember Me" /> */}
                          <input type="checkbox" name="remember" id="remeber-me" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="remeber-me" >Remember Me</label>
                        </div>
                      </div>

                      <div className="form-group">
                        <button 
                          type="submit" 
                          className={`btn btn-primary btn-lg btn-block 
                          ${!isValid ? "disabled" : ""} 
                          ${isSubmitting ? "btn-progress" : ""}`} 
                          tabIndex={4}
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                  )}

                </Formik>
                <div className="text-center mt-4 mb-3">
                  <div className="text-job text-muted">Login With Social</div>
                </div>
                <div className="row sm-gutters">
                  <div className="col-6">
                    <Link to="#" className="btn btn-block btn-social btn-facebook" style={socialStyle}>
                      <span className="fab fa-facebook"></span> Facebook
                        </Link>
                  </div>
                  <div className="col-6">
                    <Link to="#" className="btn btn-block btn-social btn-twitter" style={socialStyle}>
                      <span className="fab fa-twitter"></span> Twitter
                        </Link>
                  </div>
                </div>

              </div>
            </div>
            <div className="mt-5 text-muted text-center">
              Don't have an account? <Link to="/register">Create One</Link>
            </div>
            <div className="simple-footer">
              Copyright &copy; LightCall <CurrentYear />
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}

export default observer(LoginPage);
