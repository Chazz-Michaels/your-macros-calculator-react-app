import React from 'react'

class YourGenderInput extends React.Component {

  handleGenderInput = (e) => {
    let value = e.target.value;
    this.props.onHandleGenderInput(value);
  }

  render () {
    return (
      <div id='your-gender-input' className='input-group'>
        <div className='input-header'>Select Your Gender</div>
        <select
          name='select-gender'
          defaultValue='default'
          onChange={ this.handleGenderInput }>
          <option
            type='select'
            value='default'
            disabled='disabled'>Your Gender
          </option>
          <option
            type='select'
            name='male'
            value='Male'>Male
          </option>
          <option
            type='select'
            name='female'
            value='Female'>Female
          </option>
        </select>
      </div>
    )
  }
}

export default YourGenderInput;
