import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 4},
    {id: 2, name:'gold', price: 25},
    {id: 3, name:'rake', price: 10},
    {id: 4, name:'car', price: 1200},
    {id: 5, name:'falcon', price: 2000}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    default:
      return state
  }
}
