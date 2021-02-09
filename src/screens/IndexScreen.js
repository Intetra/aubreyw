import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const IndexScreen = () => {
  const { container, background, moon } = styles
  //const [ nav, setNav ] = useState('about')

  if (screenWidth <= 576) {
    return (
      <View style={container}>
        <Image
          style={moon}
          source={require('../images/splash-phone/splash-moon-phone.png')}
        />
        <Image
          style={background}
          source={require('../images/splash-phone/splash-frame-phone.png')}
        />

      </View>
    )
  } else {
    return null
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  moon: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});

export default IndexScreen;
