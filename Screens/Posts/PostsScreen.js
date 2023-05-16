import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./PostScreen.styles";

const PostsScreen = () => {
  return (
    <View style={styles.postsMain}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image source={require("../../assets/images/avatar.png")} />
        <View style={styles.postsProfileText}>
          <Text>Test Test</Text>
          <Text>example@email.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
