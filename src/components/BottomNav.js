import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const BottomNav = (props) => {
  const { updatePane } = props
  const { container, iconHolder, icon } = styles
  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => {
          updatePane('about')}
        }
        style={iconHolder}
      >
        <Ionicons style={icon} name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconHolder: {
    display: 'flex',
    position: 'relative',
    zIndex: 2,
    height: "100%",
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'relative',
    zIndex: 1
  }
})

export default BottomNav
