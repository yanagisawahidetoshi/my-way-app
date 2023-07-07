import * as Location from 'expo-location';
import { useState } from 'react';

export const useGeocode = () => {
  const [locations, setLocations] = useState<{ latitude: number; longitude: number }[]>([]);

  const getLocationFromAddress = async (address: string) => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let result = await Location.geocodeAsync(address);
    if (result.length === 0) return;

    setLocations([...locations, { latitude: result[0].latitude, longitude: result[0].longitude }]);
  };

  return { getLocationFromAddress, locations };
};
