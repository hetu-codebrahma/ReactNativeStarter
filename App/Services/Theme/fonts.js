import { Platform, Dimensions, PixelRatio } from 'react-native'

const type = {
  base: Platform.select({
    android: 'Roboto',
    ios: 'System',
  }),
}

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const normalize = (size) => {
  // Awesome formula for making font responsive to screen size
  // https://gist.github.com/thienpow/10b80c91343048408154884239cf9f42
  return parseInt(size) * SCREEN_WIDTH * (1.8 - 0.002 * SCREEN_WIDTH) / 400;
}

const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(30),
  h4: normalize(26),
  h5: normalize(20),
  h6: normalize(19),
  input: normalize(18),
  regular: normalize(17),
  medium: normalize(14),
  small: normalize(12),
  tiny: normalize(8.5),
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
}

export default {
  type,
  size,
  style,
}
