import React from 'react';
import PropTypes from 'prop-types';
import Featured from './Featured'

const NailPolishCard = ({nailPolish, toggleFeatured}) => {
  return (
    <div className='ui card'>
      <div className='image'>
        <span className='ui green ribbon label'>${nailPolish.price} {nailPolish.price < 9 && 'stock'}</span>
        <Featured
          featured={nailPolish.featured}
          toggleFeatured={toggleFeatured}
          polishId={nailPolish._id}
        />
        <img
          src={nailPolish.thumbnail}
          alt='game Covei'
        />
      </div>
      <div className='content'>
        <a className='header'>
          {nailPolish.name}
        </a>
        <div className='meta'>
          <i className='icon check circle green'/>{nailPolish.stock}&nbsp;
        </div>
      </div>
    </div>
  )
}

export default NailPolishCard

NailPolishCard.propTypes = {
  nailPolish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }),
  toggleFeatured: PropTypes.func.isRequired
}
