import React from 'react'
import YourGoalOutput from './outputs/yourGoalOutput'
import YourBMROutput from './outputs/yourBMROutput'
import YourGoalCaloriesOutput from './outputs/yourGoalCaloriesOutput'
import YourMacrosOutput from './outputs/yourMacrosOutput'

class Output extends React.Component{

  calculateBMR = () => {
    let _bmr;
    let gender = this.props.gender;
    let heightToInches = Number(this.props.heightFeet * 12) + Number(this.props.heightInches);
    if (gender === 'Male') {
      _bmr = 66 + (6.23 * this.props.weight) + (12.7 * heightToInches) - (6.8 * this.props.age);
    }else if (gender === 'Female') {
      _bmr = 655 + (4.35 * this.props.weight) + (4.7 * heightToInches) - (4.7 * this.props.age);
    }
    return Math.round(_bmr).toString();
  }
  calculateGoalCalories = (bmr) => {
    let x = Number(bmr);
    let lifestyle = this.props.activityLevel;
    let goal = this.props.goal;
    let tdeeCalories;
    let goalCalories;
    if (lifestyle === 'Sedentary (Litle or no exercise/ desk job)') {
        tdeeCalories = x * 1.2;
        if (goal === 'Bulk (aggressive)') { goalCalories = tdeeCalories + 500}
        if (goal === 'Bulk (recommended)') { goalCalories = tdeeCalories + 250}
        if (goal === 'Maintain Current Physique') { goalCalories = tdeeCalories}
        if (goal === 'Fat Loss (recommended)') { goalCalories = tdeeCalories - 250}
        if (goal === 'Fat Loss (aggressive)') { goalCalories = tdeeCalories - 500}
    } else if (lifestyle === 'Lightly Active (Sports 1-3 days per week)') {
        tdeeCalories = x * 1.375;
        if (goal === 'Bulk (aggressive)') { goalCalories = tdeeCalories + 500}
        if (goal === 'Bulk (recommended)') { goalCalories = tdeeCalories + 250}
        if (goal === 'Maintain Current Physique') { goalCalories = tdeeCalories}
        if (goal === 'Fat Loss (recommended)') { goalCalories = tdeeCalories - 250}
        if (goal === 'Fat Loss (aggressive)') { goalCalories = tdeeCalories - 500}
    } else if (lifestyle === 'Moderately Active (Sports 3-5 days/week)') {
        tdeeCalories = x * 1.55;
        if (goal === 'Bulk (aggressive)') { goalCalories = tdeeCalories + 500}
        if (goal === 'Bulk (recommended)') { goalCalories = tdeeCalories + 250}
        if (goal === 'Maintain Current Physique') { goalCalories = tdeeCalories}
        if (goal === 'Fat Loss (recommended)') { goalCalories = tdeeCalories - 250}
        if (goal === 'Fat Loss (aggressive)') { goalCalories = tdeeCalories - 500}
    } else if (lifestyle === 'Very Active (Sports 6-7 days/week)') {
        tdeeCalories = x * 1.725;
        if (goal === 'Bulk (aggressive)') { goalCalories = tdeeCalories + 500}
        if (goal === 'Bulk (recommended)') { goalCalories = tdeeCalories + 250}
        if (goal === 'Maintain Current Physique') { goalCalories = tdeeCalories}
        if (goal === 'Fat Loss (recommended)') { goalCalories = tdeeCalories - 250}
        if (goal === 'Fat Loss (aggressive)') { goalCalories = tdeeCalories - 500}
    } else if (lifestyle === 'Extremely Active (Physical job/ training 2x/day)') {
        tdeeCalories = x * 1.9;
        if (goal === 'Bulk (aggressive)') { goalCalories = tdeeCalories + 500}
        if (goal === 'Bulk (recommended)') { goalCalories = tdeeCalories + 250}
        if (goal === 'Maintain Current Physique') { goalCalories = tdeeCalories}
        if (goal === 'Fat Loss (recommended)') { goalCalories = tdeeCalories - 250}
        if (goal === 'Fat Loss (aggressive)') { goalCalories = tdeeCalories - 500}
    }
    return Math.round(goalCalories).toString();
  }
  calculateProtein = (goalCalories) => {
    let goalCal = Number(goalCalories);
    let p = Number(this.props.protein)/100;
    if (goalCal === 0 || isNaN(goalCal)) {
      return 0;
    } else {
      return Math.round((goalCal * p) / 4);
    }
  }
  calculateCarbs = (goalCalories) => {
    let goalCal = Number(goalCalories);
    let c = Number(this.props.carbs)/100;
    if (goalCal === 0 || isNaN(goalCal)) {
      return 0;
    } else {
      return Math.round((goalCal * c) / 4);
    }
  }
  calculateFats = (goalCalories) => {
    let goalCal = Number(goalCalories);
    let f = Number(this.props.fats)/100;
    if (goalCal === 0 || isNaN(goalCal)) {
      return 0;
    } else {
      return Math.round((goalCal * f) / 9);
    }
  }

  render () {
    let bmr = this.calculateBMR();
    let goalCalories = this.calculateGoalCalories(bmr);
    let gProtein = this.calculateProtein(goalCalories);
    let gCarbs = this.calculateCarbs(goalCalories);
    let gFats = this.calculateFats(goalCalories);
    return (
      <React.Fragment>
        <div id='output-wrapper' className='center-me'>
          <YourGoalOutput
            goal={this.props.goal} />
          <YourBMROutput
            age={this.props.age}
            bmr={bmr}
            gender={this.props.gender}
            heightFeet={this.props.heightFeet}
            heightInches={this.props.heightInches}
            weight={this.props.weight} />
          <YourGoalCaloriesOutput
            goalCalories={goalCalories} />
          <YourMacrosOutput
            protein={gProtein}
            carbs={gCarbs}
            fats={gFats} />
        </div>
      </React.Fragment>
    )
  }
}

export default Output
