import React from 'react'

class YourMacrosOutput extends React.Component {
  render () {
    return (
      <div className='output-group'>
        <div className='output-header'>Your Macros:</div>
        <div className='divider'></div>
        <div className='macro-group'>
          <div className='macro-header'>Protein:</div>
          <div className='output-value'>{this.props.protein}g</div>
        </div>

        <div className='macro-group'>
          <div className='macro-header'>Carbs:</div>
          <div className='output-value'>{this.props.carbs}g</div>
        </div>

        <div className='macro-group'>
          <div className='macro-header'>Fats:</div>
          <div className='output-value'>{this.props.fats}g</div>
        </div>
      </div>
    )
  }
}

export default YourMacrosOutput;
