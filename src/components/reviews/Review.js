import React, { Component } from 'react';

class Review extends Component {


  handleDelete = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.id,
      review: this.props.review
    })
  }




  render() {



    return (
      <li>
      {this.props.review.text}
      <button onClick={this.handleDelete} >
        Delete Review
      </button>
      </li>
    );
  }
};

export default Review;
