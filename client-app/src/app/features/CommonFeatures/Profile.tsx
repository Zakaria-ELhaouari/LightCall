import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="main-content">
            <div className="section">
                <div className="section-header">
                <h1>Profile</h1>
                    <div className="section-header-breadcrumb">
                        <div className="breadcrumb-item active"><Link to='/'>Dashboard</Link></div>
                        <div className="breadcrumb-item">Profile</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
