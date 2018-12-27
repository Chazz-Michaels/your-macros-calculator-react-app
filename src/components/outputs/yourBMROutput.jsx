import React from 'react'

class YourBMROutput extends React.Component {

  render () {
    return (
      <div className='output-group'>
        <div className='output-header'>Your Basal Metabolic Rate:</div>
        <div className='divider'></div>
        <div className='output-value'>{isNaN(this.props.bmr) ? 0 : this.props.bmr}</div>
      </div>
    )
  }
}

export default YourBMROutput;
