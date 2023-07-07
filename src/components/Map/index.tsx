import React, { Children, ReactNode } from 'react';
import * as S from './styles';

type Props = {
  children: ReactNode;
};

const Map: React.FC<Props> = ({ children }) => {
  return (
    <S.Map
      initialRegion={{
        latitude: 37.8025259,
        longitude: -122.4351431,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      {children}
    </S.Map>
  );
};

export default Map;
