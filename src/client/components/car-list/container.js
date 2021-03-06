import { connect } from 'react-redux';
import CarList from './index.js';

const mapStateToProps = state => {
  return {
    cars: state.cars,
    sortMethod: state.sortMethod.sortMethod
  }
};

const mapDispatchToProps = dispatch => ({
  setPriceOffers: prices => dispatch(prices)
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
