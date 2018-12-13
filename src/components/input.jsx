import React from 'react'
import PropTypes from 'prop-types'
import YourAgeInput from './inputs/yourAgeInput'

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

        <div id='your-gender-input' className='input-group'>
          <div className='input-header'>Select Your Gender</div>
          <select name='select-gender'>
            <option
              type='select'
              disabled='disabled'
              selected>Your Gender
            </option>
            <option
              type='select'
              name='male'
              value='Male'>Male
            </option>
            <option
              type='select'
              name='female'
              value='Female'>Female
            </option>
          </select>
        </div>

        <div id='your-weight-input' className='input-group'>
          <div className='input-header'>Enter Your Weight:</div>
          <input name='weight' placeholder='Your current weight' />
        </div>

        <div id='your-height-input' className='input-group'>
          <div className='input-header'>Select Your Height</div>
            <select name='select-height-feet'>
              <option
                type='select'
                disabled='disabled'
                selected>Feet
              </option>
              <option
                type='select'
                value='1'>1
              </option>
              <option
                type='select'
                value='2'>2
              </option>
              <option
                type='select'
                value='3'>3
              </option>
              <option
                type='select'
                value='4'>4
              </option>
              <option
                type='select'
                value='5'>5
              </option>
              <option
                type='select'
                value='6'>6
              </option>
              <option
                type='select'
                value='7'>7
              </option>
              <option
                type='select'
                value='8'>8
              </option>
            </select>
            <select name='select-height-inches'>
              <option
                type='select'
                disabled='disabled'
                selected>Inches
              </option>
              <option
                type='select'
                value='0'>0
              </option>
              <option
                type='select'
                value='1'>1
              </option>
              <option
                type='select'
                value='2'>2
              </option>
              <option
                type='select'
                value='3'>3
              </option>
              <option
                type='select'
                value='4'>4
              </option>
              <option
                type='select'
                value='5'>5
              </option>
              <option
                type='select'
                value='6'>6
              </option>
              <option
                type='select'
                value='7'>7
              </option>
              <option
                type='select'
                value='8'>8
              </option>
              <option
                type='select'
                value='9'>9
              </option>
              <option
                type='select'
                value='10'>10
              </option>
              <option
                type='select'
                value='11'>11
              </option>
            </select>
        </div>

        <div id='your-activity-level-input' className='input-group'>
          <div className='input-header'>Select Your Activity Level</div>
          <select name='select-activity-level'>
            <option
              type='select'
              disabled='disabled'
              selected>Your Activity Level
            </option>
            <option
              type='select'
              name='sedentary'
              value='sedentary'>Sedentary (Litle or no exercise/ desk job)
            </option>
            <option
              type='select'
              name='lightlyActive'
              value='lightlyActive'>Lightly Active (Sports 1-3 days per week)
            </option>
            <option
              type='select'
              name='moderatelyActive'
              value='moderatelyActive'>Moderately Active (Sports 3-5 days/week)
            </option>
            <option
              type='select'
              name='veryActive'
              value='veryActive'>Very Active (Sports 6-7 days/week)
            </option>
            <option
              type='select'
              name='extremelyActive'
              value='extremelyActive'>Extremely Active (Physical job/ training 2x/day)
            </option>
          </select>
        </div>

        <div id='your-goal-input' className='input-group'>
          <div className='input-header'>Select Your Aesthetic Goal</div>
          <select name='select-goal'>
            <option
              type='select'
              disabled='disabled'
              selected>Your Aesthetic Goal
            </option>
            <option
              type='select'
              name='bulkAggressive'
              value='bulkAggressive'>Bulk (aggresive)
            </option>
            <option
              type='select'
              name='bulkNormal'
              value='bulkNormal'>Bulk (recommended)
            </option>
            <option
              type='select'
              name='maintain'
              value='maintain'>Maintain Current Physique
            </option>
            <option
              type='select'
              name='cutNormal'
              value='cutNormal'>Fat Loss (recommended)
            </option>
            <option
              type='select'
              name='cutAggressive'
              value='cutAggressive'>Fat Loss (aggressive)
            </option>
          </select>
        </div>

      </div>
    )
  }
}

export default Input
