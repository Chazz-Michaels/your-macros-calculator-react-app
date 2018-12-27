import React from 'react'

class YourHeightInput extends React.Component {

  handleHeightFeetInput = (e) => {
    let value = e.target.value;
    this.props.onHandleHeightFeetInput(value);
  }

  handleHeightInchesInput = (e) => {
    let value = e.target.value;
    this.props.onHandleHeightInchesInput(value);
  }

  render () {
    return (
      <div id='your-height-input' className='input-group'>
        <div className='input-header'>Select Your Height</div>
        <div className='divider'></div>
          <select
            name='select-height-feet'
            defaultValue='default'
            onChange={ this.handleHeightFeetInput }>
            <option
              type='select'
              disabled='disabled'
              value='default'>Feet
            </option>
            <option
              type='select'
              value='1'>1
            </option>
            <option
              type='select'
              value='2'>2
            </option>
            <option
              type='select'
              value='3'>3
            </option>
            <option
              type='select'
              value='4'>4
            </option>
            <option
              type='select'
              value='5'>5
            </option>
            <option
              type='select'
              value='6'>6
            </option>
            <option
              type='select'
              value='7'>7
            </option>
            <option
              type='select'
              value='8'>8
            </option>
          </select>

          <select
            name='select-height-inches'
            defaultValue='default'
            onChange={ this.handleHeightInchesInput }>
            <option
              type='select'
              disabled='disabled'
              value='default'>Inches
            </option>
            <option
              type='select'
              value='0'>0
            </option>
            <option
              type='select'
              value='1'>1
            </option>
            <option
              type='select'
              value='2'>2
            </option>
            <option
              type='select'
              value='3'>3
            </option>
            <option
              type='select'
              value='4'>4
            </option>
            <option
              type='select'
              value='5'>5
            </option>
            <option
              type='select'
              value='6'>6
            </option>
            <option
              type='select'
              value='7'>7
            </option>
            <option
              type='select'
              value='8'>8
            </option>
            <option
              type='select'
              value='9'>9
            </option>
            <option
              type='select'
              value='10'>10
            </option>
            <option
              type='select'
              value='11'>11
            </option>
          </select>
      </div>
    )
  }
}

export default YourHeightInput;
