// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as HomeActions from '../actions/home';
import ping from 'ping';

const DELAY = 3000;

class HomePage extends Component {
  componentWillMount() {
    const self = this;

    // Run ping
    window.setInterval(() => {
      ping.sys.probe('10.100.102.1', function(isAlive){
          if (isAlive !== self.props.wifi) {
            if (isAlive) {
              self.props.wifiUp();
            }
            else {
              self.props.wifiDown();
            }
          }
      }, { timeout: 300 });
    }, DELAY);

    window.setTimeout(() => {
      window.setInterval(() => {
        ping.sys.probe('www.google.com', function(isAlive){
          if (isAlive !== self.props.internet) {
            if (isAlive) {
              self.props.internetUp();
            }
            else {
              self.props.internetDown();
            }
          }
      }, { timeout: 300 });
      }, DELAY);
    }, DELAY/2);
  }
  
  render() {
    return (
      <Home {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return state.get('home').toJS();
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);