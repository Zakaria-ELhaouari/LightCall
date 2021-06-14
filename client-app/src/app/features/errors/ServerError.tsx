import React from 'react'
import { useStore } from './../../stores/Store';
import CurrentYear from './../../common/date/CurrentYear';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ServerError = () => {
    const {commonStore: {error}, modalStore} = useStore();
    return (
            <section className="section">
                <div className="container mt-5">
                    <div className="page-error">
                    <div className="page-inner">
                        <h1>500</h1>
                        <div className="page-description">
                        Whoopps, something went wrong.
                        </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 m-auto ">
                                    <div className="card">
                                    <div className="card-header">
                                        <h4>Request Failed</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="empty-state" data-height="400" style={{height: '400px'}}>
                                        <div className="empty-state-icon bg-danger">
                                            <i className="fas fa-times"></i>
                                        </div>
                                        <h2>HTTP Request Failed</h2>
                                        <p className="lead">
                                            {error?.message} (Code: <a href="/" className="bb">500</a>)
                                        </p>
                                            <button  className="btn btn-warning mt-4" onClick={()=> modalStore.openModal(<code>{error?.details}</code>)} >Stack trace</button>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
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
                    Copyright © Stisla <CurrentYear/>
                    </div>
                </div>
                </section>
    )
}

export default observer(ServerError)
