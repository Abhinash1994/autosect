import React, { Component } from 'react';
import './header.css'
// import logo from './logo-light.png'
import { Link } from 'react-router-dom';

import API from '../../api';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { userdata: '' ,email: 'pandit.bechu@gmail.com'}
    }
    componentDidMount() {
        let email = this.state.email
        new API().getHttpClient().get('/user/getUserByEmailId?email=' + email).then((res) => {
            this.setState({ userdata: res.data })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        let username = this.state.userdata.data
        return (

            <nav className="sidebar sidebar-bunker">
                <div className="sidebar-header">
                    {/* <img src={logo} className="" alt="Logo" /> */}
                </div>
                <div className="profile-element d-flex align-items-center flex-shrink-0">

                    <div className="profile-text">
                       {username ? <h6 className="m-0">{username.name}</h6>:<span></span>} 
                    </div>
                </div>
                <div className="sidebar-body">
                    <nav className="sidebar-nav">
                        <ul className="metismenu">
                            <li className="nav-label">Main Menu</li>




                            <li className="mm-active">
                            <Link to="/admin"> <i className="typcn typcn-messages mr-2"></i>Dashboard</Link>
                            </li>


                            <li>
                                <Link to="/admin/target"> <i className="typcn typcn-messages mr-2"></i>ArticlePost</Link>
                            </li>




                        </ul>
                    </nav>
                </div>
            </nav>




        );
    }
};

export default (Header);