import React from 'react'

class YourMacrosOutput extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='output-header'>Your Macros:</div>
          <div className='macro-group'>
            <div className='macro-header'>Protein:</div>
            <div>{this.props.protein}g</div>
          </div>

          <div className='macro-group'>
            <div className='macro-header'>Carbs:</div>
            <div>{this.props.carbs}g</div>
          </div>

          <div className='macro-group'>
            <div className='macro-header'>Fats:</div>
            <div>{this.props.fats}g</div>
          </div>
      </React.Fragment>
    )
  }
}

export default YourMacrosOutput;
