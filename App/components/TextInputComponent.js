import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../components/colors";

export const TextInputComponent = ({ condition, placeHolder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        secureTextEntry={condition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.gray,
    paddingLeft: 25,
  },
});
