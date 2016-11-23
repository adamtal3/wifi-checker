// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    const { wifi, internet } = this.props;
    const state = (up) => (<span style={{color: up ? 'green' : 'red', fontWeight: 'bold'}}>
      {up ? 'up' : 'DOWN'}
    </span>);

    return (
      <div>
        <div className={styles.container}>
          <p>
            <label><strong>Internet State:</strong> {state(internet)}</label>
          </p>
          <p>
            <label><strong>Wifi State:</strong> {state(wifi)}</label>
          </p>
        </div>
      </div>
    );
  }
}
