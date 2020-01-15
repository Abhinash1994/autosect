import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard';
import Header from './header';
import Footer from './footer'
import SideBar from './sidebar';
import Target from '../admin/target'
export default class Main extends Component {
  render() {
    const { match } = this.props;
    return (
      <main>
        <div className="wrapper">
          <Header />
          <div className="content-wrapper">
            <div className="main-content">
              <SideBar />
              <Switch>
                <Route exact path={[`${match.path}/dashboard`, `${match.path}`]} component={Dashboard} />
                <Route exact path={`${match.path}/target`} component={Target} />
              </Switch>
              <Footer />
            </div>
          </div>

        </div>


      </main>
    );
  }
}