import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MasterLayout from '../layouts/masterlayouts'
import HomePage from '../containers/HomePage/HomePage'

class App extends Component{
  render(){
    return (
      <MasterLayout>
        <HomePage/>
      </MasterLayout>
    );
  }
}

export default App;
