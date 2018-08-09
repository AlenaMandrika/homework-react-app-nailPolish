import React, { Component } from 'react';
import './App.css';

// import _sortBy from 'lodash/sortBy'
import _orderBy from 'lodash/orderBy'

import NailPolishList from './components/NailPolishList'

import nailPolishBrawn from './assets/images/nailPolish.jpg'
import nailPolishBurgundy from './assets/images/nailPolish1.jpg'
import nailPolishScarlet from './assets/images/nailPolish2.jpg'

const nailPolishes = [
  {
    _id: 1,
    featured: false,
    name: 'nail polish brawn',
    thumbnail: nailPolishBrawn,
    price: 9,
    stock: 'in stock'
  },
  {
    _id: 2,
    featured: false,
    name: 'nail polish burgundy',
    thumbnail: nailPolishBurgundy,
    price: 7,
    stock: 'in stock'
  },
  {
    _id: 3,
    featured: true,
    name: 'nail polish scarlet',
    thumbnail: nailPolishScarlet,
    price: 5,
    stock: 'in stock'
  }
]

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      nailPolishes: []
    }

    this.toggleFeatured = this.toggleFeatured.bind(this)
  }

  componentDidMount () {
    this.setState ({
      // nailPolishes: _orderBy (nailPolishes, ['featured','name'], ['desc', 'asc'])
      nailPolishes: this.sortNailPolishes(nailPolishes)
    })
  }

  sortNailPolishes (nailPolishes) {
    return _orderBy (nailPolishes, ['featured','name'], ['desc', 'asc'])
  }

  toggleFeatured (polishId) {
    const newNailPolishes = this.state.nailPolishes.map(nailPolish => {
      if (nailPolish._id === polishId) return {
        ...nailPolish,
        featured: !nailPolish.featured
      }
        return nailPolish
    })
    this.setState ({
      // nailPolishes: newNailPolishes
      nailPolishes: this.sortNailPolishes(newNailPolishes)
    })
  }

  render() {
    return (
      <div className='ui container'>
        <NailPolishList
          nailPolishes={this.state.nailPolishes}
          toggleFeatured={this.toggleFeatured}
        />
      </div>
    );
  }
}

export default App;
