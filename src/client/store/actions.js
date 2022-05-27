/**
 * Action types
 */

export const SET_SORT_METHOD = 'SET_SORT_METHOD';
export const PRICE_OFFERS_LOADED = 'PRICE_OFFERS_LOADED';

/**
 * Supporting constants
 */

export const SortMethods = {
  AVAILABILITY: 'availability',
  NAME: 'name',
};

/**
 * Action creators
 */

export function setSortMethod(property) {
  return {
    type: SET_SORT_METHOD,
    payload: {
      property,
    },
  };
}

export function priceOffersLoadedAction(prices) {
  return {
    type: PRICE_OFFERS_LOADED
  }
}
