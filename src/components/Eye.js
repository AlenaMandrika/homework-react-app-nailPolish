import React from 'react';
import PropTypes from 'prop-types'

const Eye = ({hidden, toggleFeaturedEye, polishId}) => {
  return (
    <span>
      {hidden ? (
        <a onClick={() => toggleFeaturedEye (polishId)} className='ui  bottom right attached yellow label'>
          <i className='eye icon'/>
        </a>
      ) : (
        <a onClick={() => toggleFeaturedEye (polishId)} className='ui  bottom right attached label'>
          <i className='eye icon'/>
        </a>
      )}
    </span>
  )
}

Eye.propTypes = {
  hidden: PropTypes.bool.isRequired,
  toggleFeaturedEye: PropTypes.func.isRequired,
  polishId: PropTypes.number.isRequired
}

export default Eye
