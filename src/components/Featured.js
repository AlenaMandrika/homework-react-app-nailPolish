import React from 'react';
import PropTypes from 'prop-types'

const Featured = ({featured, toggleFeatured, polishId}) => {
  return (
    <span>
      {featured ? (
        <a onClick={() => toggleFeatured (polishId)} className='ui right yellow corner label'>
          <i className='star outline icon'/>
        </a>
      ) : (
        <a onClick={() => toggleFeatured (polishId)} className='ui right corner label'>
          <i className='star outline icon'/>
        </a>
      )}
    </span>
  )
}

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  polishId: PropTypes.number.isRequired
}

export default Featured
