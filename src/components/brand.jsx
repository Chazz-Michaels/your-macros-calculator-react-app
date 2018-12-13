import React from 'react'
import PropTypes from 'prop-types'

class Brand extends React.Component {
  render () {
    return (
      <div id='flex-brand'>
        <div id='brand-wrapper' className='center-me'>
          <div id='brand'>Your Macros</div>
          <div id='motto'>
            A quick way to figure out the correct macronutrients
            you need to achieve your fitness goals.
          </div>
        </div>
      </div>
    )
  }
}

export default Brand;
