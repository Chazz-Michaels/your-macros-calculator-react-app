import React from 'react'

class YourGoalOutput extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='output-header'>Your Aesthetic Goal:</div>
        <div>{this.props.goal}</div>
      </React.Fragment>
    )
  }
}

export default YourGoalOutput;
