import React from 'react'
import YourAgeInput from './inputs/yourAgeInput'
import YourGenderInput from './inputs/yourGenderInput'
import YourWeightInput from './inputs/yourWeightInput'
import YourHeightInput from './inputs/yourHeightInput'
import YourActivityLevelInput from './inputs/yourActivityLevelInput'
import YourGoalInput from './inputs/yourGoalInput'
import YourMacroSplitInput from './inputs/yourMacroSplitInput'

class Input extends React.Component{

  passAgeInputToApp = (age) => {
    let x = age;
    this.props.age(x);
  }
  passGenderInputToApp = (gender) => {
    let x = gender;
    this.props.gender(x);
  }

  passWeightInputToApp = (weight) => {
    let x = weight;
    this.props.weight(x);
  }
  passHeightFeetInputToApp = (feet) => {
    let x = feet;
    this.props.heightFeet(x);
  }
  passHeightInchesInputToApp = (inches) => {
    let x = inches;
    this.props.heightInches(x);
  }
  passActivityLevelInputToApp = (activityLevel) => {
    let x = activityLevel;
    this.props.activityLevel(x);
  }
  passGoalInputToApp = (goal) => {
    let x = goal;
    this.props.goal(x);
  }
  passProteinInputToApp = (protein) => {
    let x = protein;
    this.props.protein(x);
  }
  passCarbsInputToApp = (carbs) => {
    let x = carbs;
    this.props.carbs(x);
  }
  passFatsInputToApp = (fats) => {
    let x = fats;
    this.props.fats(x);
  }

  render () {
    return (
      <div id='input-wrapper' className='center-me'>
        <YourAgeInput
          onHandleAgeInput={this.passAgeInputToApp} />

        <YourGenderInput
          onHandleGenderInput={this.passGenderInputToApp} />

        <YourWeightInput
          onHandleWeightInput={this.passWeightInputToApp} />

        <YourHeightInput
          onHandleHeightFeetInput={this.passHeightFeetInputToApp}
          onHandleHeightInchesInput={this.passHeightInchesInputToApp}/>

        <YourActivityLevelInput
          onHandleActivityLevelInput={this.passActivityLevelInputToApp}/>

        <YourGoalInput
          onHandleGoalInput={this.passGoalInputToApp}/>

        <YourMacroSplitInput
          onHandleProteinInput={this.passProteinInputToApp}
          onHandleCarbsInput={this.passCarbsInputToApp}
          onHandleFatsInput={this.passFatsInputToApp}/>
      </div>
    )
  }
}

export default Input
