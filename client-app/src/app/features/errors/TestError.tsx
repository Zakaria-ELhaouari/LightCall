import React, { useState } from 'react'
import axios from 'axios';
import ValidationErrors from './ValidationErrors';
const TestError = () => {
    const baseUrl = 'http://localhost:5000/api/';
    const [errors, setErrors] = useState(null);

    function handleNotFound() {
        axios.get(baseUrl + 'buggy/not-found').catch(err => console.log(err.response));
    }

    function handleBadRequest() {
        axios.get(baseUrl + 'buggy/bad-request').catch(err => console.log(err.response));
    }

    function handleServerError() {
        axios.get(baseUrl + 'buggy/server-error').catch(err => console.log(err.response));
    }

    function handleUnauthorised() {
        axios.get(baseUrl + 'buggy/unauthorised').catch(err => console.log(err.response));
    }

    function handleBadGuid() {
        axios.get(baseUrl + 'Cities/notaguid').catch(err => console.log(err));
    }

    function handleValidationError() {
        axios.post(baseUrl + 'Cities', {}).catch(err => setErrors(err));
    }

    return (
        <>
        <div className="main-content">
        <div className="section">
            <div className="section-header">
                <h1>Test Error component</h1>
            </div>
            <div className="section-body">
                <div className="row">
                     <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Errors Endpoints</h4>
                            </div>
                            <div className="card-body">
                                <div className="buttons">
                                <button className="btn btn-primary" onClick={handleNotFound} >Not Found</button>
                                <button  className="btn btn-secondary" onClick={handleBadRequest}>Bad Request</button>
                                <button  className="btn btn-info" onClick={handleValidationError}>Validation Error</button>
                                <button  className="btn btn-warning" onClick={handleServerError}>Server Error</button>
                                <button  className="btn btn-danger" onClick={handleUnauthorised}>Unauthorised</button>
                                <button  className="btn btn-success" onClick={handleBadGuid}>Bad Guid</button>
                                </div>
                            </div>
                        </div>
                            {errors &&
                                <ValidationErrors errors={errors} />
                            } 
                    </div>
                </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default TestError
