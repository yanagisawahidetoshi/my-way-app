import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

type Props = {
  getLocationFromAddress: (address: string) => void;
};

const MyTextInput: React.FC<Props> = ({ getLocationFromAddress }) => {
  const [text, setText] = useState('');

  return (
    <TextInput
      label='address or landmark'
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={() => getLocationFromAddress(text)}
      mode='outlined'
      theme={{
        colors: { text: '#7c7c7c', primary: '#7c7c7c', placeholder: '#7c7c7c', background: '#FFF' },
      }}
    />
  );
};
export default MyTextInput;
