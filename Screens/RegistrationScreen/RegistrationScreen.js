import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./Screens.styles";
// import { ScrollView } from "react-native-web";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);

  const [focusLogin, setFocusLogin] = useState(false);

  const [focusEmail, setIsFocusEmail] = useState(false);

  const [focusPassword, setFocusPassword] = useState(false);

  const loginHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      login: value,
    }));
  const nameHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      email: value,
    }));
  const passwordHandler = (value) =>
    setState((prevState) => ({
      ...prevState,
      password: value,
    }));

  const onRegistration = () => {
    console.log(state);
    Keyboard.dismiss();
    setState(initialState);
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/images/123.jpg")}
          style={styles.img}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.regField}>
              <View style={styles.regInputs}>
                <View style={styles.avatarPlace}>
                  <Image source={require("../../assets/images/avatar.png")} />
                </View>
                <Pressable
                  title={"Login"}
                  style={styles.add}
                  onPress={onRegistration}
                >
                  <View>
                    <Image source={require("../../assets/images/add.png")} />
                  </View>
                </Pressable>
                <View style={styles.textPosition}>
                  <Text style={{ fontFamily: "Roboto", fontSize: 30 }}>
                    Реєстрація
                  </Text>
                </View>
                <TextInput
                  value={state.login}
                  onChangeText={loginHandler}
                  placeholder="Login"
                  style={{
                    ...styles.input,
                    borderColor: focusLogin ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => setFocusLogin(true)}
                  onBlur={() => setFocusLogin(false)}
                />
                <TextInput
                  value={state.email}
                  onChangeText={nameHandler}
                  placeholder="Username"
                  style={{
                    ...styles.input,
                    borderColor: focusEmail ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => setIsFocusEmail(true)}
                  onBlur={() => setIsFocusEmail(false)}
                />
                <TextInput
                  value={state.password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={{
                    ...styles.input,
                    borderColor: focusPassword ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => setFocusPassword(true)}
                  onBlur={() => setFocusPassword(false)}
                />
                <Pressable
                  title={"Register"}
                  style={styles.button}
                  onPress={onRegistration}
                >
                  <Text>Реєстрація</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("Login")}
                  style={{ paddingTop: 10 }}
                >
                  <Text>Already have an account? Sign in</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
