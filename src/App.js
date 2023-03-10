import './App.css';
import React, { Component } from 'react';
import HeaderSection from './components/HeaderSection';
import PersonalInfo from './components/PersonalInfo';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className='App'>
        <HeaderSection />
        <div className='main-section'>
          <PersonalInfo />
        </div> 
      </div>
    );
  }
}
  

export default App;
