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

  passAgeInputToState = (age) => {
    let x = age;
    this.setState({ age: x });
  }
  passGenderInputToState = (gender) => {
    let x = gender;
    this.setState({ gender: x });
  }
  passWeightInputToState = (weight) => {
    let x = weight;
    this.setState({ weight: x });
  }
  passHeightFeetInputToState = (feet) => {
    let x = feet;
    let currentInches = this.state.height[0].inches;
    this.setState({ height: [{ feet: x, inches: currentInches }] });
  }
  passHeightInchesInputToState = (inches) => {
    let x = inches;
    let currentFeet = this.state.height[0].feet;
    this.setState({ height: [{ feet: currentFeet, inches: x }] });
  }

  render() {
    return (
      <div id="main-body">
        <Brand />
        <Input
          age={this.passAgeInputToState}
          gender={this.passGenderInputToState}
          weight={this.passWeightInputToState}
          heightFeet={this.passHeightFeetInputToState}
          heightInches={this.passHeightInchesInputToState}/>
        <Output
          age={this.state.age}
          gender={this.state.gender}
          weight={this.state.weight}
          heightFeet={this.state.height[0].feet}
          heightInches={this.state.height[0].inches}
          activityLevel={this.state.activityLevel}
          goal={this.state.goal}
          protein={this.state.protein}
          carbs={this.state.carbs}
          fats={this.state.fats} />
        <Footer />
      </div>
    );
  }
}

export default App;
