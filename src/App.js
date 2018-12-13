import React, { Component } from 'react';
import Brand from './components/brand';
import Input from './components/input';
import Output from './components/output';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  state = {
    age: [],
    gender: [],
    weight: [],
    height: [
      { feet: '', inches: '' }
    ],
    activityLevel: [],
    goal: [],
    macros: [
      { protein: '', carbs: '', fats: '' }
    ]
  }

  render() {
    return (
      <div id="main-body">
        <Brand />
        <Input />
        <Output />
        <Footer />
      </div>
    );
  }
}

export default App;
