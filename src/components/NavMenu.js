import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const NavMenu = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require('../images/about.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
