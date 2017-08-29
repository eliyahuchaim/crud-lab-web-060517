import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
    constructor(props){
      super(props)
    }


  render() {
    const reviews = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId == this.props.restaurantId
    })
    const reviewsJSX = reviews.map((review, index) => {
      return <Review review={review} key={index} id={review.id} restaurantId={review.restaurantId} store={this.props.store}/>
    })

    return (
      <ul>
        {reviewsJSX}
      </ul>
    );
  }
};

export default Reviews;
