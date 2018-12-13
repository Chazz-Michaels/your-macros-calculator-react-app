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

  render () {
    return (
      <div id='input-wrapper' className='center-me'>
        <YourAgeInput
          onHandleAgeInput={this.passAgeInputToApp} />

        <YourGenderInput />

        <YourWeightInput />

        <YourHeightInput />

        <YourActivityLevelInput />

        <YourGoalInput />

        <YourMacroSplitInput />

      </div>
    )
  }
}

export default Input
