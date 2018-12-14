import React from 'react'
import YourAgeInput from './inputs/yourAgeInput'
import YourGenderInput from './inputs/yourGenderInput'
import YourWeightInput from './inputs/yourWeightInput'
import YourHeightInput from './inputs/yourHeightInput'
import YourActivityLevelInput from './inputs/yourActivityLevelInput'
import YourGoalInput from './inputs/yourGoal'
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
          onHAndleActivityLevelInput={this.passActivityLevelInputToApp}/>

        <YourGoalInput />

        <YourMacroSplitInput />

      </div>
    )
  }
}

export default Input
