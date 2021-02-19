import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const InfoPane = () => {
  const { container, splashText1, splashText2, splashImage} = styles
  return (
    <View style={container}>
      <Text style={splashText1}>
        I'm Aubrey,
      </Text>
      <Text style={splashText2}>
        a software developer
      </Text>
      <Image
        source={require('../images/selfie.jpg')}
        style={splashImage}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems:'center',
    justifyContent: 'center'
  },
  splashText1: {
    fontSize: 36,
    color: 'white'
  },
  splashText2: {
    fontSize: 24,
    color: 'white'
  },
  splashImage: {
    height: '50%',
    width: '50%',
    resizeMode: 'contain'
  }
})

export default InfoPane
