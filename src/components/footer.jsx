import React from 'react'

class Footer extends React.Component{
  render () {
    return (
      <div id='footer-wrapper' className='center-me'>
        <div id='social-media-icons'>
          <a
            href='https://www.linkedin.com/in/michael-chase-301859161/'
            target='_blank'
            rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
           </a>
          <a
            href='https://www.facebook.com/mike.chase.17'
            target='_blank'
            rel="noopener noreferrer">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href='https://www.instagram.com/mchase.fit/'
            target='_blank'
            rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            href='https://github.com/Chazz-Michaels'
            target='_blank'
            rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <div id='signature'>Designed by Michael Chase | 2019 &copy;</div>
        </div>
      </div>
    )
  }
}

export default Footer
