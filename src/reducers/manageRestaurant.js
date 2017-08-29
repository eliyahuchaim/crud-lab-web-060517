
import cuid from 'cuid';
// export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {text: action.restaurant, id: cuid()}
        return {restaurants: state.restaurants.concat(restaurant), reviews: state.reviews}
        break;
    case 'DELETE_RESTAURANT':
      const reviews = Object.assign([], state.reviews)
        return {restaurants: state.restaurants.filter(restaurant => {
          return restaurant.id !== action.id }), reviews: reviews}
        break;
    case 'ADD_REVIEW':
      return {restaurants: [...state.restaurants], reviews: [...state.reviews, {text: action.text, restaurantId: action.restaurantId, id: cuid()}]}
        break;
        case 'DELETE_REVIEW':
          return {restaurants: [...state.restaurants], reviews: state.reviews.filter(review => {
            return review.id !== action.review.id
          })}
    default:
      return state;
  }
}
