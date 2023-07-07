import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Map = styled(MapView)`
  flex: 1;
  height: 500px;
`;

export const FormWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  width: 90%;
  z-index: 999;
  margin-top: ${insets.top}px;
  padding: 10px;
`;
