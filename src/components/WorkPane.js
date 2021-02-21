import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Sample = (props) => {
  const { title, image, icon } = props;
  const { sample, sampleImage, sampleIcon, sampleTitle } = styles;
  const imageHandler = () => {
    if (image) {
      return (
        <Image
          source={image}
          style={sampleImage}
        />
      )
    } else if (icon) {
      if (icon === 'blog') {
        return (
          <FontAwesome5 style={sampleIcon} name="blog" size={48} color="white" />
        )
      } else if (icon === 'api') {
        return (
          <AntDesign style={sampleIcon} name="API" size={48} color="white" />
        )
      } else if (icon === 'rnStarter') {
        return (
          <MaterialCommunityIcons style={sampleIcon} name="puzzle-check" size={48} color="white" />
        )
      } else if (icon === 'flaskBlog') {
        return (
          <Entypo style={sampleIcon} name="lab-flask" size={48} color="white" />
        )
      }
    }
  }

  return (
    <View style={sample}>
      <Text style={sampleTitle}>{title}</Text>
      {imageHandler()}
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
        <Text style={topTitle}>Code Samples</Text>
        <Sample
          title="This website"
          image={require('../images/ipad/moon.png')}
        />
        <Sample
          title="Custom API"
          icon='api'
        />
        <Sample
          title="React Native Blog"
          icon='blog'
        />
        <Sample
          title="React Native Course Starter"
          icon='rnStarter'
        />
        <Sample
          title="Python/Flask Blog"
          icon='flaskBlog'
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
    color: "white"
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 35,
    zIndex: 1
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
    top: 10,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  sample: {
    height: 450,
    width: 450,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: 'black',
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  sampleTitle: {
    color: 'white'
  },
  sampleImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain'
  },
  sampleIcon: {
    marginTop: 40

  }
});

export default WorkPane;
