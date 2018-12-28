import React from 'react'
import OptionsZeroTo100 from './optionsZeroTo100.jsx'

class YourMacroSplitInput extends React.Component {

  handleProteinInput = (e) => {
    let value = e.target.value;
    this.props.onHandleProteinInput(value);
  }
  handleCarbsInput = (e) => {
    let value = e.target.value;
    this.props.onHandleCarbsInput(value);
  }
  handleFatsInput = (e) => {
    let value = e.target.value;
    this.props.onHandleFatsInput(value);
  }

  render () {
    return (
      <div id='your-macro-split-input' className='input-group'>
        <div className='input-header'>Select Your Macro Split</div>
        <div className='divider'></div>

          <div className='macro-group'>
            <div className='macro-header extra-space-under'>Protein (%)</div>
            <select
              name='select-protein-percent'
              defaultValue='default'
              onChange={ this.handleProteinInput }>
              <option
                type='select'
                disabled='disabled'
                value='default'>Protein
              </option>
              <OptionsZeroTo100 />
            </select>
          </div>

          <div className='macro-group'>
            <div className='macro-header extra-space-under'>Carbs (%)</div>
            <select
              name='select-protein-percent'
              defaultValue='default'
              onChange={ this.handleCarbsInput }>
              <option
                type='select'
                disabled='disabled'
                value='default'>Carbs
              </option>
              <OptionsZeroTo100 />
            </select>
          </div>

          <div className='macro-group'>
            <div className='macro-header extra-space-under'>Fats (%)</div>
            <select
              name='select-protein-percent'
              defaultValue='default'
              onChange={ this.handleFatsInput }>
              <option
                type='select'
                disabled='disabled'
                value='default'>Fats
              </option>
              <OptionsZeroTo100 />
            </select>
          </div>
      </div>
    )
  }
}

export default YourMacroSplitInput;
