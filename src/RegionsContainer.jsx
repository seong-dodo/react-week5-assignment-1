import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  changeRegionName,
  loadRestaurants,
} from '../redux/action';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, regionName } = useSelector((state) => ({
    regionName: state.regionName,
    regions: state.regions,
  }));

  const handleClick = ({ name }) => {
    dispatch(changeRegionName(name));
    dispatch(loadRestaurants());
  };

  return (
    <div>
      <Regions regions={regions} regionName={regionName} onClick={handleClick} />
    </div>
  );
}
