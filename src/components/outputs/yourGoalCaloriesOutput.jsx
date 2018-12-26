import React from 'react'

class YourGoalCaloriesOutput extends React.Component {
  render () {
    return (
      <div className='output-header'>Your Goal Calories: {this.props.weight}</div>
    )
  }
}

export default YourGoalCaloriesOutput;
