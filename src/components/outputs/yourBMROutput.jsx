import React from 'react'

class YourBMROutput extends React.Component {

  calculateBMR = () => {
    let gender = this.props.gender;
    let heightToInches = (this.props.heightFeet * 12) + (this.props.heightInches);
    if (gender === 'male') {
      let bmr = 66 + (6.23 * this.props.weight) + (12.7 * heightToInches) - (6.8 * this.props.age);
    }else if (gender === 'female') {
      let bmr = 655 + (4.35 * this.props.weight) + (4.7 * heightToInches) - (4.7 * this.props.age);
    }
    return bmr;
  }

  render () {
    return (
      <React.Fragment>
        <div className='output-header'>Your Basal Metabolic Rate:</div>
        <div>{this.calculateBMR()}</div>
      </React.Fragment>
    )
  }
}

export default YourBMROutput;
