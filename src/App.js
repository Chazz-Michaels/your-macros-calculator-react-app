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
  passActivityLevelInputToState = (activityLevel) => {
    let x = activityLevel;
    this.setState({ activityLevel: x });
  }
  passGoalInputToState = (goal) => {
    let x = goal;
    this.setState({ goal: x });
  }
  passProteinInputToState = (protein) => {
    let x = protein;
    let currentCarbs = this.state.macros[0].carbs;
    let currentFats = this.state.macros[0].fats;
    this.setState({ macros: [{ protein: x,
                               carbs: currentCarbs,
                               fats: currentFats }] });
  }
  passCarbsInputToState = (carbs) => {
    let x = carbs;
    let currentProtein = this.state.macros[0].protein;
    let currentFats = this.state.macros[0].fats;
    this.setState({ macros: [{ protein: currentProtein,
                               carbs: x,
                               fats: currentFats }] });
  }
  passFatsInputToState = (fats) => {
    let x = fats;
    let currentProtein = this.state.macros[0].protein;
    let currentCarbs = this.state.macros[0].carbs;
    this.setState({ macros: [{ protein: currentProtein,
                               carbs: currentCarbs,
                               fats: x }] });
  }
  calculateBMR = () => {
    let bmr;
    let gender = this.props.gender;
    let heightToInches = (this.props.heightFeet * 12) + (this.props.heightInches);
    if (gender === 'male') {
      bmr = 66 + (6.23 * this.props.weight) + (12.7 * heightToInches) - (6.8 * this.props.age);
    }else if (gender === 'female') {
      bmr = 655 + (4.35 * this.props.weight) + (4.7 * heightToInches) - (4.7 * this.props.age);
    }
    return bmr;
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
          heightInches={this.passHeightInchesInputToState}
          activityLevel={this.passActivityLevelInputToState}
          goal={this.passGoalInputToState}
          protein={this.passProteinInputToState}
          carbs={this.passCarbsInputToState}
          fats={this.passFatsInputToState}/>
        <Output
          age={this.state.age}
          gender={this.state.gender}
          weight={this.state.weight}
          heightFeet={this.state.height[0].feet}
          heightInches={this.state.height[0].inches}
          activityLevel={this.state.activityLevel}
          goal={this.state.goal}
          protein={this.state.macros[0].protein}
          carbs={this.state.macros[0].carbs}
          fats={this.state.macros[0].fats} />
        <Footer />
      </div>
    );
  }
}

export default App;
