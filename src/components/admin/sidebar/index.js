
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    state = {
        isLoggedIn: false
    };
    render() {
        return (
            <nav className="navbar-custom-menu navbar navbar-expand-lg m-0">
                <div className="sidebar-toggle-icon" id="sidebarCollapse">
                    sidebar toggle<span></span>
                </div>
                <div className="d-flex flex-grow-1">
                    <ul className="navbar-nav flex-row align-items-center ml-auto">

                        <li className="nav-item dropdown user-menu">
                            <Link className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
                                <img src="assets/dist/img/user2-160x160.png" alt="" />
                                <i className="typcn typcn-user-add-outline"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" >
                                <div className="dropdown-header d-sm-none">
                                    <Link href="#" className="header-arrow"><i className="icon ion-md-arrow-back"></i></Link>
                                </div>

                                {/* <Link to="/" className="dropdown-item"><i className="typcn typcn-user-outline"></i> My Profile</Link>
                                        <Link to="/" className="dropdown-item"><i className="typcn typcn-edit"></i> Edit Profile</Link>
                                        <Link to="/" className="dropdown-item"><i className="typcn typcn-arrow-shuffle"></i> Activity Logs</Link>
                                        <Link to="/" className="dropdown-item"><i className="typcn typcn-cog-outline"></i> Account Settings</Link> */}
                                <Link to="/auth/logout" className="dropdown-item"><i className="typcn typcn-key-outline"></i> Sign Out</Link>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}
