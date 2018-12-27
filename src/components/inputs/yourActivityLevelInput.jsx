import React from 'react'

class YourActivityLevelInput extends React.Component {

  handleActivityLevelInput = (e) => {
    let value = e.target.value;
    this.props.onHandleActivityLevelInput(value);
  }

  render () {
    return (
      <div id='your-activity-level-input' className='input-group'>
        <div className='input-header'>Select Your Activity Level</div>
        <div className='divider'></div>
        <select
          name='select-activity-level'
          defaultValue='default'
          onChange={ this.handleActivityLevelInput }>
          <option
            type='select'
            disabled='disabled'
            value='default'>Your Activity Level
          </option>
          <option
            type='select'
            name='sedentary'
            value='Sedentary (Litle or no exercise/ desk job)'>
              Sedentary (Litle or no exercise/ desk job)
          </option>
          <option
            type='select'
            name='lightlyActive'
            value='Lightly Active (Sports 1-3 days per week)'>
              Lightly Active (Sports 1-3 days per week)
          </option>
          <option
            type='select'
            name='moderatelyActive'
            value='Moderately Active (Sports 3-5 days/week)'>
              Moderately Active (Sports 3-5 days/week)
          </option>
          <option
            type='select'
            name='veryActive'
            value='Very Active (Sports 6-7 days/week)'>
              Very Active (Sports 6-7 days/week)
          </option>
          <option
            type='select'
            name='extremelyActive'
            value='Extremely Active (Physical job/ training 2x/day)'>
              Extremely Active (Physical job/ training 2x/day)
          </option>
        </select>
      </div>
    )
  }
}

export default YourActivityLevelInput;
