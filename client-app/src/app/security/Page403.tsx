import React from 'react'
import CurrentYear from '../common/date/CurrentYear'

const Page403 = () => {
    return (
        <section className="section">
        <div className="container mt-5">
          <div className="page-error">
            <div className="page-inner">
              <h1>403</h1>
              <div className="page-description">
                  You do not have access to this page.
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
                  <a href="index.html">Back to Home</a>
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

export default Page403
