import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component{
  render () {
    return (
      <div id='footer-wrapper' className='center-me'>
        <div id='social-media-icons'>
          <a><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a><i className="fa fa-github" aria-hidden="true"></i></a>
          <div id='signature'>Designed by Michael Chase | 2019 &copy;</div>
        </div>
      </div>
    )
  }
}

export default Footer
