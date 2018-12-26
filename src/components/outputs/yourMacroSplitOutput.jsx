import React from 'react'

class YourMacroSplitOutput extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='output-header'>Your Macro Split:</div>
          <div className='macro-group'>
            <div className='macro-header'>Protein (%)</div>
            <div>{this.props.protein}%</div>
          </div>

          <div className='macro-group'>
            <div className='macro-header'>Carbs (%)</div>
            <div>{this.props.carbs}%</div>
          </div>

          <div className='macro-group'>
            <div className='macro-header'>Fats (%)</div>
            <div>{this.props.fats}%</div>
          </div>
      </React.Fragment>
    )
  }
}

export default YourMacroSplitOutput;
