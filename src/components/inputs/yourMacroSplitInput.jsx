import React from 'react'
import OptionsZeroTo100 from './optionsZeroTo100.jsx'

class YourMacroSplitInput extends React.Component {
  render () {
    return (
      <div id='your-macro-split-input' className='input-group'>
        <div className='input-header'>Select Your Macro Split</div>

          <div className='macro-group'>
            <div className='macro-header'>Protein (%)</div>
            <select
              name='select-protein-percent'
              defaultValue='default'>
              <option
                type='select'
                disabled='disabled'
                value='default'>Protein
              </option>
              <OptionsZeroTo100 />
            </select>
          </div>

          <div className='macro-group'>
            <div className='macro-header'>Carbs (%)</div>
            <select
              name='select-protein-percent'
              defaultValue='default'>
              <option
                type='select'
                disabled='disabled'
                value='default'>Carbs
              </option>
              <OptionsZeroTo100 />
            </select>
          </div>

          <div className='macro-group'>
            <div className='macro-header'>Fats (%)</div>
            <select
              name='select-protein-percent'
              defaultValue='default'>
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
