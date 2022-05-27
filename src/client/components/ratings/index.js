import React from 'react';
import './index.css';
import RatingsStars from './ratings-stars';

export default function Ratings() {
  return <div className="ratings">
    <RatingsStars />
    <RatingsStars />
    <RatingsStars />
    <RatingsStars />
    <RatingsStars />
  </div>;
}
