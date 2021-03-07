import React from "react";
import { TextInputComponent } from "../components/TextInputComponent";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../components/colors";
import { FontAwesome } from "@expo/vector-icons";

export const SaveBookScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Save SaveBook</Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 15,
          borderWidth: 1,
          borderColor: colors.yellow,
          backgroundColor: colors.yellow,
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          top: 0,
          borderRadius: 15,
        }}
        onPress={() => {
          navigation.push("BookDeatilsScreen");
        }}
      >
        <FontAwesome name="th-list" size={30} color="black" />
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: colors.gray,
          borderBottomWidth: 2,
          marginTop: 20,
        }}
      />
      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>ISBN No.</Text>
        <TextInputComponent placeHolder="Enter ISBN No." condition={false} />
        <Text style={styles.text}>Book name.</Text>
        <TextInputComponent placeHolder="Enter Book Name." condition={false} />
        <Text style={styles.text}>Author.</Text>
        <TextInputComponent
          placeHolder="Enter Author Name."
          condition={false}
        />
        <Text style={styles.text}>Price.</Text>
        <TextInputComponent placeHolder="Enter Price" condition={false} />
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    marginTop: 20,
  },

  text: {
    marginTop: 10,
    fontStyle: "italic",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
  },
  button: {
    marginTop: screen.height * 0.07,
    backgroundColor: colors.yellow,
    borderRadius: 25,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
