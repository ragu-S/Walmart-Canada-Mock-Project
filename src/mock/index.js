import Availability from './services/availability.json';
import Cars from './services/cars.json';
import Ratings from "./services/ratings.json";

export function getAvailability(id) {
  return Availability[id];
}

export function getRating(id) {
  return Ratings[id];
}

export function getCars() {
  return Cars.map(car => ({
    ...car,
    availability: getAvailability(car.id),
    rating: getRating(car.id)
  }));
}
