import React from 'react'
import { Link } from 'react-router-dom'
import CurrentYear from './../common/date/CurrentYear';

const NotFound404 = () => {
    return (
        <section className="section">
        <div className="container mt-5">
          <div className="page-error">
            <div className="page-inner">
              <h1>404</h1>
              <div className="page-description">
                The page you were looking for could not be found.
              </div>
              <div className="page-search">
                <form>
                  <div className="form-group floating-addon floating-addon-not-append">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-search"></i>
                        </div>
                      </div>
                      <input type="text" className="form-control" placeholder="Search"/>
                      <div className="input-group-append">
                        <button className="btn btn-primary btn-lg">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="mt-3">
                    <Link to="/" >Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="simple-footer mt-5">
            Copyright &copy; Stisla <CurrentYear/>
          </div>
        </div>
      </section>
    )
}

export default NotFound404
