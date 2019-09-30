import React from "react";
import { TextInput, View, Text } from "react-native";
import styled from "styled-components";
const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry
}) => {
  state = { text: "" };
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <Cont style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextIn
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        maxLength={40}
      />
    </Cont>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18
  }
};

const Cont = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: -15;
`;

const TextIn = styled.TextInput`
  padding-left: 10px;
  height: 30%;
  flex-direction: column;
  background: white;
  width: 95%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 5;
  elevation: 1;
`;
export default Input;
