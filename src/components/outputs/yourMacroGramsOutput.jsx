import React from 'react'

class YourMacroGramsOutput extends React.Component {
  render () {
    return (
      <div>
        <div className='output-header'>Your Daily Protein: {this.props.protein}</div>
        <div className='output-header'>Your Daily Carbs: {this.props.carbs}</div>
        <div className='output-header'>Your Daily Fats: {this.props.fats}</div>
      </div>
    )
  }
}

export default YourMacroGramsOutput;
