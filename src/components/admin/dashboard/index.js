import React, { Component } from 'react';
import './dashboard.css';



class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 breadcrumb breadcrumb-extra dashboard">
                        <i className="fas fa-home home-mr"></i>
        <span>Dashboard</span>
                    </div>
                </div>
                <div className="row state-overview">
                    <div className='col-lg-3 col-sm-6'>
                        <section className="panel">
                            <div className='symbol turquoise'>
                                <i className="fas fa-user "></i>
                            </div>
                            <div className='value'>
                                <h1>28</h1>
                                <p></p>
                            </div>
                        </section>
                    </div>

                    <div className='col-lg-3 col-sm-6'>
                        <section className="panel">
                            <div className='symbol red'>
                                <i className="fas fa-tags "></i>
                            </div>
                            <div className='value'>
                                <h1>2</h1>
                                <p></p>
                            </div>
                        </section>
                    </div>

                    <div className='col-lg-3 col-sm-6'>
                        <section className="panel">
                            <div className='symbol yellow'>
                                <i className="fas fa-shopping-cart "></i>
                            </div>
                            <div className='value'>
                                <h1>2</h1>
                                <p></p>
                            </div>
                        </section>
                    </div>

                    <div className='col-lg-3 col-sm-6'>
                        <section className="panel">
                            <div className='symbol blue'>
                                <i className="fas fa-chart-bar "></i>
                            </div>
                            <div className='value'>
                                <h1>2</h1>
                                <p></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Dashboard);