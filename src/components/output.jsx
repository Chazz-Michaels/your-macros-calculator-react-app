import React from 'react'

class Output extends React.Component{
  render () {
    return (
      <div id='output-wrapper' className='center-me'>
        <div className='output-group'>Output goes here</div>
        <div className='output-header'>Your Age: {this.props.age}</div>
        <div className='output-header'>Your Gender: {this.props.gender}</div>
        <div className='output-header'>Your Weight: {this.props.weight}</div>
        <div className='output-header'>Your Height (Ft): {this.props.heightFeet}</div>
        <div className='output-header'>Your Height (In): {this.props.heightInches}</div>
        <div className='output-header'>Your Activity Level: {this.props.activityLevel}</div>
        <div className='output-header'>Your goal: {this.props.goal}</div>
        <div className='output-header'>Your Protein: {this.props.protein}</div>
        <div className='output-header'>Your Carbs: {this.props.carbs}</div>
        <div className='output-header'>Your Fats: {this.props.fats}</div>
      </div>
    )
  }
}

export default Output
