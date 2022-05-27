import { combineReducers } from 'redux';

function mergePricesWithCars(cars = [], prices = []) {
  return cars.map(car => car);
}

export function cars(state = [], action = {}) {
  switch(action.type) {
    default:
      return mergePricesWithCars(state);
  }
}

export function sortMethod(state, action) {
  if(action && action.payload && action.payload.property) {
    return { sortMethod: action.payload.property };
  }
  return { ...state };
}

export default combineReducers({ sortMethod, cars });
