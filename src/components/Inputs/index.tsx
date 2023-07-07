import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as S from './styles';
import MyTextInput from '../MyTextInput';

type Props = {
  length: number;
  getLocationFromAddress: (address: string) => void;
};

const Inputs: React.FC<Props> = ({ length, getLocationFromAddress }) => {
  const insets = useSafeAreaInsets();

  return (
    <S.Wrapper style={{ paddingTop: insets.top }}>
      {[...Array(length + 1)].map((_, i) => (
        <MyTextInput getLocationFromAddress={getLocationFromAddress} key={i} />
      ))}
    </S.Wrapper>
  );
};
export default Inputs;
