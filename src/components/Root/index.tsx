import React from 'react';
import { Marker, Polyline } from 'react-native-maps';
import * as S from './styles';
import { useGeocode } from './hooks/useGeocode';
import Map from '../Map/';
import Inputs from '../Inputs';

export default function Root() {
  const { getLocationFromAddress, locations } = useGeocode();

  return (
    <S.SafeAreaView>
      <Inputs length={locations.length} getLocationFromAddress={getLocationFromAddress} />
      <Map>
        {locations.map((location, index) => (
          <Marker key={index} coordinate={location} />
        ))}
        <Polyline
          coordinates={locations}
          strokeColor='#FF0000'
          strokeColors={['#FF0000']}
          strokeWidth={6}
        />
      </Map>
    </S.SafeAreaView>
  );
}
