import React from 'react'
import PropTypes from 'prop-types'
import './Feature.css'

const Feature = ({ iconSrc, title, description }) => {
  return (
    <div className="featureItem">
      <img src={iconSrc} alt={`${title} icon`} className="featureIcon" />
      <h3 className="featureItemTitle">{title}</h3>
      <p className="featureDescription">{description}</p>
    </div>
  )
}

Feature.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feature
