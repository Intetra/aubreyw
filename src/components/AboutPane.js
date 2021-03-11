import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";

const SplashPane = () => {
  const {
    container,
    aboutPar,
    scrollView,
    line,
    icon,
    linksHolder,
    linkHolder,
  } = styles;

  const linkHandler = (prop) => {
    return Linking.openURL(prop);
  };
  return (
    <View style={container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={scrollView}
      >
        <Text style={aboutPar}>
          I am a full-stack web and mobile application developer with a
          professional track record of hard work, integrity and professionalism.
          {"\n"}
          {"\n"}
          My background is in the sales/service industry, but I am determined to
          move into software development.
          {"\n"}
          {"\n"}
          I have completed a bootcamp and several courses to learn the
          necessary skills, as well as building multiple personal projects to
          solidify my understanding.
          {"\n"}
          {"\n"}
          I am self-motivated to learn and improve every day, and I know
          that I will be a valuable asset to the team that gives me the
          opportunity to prove myself.
        </Text>
        <View style={line} />
        <View style={linksHolder}>
          <TouchableOpacity
            style={linkHolder}
            onPress={() =>
              linkHandler(
                "https://www.linkedin.com/in/aubrey-wiedeman-413b88ab/"
              )
            }
          >
            <AntDesign
              style={icon}
              name="linkedin-square"
              size={32}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={linkHolder}
            onPress={() =>
              linkHandler(
                "https://github.com/Intetra"
              )
            }
          >
            <AntDesign name="github" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  scrollView: {
    height: "90%",
    width: "90%",
  },
  aboutPar: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    flexWrap: "wrap",
  },
  line: {
    alignSelf: 'center',
    borderBottomColor: "white",
    borderBottomWidth: 2,
    height: 2,
    width: "50%",
    margin: 20,
  },
  linksHolder: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%'
  },
  linkHolder: {
    backgroundColor: "white",
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 10,
    margin: 10,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.22,
    height: Dimensions.get("window").width * 0.22,
    maxWidth: 80,
    maxHeight: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 32,
    color: "white",
  },
});

export default SplashPane;
