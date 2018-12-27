import React from 'react'

class YourGoalCaloriesOutput extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='output-header'>Your Goal Calories:</div>
        <div>{isNaN(this.props.goalCalories) ? 0 : this.props.goalCalories}</div>
      </React.Fragment>
    )
  }
}

export default YourGoalCaloriesOutput;
