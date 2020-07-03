import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import {
  loadRegions,
} from './actions';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
    </>
  );
}
