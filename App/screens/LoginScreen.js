import React, { useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../components/colors";
import { TextInputComponent } from "../components/TextInputComponent";
import { KeyBoardSpacer } from "../components/KeyBoardSpacer";

const screen = Dimensions.get("screen");

export default ({ navigation }) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/images/bookLogo.png")}
              style={styles.img}
            />
          </View>
          <View>
            <Text style={styles.headerText}>Book App.</Text>
            <View>
              <TextInput style={styles.input} placeholder="Enter User name" />
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.push("SaveBookScreen");
              }}
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                color: colors.gray,
                fontSize: 15,
                marginTop: 20,
              }}
            >
              Or
            </Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.socialMediaButoon}>
                <Image
                  source={require("../assets/images/google.png")}
                  style={styles.socialMediaIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialMediaButoon}>
                <Image
                  source={require("../assets/images/facebook.png")}
                  style={(styles.socialMediaIcon, { width: 30, height: 30 })}
                />
              </TouchableOpacity>
            </View>
          </View>
          <KeyBoardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 20,
  },
  img: {
    height: screen.height * 0.3,
    width: screen.width * 0.6,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: colors.yellow,
  },
  headerText: {
    marginTop: 15,
    fontSize: 35,
    color: colors.yellow,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    alignItems: "center",
    padding: 10,
    width: screen.width - 40,
    borderRadius: 25,
    backgroundColor: colors.yellow,
    height: 40,
  },
  buttonGroup: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    // width: screen.width * 0.4,
    // alignItems: "",
  },
  socialMediaButoon: {
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
    height: 50,
    marginRight: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  socialMediaIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.gray,
    paddingLeft: 25,
    marginTop: 25,
  },
});
