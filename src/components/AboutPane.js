import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";
import { AntDesign } from '@expo/vector-icons';

const SplashPane = () => {
  const { container, aboutPar, contentContainer, scrollView, line, linkStyle, linksHolder, linkHolder } = styles;

  const linkHandler = (prop) => {
    return Linking.openURL(prop)
  }
  return (
    <View style={container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainer}
        style={scrollView}
      >
        <Text style={aboutPar}>
          I have been writing code in the basic web technologies since I was
          connecting to the internet over dial-up.{"\n"}
          {"\n"}A few years ago I took a Udacity Nanodegree course for full
          stack web development, I learned how to use Python, Flask, Apache,
          PostgreSQL, Google Cloud Platform, and Git.{"\n"}
          {"\n"}I later became interested in react native's goal of using a
          single language to code for ios and android native applications, so I
          took some courses at tylermcginnis.com to learn how to use React,
          React Native, Redux, Firebase, and Axios.{"\n"}
          {"\n"}I recently took a Udemy course to update and expand my React
          knowledge, and I learned how to use Hooks, Context, Express, and Expo.
        </Text>
        <View style={line} />
        <View style={linksHolder}>
          <TouchableOpacity
            style={linkHolder}
            onPress={() => linkHandler('https://www.linkedin.com/in/aubrey-wiedeman-413b88ab/')}>
            <AntDesign style={linkStyle} name="linkedin-square" size={32} color="white" />
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
  },
  scrollView: {
    height: "100%",
    overflow:'hidden',
    width: '80%',
    backgroundColor: "black",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    overflow: 'hidden',
    paddingVertical: 30,
    marginBottom: 90
  },
  contentContainer: {
    height: '100%',
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,

  },
  aboutPar: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
    flexWrap: "wrap"
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    height: 2,
    width: "50%",
    margin: 20,
  },
  linksHolder: {

  },
  linkHolder: {
    backgroundColor: "black",
    backgroundColor: "rgba(0,0,0,0.25)",
    padding: 10,
    borderRadius: 20,
  },
  linkStyle: {
    fontSize: 32,
    color: "white",
  },
});

export default SplashPane;
