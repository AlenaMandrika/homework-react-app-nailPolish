import React from 'react';
import PropTypes from 'prop-types';

import NailPolishCard from './NailPolishCard'

const NailPolishList = ({ nailPolishes, toggleFeatured, toggleFeaturedEye }) => {
  return (
    <div className='ui four cards'>
      {
        nailPolishes.length === 0 ? (
          <div className='ui icon green message'>
            <i className='icon thumbs up'/>
            <div className='content'>
              <div className='header'>There are no game in your store</div>
              <p>You should add some, don't you think?</p>
            </div>
          </div>
          ) : (
          nailPolishes.map(nailPolish => <NailPolishCard
            nailPolish={nailPolish}
            key={nailPolish._id}
            toggleFeatured={toggleFeatured}
            toggleFeaturedEye={toggleFeaturedEye}
          />)
        )
      }
    </div>
  )
}

NailPolishList.propTypes = {
  nailPolishes: PropTypes.arrayOf(PropTypes.object).isRequired
}

NailPolishList.defaultProps = {
  nailPolishes: []
}

export default NailPolishList
