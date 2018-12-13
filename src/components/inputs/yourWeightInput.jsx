import React from 'react'

class YourWeightInput extends React.Component {
  render () {
    return (
      <div id='your-weight-input' className='input-group'>
        <div className='input-header'>Enter Your Weight (lbs):</div>
        <input name='weight' placeholder='Your weight' />
      </div>
    )
  }
}

export default YourWeightInput;
