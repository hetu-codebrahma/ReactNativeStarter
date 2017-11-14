// @flow
import React, {Component} from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import styles from './styles'

class Intro extends Component<{}> {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Image
          source={require('../../Assets/cb-logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.heading}>
          React Native Quick Start
        </Text>
      </View>
    )
  }
}

export default Intro
