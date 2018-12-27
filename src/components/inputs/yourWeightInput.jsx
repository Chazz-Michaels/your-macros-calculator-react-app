import React from 'react'

class YourWeightInput extends React.Component {

  handleWeightInput = (e) => {
    let value = Math.floor(e.target.value);
    if (isNaN(value)) {
      console.log('Error: Your weight is not a number');
    } else {
      this.props.onHandleWeightInput(value);
    }
  }

  render () {
    return (
      <div id='your-weight-input' className='input-group'>
        <div className='input-header'>Enter Your Weight (lbs):</div>
        <div className='divider'></div>
        <input
          name='weight'
          placeholder='Your weight'
          onChange={ this.handleWeightInput }/>
      </div>
    )
  }
}

export default YourWeightInput;
