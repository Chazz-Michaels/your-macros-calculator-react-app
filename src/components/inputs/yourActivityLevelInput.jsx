import React from 'react'

class YourActivityLevelInput extends React.Component {
  render () {
    return (
      <div id='your-activity-level-input' className='input-group'>
        <div className='input-header'>Select Your Activity Level</div>
        <select
          name='select-activity-level'
          defaultValue='default'>
          <option
            type='select'
            disabled='disabled'
            value='default'>Your Activity Level
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
    )
  }
}

export default YourActivityLevelInput;
