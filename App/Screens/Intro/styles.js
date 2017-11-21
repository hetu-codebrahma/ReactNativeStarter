import { StyleSheet } from 'react-native'
import {
  Colors,
  Fonts,
  AppStyles,
} from '../../Services/Theme'

export default StyleSheet.create({
  container: {
    ...AppStyles.container,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    ...Fonts.style.h3,
    color: 'white',
  },
  headerImage: {
    width: 200,
    height: 200,
  },
})
