import React from 'react'

class YourGoalCaloriesOutput extends React.Component {
  render () {
    return (
      <div className='output-group'>
        <div className='output-header'>Your Goal Calories:</div>
        <div className='divider'></div>
        <div className='output-value'>{isNaN(this.props.goalCalories) ? 0 : this.props.goalCalories}</div>
      </div>
    )
  }
}

export default YourGoalCaloriesOutput;
