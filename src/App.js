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
    this.setState({ age: age })
  }
  passGenderInputToState = (gender) => {
    this.setState({ gender: gender })
  }
  passWeightInputToState = (weight) => {
    this.setState({ weight: weight })
  }

  render() {
    return (
      <div id="main-body">
        <Brand />
        <Input
          age={this.passAgeInputToState}
          gender={this.passGenderInputToState}
          weight={this.passWeightInputToState} />
        <Output
          age={this.state.age}
          gender={this.state.gender}
          weight={this.state.weight}
          heightFt={this.state.heightFt}
          heightIn={this.state.heightIn}
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
