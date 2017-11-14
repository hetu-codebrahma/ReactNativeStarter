// @flow
// $FlowFixMe We are ignoring react-navigation module cause it has flow errors
import { StackNavigator } from 'react-navigation'
import Intro from './Screens/Intro'

export default StackNavigator({
  root: {
    screen: Intro,
    navigationOptions: {
      header: null,
    }
  },
}, {
  initialRouteName: 'root',
})
