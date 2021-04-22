import React from 'react'

const RegisterPage = () => {
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
                  <form method="POST">
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="first_name">First Name</label>
                        <input id="first_name" type="text" className="form-control" name="first_name" autoFocus />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" type="text" className="form-control" name="last_name"/>
                      </div>
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-control" name="email"/>
                      <div className="invalid-feedback">
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="form-group col-6">
                        <label htmlFor="password" className="d-block">Password</label>
                        <input id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator" name="password"/>
                        <div id="pwindicator" className="pwindicator">
                          <div className="bar"></div>
                          <div className="label"></div>
                        </div>
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="password2" className="d-block">Password Confirmation</label>
                        <input id="password2" type="password" className="form-control" name="password-confirm"/>
                      </div>
                    </div>
  
                    <div className="form-divider">
                      Your Home
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label>Country</label>
                        <select className="form-control selectric">
                          <option>Indonesia</option>
                          <option>Palestine</option>
                          <option>Syria</option>
                          <option>Malaysia</option>
                          <option>Thailand</option>
                        </select>
                      </div>
                      <div className="form-group col-6">
                        <label>Province</label>
                        <select className="form-control selectric">
                          <option>West Java</option>
                          <option>East Java</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-6">
                        <label>City</label>
                        <input type="text" className="form-control"/>
                      </div>
                      <div className="form-group col-6">
                        <label>Postal Code</label>
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
  
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" name="agree" className="custom-control-input" id="agree"/>
                        <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
                      </div>
                    </div>
  
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-lg btn-block">
                        Register
                      </button>
                    </div>
                  </form>
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
