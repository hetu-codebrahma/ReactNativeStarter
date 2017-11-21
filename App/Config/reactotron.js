import Reactotron, {
  trackGlobalErrors,
  openInEditor,
} from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if(__DEV__){
  Reactotron
    .configure({ name: 'React Native Starter' })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect() // let's connect!

  console.tron = Reactotron
  console.ignoredYellowBox = [ 'Setting a timer' ];

}else{
  console.tron = {
    log: () => false,
    warn: () => false,
    error: () => false,
  }
}
