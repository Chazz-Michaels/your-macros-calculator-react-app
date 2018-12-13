import React, { Component } from 'react';
import Brand from './components/brand';
import Input from './components/input';
import Output from './components/output';
import Footer from './components/footer';
import './App.css';

class App extends Component {
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
