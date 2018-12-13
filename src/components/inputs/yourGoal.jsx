import React from 'react'

class YourGoal extends React.Component {
  render () {
    return (
      <div id='your-goal-input' className='input-group'>
        <div className='input-header'>Select Your Aesthetic Goal</div>
        <select
          name='select-goal'
          defaultValue='default'>
          <option
            type='select'
            disabled='disabled'
            value='default'>Your Aesthetic Goal
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
    )
  }
}

export default YourGoal;
