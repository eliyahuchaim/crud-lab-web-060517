import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  constructor(props){
    super(props)
  }


  render() {
  const restaurantJSX = this.props.store.getState().restaurants.map((restaurant, index) => {
    return <Restaurant key={index} restaurant={restaurant} id={restaurant.id} deleteRestaurant={this.handleDelete} store={this.props.store}  />
  })
    return(
      <ul>
        {restaurantJSX}
      </ul>
    );
  }
};

export default Restaurants;
