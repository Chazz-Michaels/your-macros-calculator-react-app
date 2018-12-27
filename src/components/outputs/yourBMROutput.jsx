import React from 'react'

class YourBMROutput extends React.Component {

  render () {
    return (
      <React.Fragment>
        <div className='output-header'>Your Basal Metabolic Rate:</div>
        <div>{isNaN(this.props.bmr) ? 0 : this.props.bmr}</div>
      </React.Fragment>
    )
  }
}

export default YourBMROutput;
