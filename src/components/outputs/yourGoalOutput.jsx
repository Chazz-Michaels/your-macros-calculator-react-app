import React from 'react'

class YourGoalOutput extends React.Component {
  render () {
    return (
      <div className='output-group'>
        <div className='output-header'>Your Aesthetic Goal:</div>
        <div className='divider'></div>
        <div className='output-value'>{this.props.goal}</div>
      </div>
    )
  }
}

export default YourGoalOutput;
