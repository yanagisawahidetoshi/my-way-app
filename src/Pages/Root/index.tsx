import React from 'react';
import { Marker, Polyline } from 'react-native-maps';
import * as S from './styles';
import MyTextInput from '../MyTextInput';
import { useGeocode } from './hooks/useGeocode';

export default function Root() {
  const { getLocationFromAddress, locations } = useGeocode();

  return (
    <S.SafeAreaView>
      <S.FormWrapper>
        {Array.from({ length: locations.length + 1 }).map((_, i) => (
          <MyTextInput getLocationFromAddress={getLocationFromAddress} key={i} />
        ))}
      </S.FormWrapper>
      <S.Map
        initialRegion={{
          latitude: 37.8025259,
          longitude: -122.4351431,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {locations.map((location, index) => (
          <Marker key={index} coordinate={location} />
        ))}
        <Polyline
          coordinates={locations}
          strokeColor='#FF0000' // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#FF0000']}
          strokeWidth={6}
        />
      </S.Map>
    </S.SafeAreaView>
  );
}
