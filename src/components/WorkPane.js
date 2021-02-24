import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const Sample = (props) => {
  const { title, image, icon, link } = props;
  const {
    sample,
    sampleImage,
    sampleIcon,
    sampleTitle,
    linkStyle,
    linkHolderStyle,
  } = styles;
  const imageHandler = () => {
    if (image) {
      return <Image source={image} style={sampleImage} />;
    } else if (icon) {
      if (icon === "blog") {
        return (
          <FontAwesome5
            style={sampleIcon}
            name="blog"
            size={48}
            color="white"
          />
        );
      } else if (icon === "api") {
        return (
          <AntDesign style={sampleIcon} name="API" size={48} color="white" />
        );
      } else if (icon === "flaskBlog") {
        return (
          <Entypo style={sampleIcon} name="lab-flask" size={48} color="white" />
        );
      }
    }
  };

  const linkHandler = () => {
    if (link === "website") {
      return Linking.openURL("https://github.com/Intetra/aubreyw");
    } else if (link === "apiLink") {
      return Linking.openURL("https://github.com/Intetra/Custom-Express-API");
    } else if (link === "rnBlogLink") {
      return Linking.openURL("https://github.com/Intetra/blogs");
    } else if (link === "flaskBlogLink") {
      return Linking.openURL("https://github.com/Intetra/flask-blog-app");
    } else return null;
  };

  return (
    <View style={sample}>
      <Text style={sampleTitle}>{title}</Text>
      {imageHandler()}
      <TouchableOpacity style={linkHolderStyle} onPress={() => linkHandler()}>
        <Text style={linkStyle}>Github</Text>
      </TouchableOpacity>
    </View>
  );
};

const WorkPane = () => {
  const {
    contentContainer,
    scrollView,
    topTitle,
    border,
    topGradient,
    bottomGradient,
  } = styles;
  //pointerEvents="none" makes the LinearGradient click-through
  return (
    <View style={border}>
      <LinearGradient
        pointerEvents={"box-none"}
        colors={["rgba(0,0,0,1)", "rgba(0,0,0,1)", "transparent"]}
        style={topGradient}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainer}
        style={scrollView}
      >
        <Image source={require("../images/codeSamples.png")} style={topTitle} />
        <Sample
          title="This website"
          image={require("../images/ipad/moon.png")}
          link="website"
        />
        <Sample title="Custom Express API" icon="api" link="apiLink" />
        <Sample title="React Native Blog" icon="blog" link="rnBlogLink" />
        <Sample
          title="Python/Flask Blog"
          icon="flaskBlog"
          link="flaskBlogLink"
        />
      </ScrollView>
      <LinearGradient
        pointerEvents={"box-none"}
        colors={["transparent", "rgba(0,0,0,1)", "rgba(0,0,0,1)"]}
        style={bottomGradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    alignSelf: "center",
    borderWidth: 5,
    borderRadius: 30,
    borderColor: "white",
    position: "absolute",
    height: "80%",
    width: "80%",
    maxWidth: 500,
    maxHeight: 500,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  topTitle: {
    position: "relative",
    marginVertical: 30,
    height: 60,
    width: "100%",
    resizeMode: "contain",
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 35,
    zIndex: 1,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 35,
  },
  scrollView: {
    position: "absolute",
    height: 500,
    width: '100%',
    top: 10
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  sample: {
    height: 450,
    width: 450,
    maxWidth: "90%",
    maxHeight: "90%",
    backgroundColor: "black",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    padding: 10
  },
  sampleTitle: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    width: '90%',
    flexShrink: 1
  },
  sampleImage: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  sampleIcon: {
    marginVertical: 40,
  },
  linkHolderStyle: {
    backgroundColor: "black",
    backgroundColor: "rgba(0,0,0,0.25)",
    padding: 10,
    borderRadius: 20
  },
  linkStyle: {
    fontSize: 32,
    color: "white",
  },
});

export default WorkPane;
