import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'

export default function spinningImage() {

  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

    useEffect(() => {
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 120000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    });
  return spin
}

/*
return (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Animated.Image
      style={{height: 100, width: 100, transform: [{rotate: spin}]}}
      source={{
        uri:
          'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_960_720.png',
      }}
    />
  </View>
)
*/
