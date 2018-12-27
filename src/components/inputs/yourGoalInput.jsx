import React from 'react'

class YourGoalInput extends React.Component {

  handleGoalInput = (e) => {
    let value = e.target.value;
    this.props.onHandleGoalInput(value);
  }

  render () {
    return (
      <div id='your-goal-input' className='input-group'>
        <div className='input-header'>Select Your Aesthetic Goal</div>
        <select
          name='select-goal'
          defaultValue='default'
          onChange={ this.handleGoalInput }>
          <option
            type='select'
            disabled='disabled'
            value='default'>
              Your Aesthetic Goal
          </option>
          <option
            type='select'
            name='bulkAggressive'
            value='Bulk (aggressive)'>
              Bulk (aggressive)
          </option>
          <option
            type='select'
            name='bulkNormal'
            value='Bulk (recommended)'>
              Bulk (recommended)
          </option>
          <option
            type='select'
            name='maintain'
            value='Maintain Current Physique'>
              Maintain Current Physique
          </option>
          <option
            type='select'
            name='cutNormal'
            value='Fat Loss (recommended)'>
              Fat Loss (recommended)
          </option>
          <option
            type='select'
            name='cutAggressive'
            value='Fat Loss (aggressive)'>
              Fat Loss (aggressive)
          </option>
        </select>
      </div>
    )
  }
}

export default YourGoalInput;
