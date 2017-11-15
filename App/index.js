// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { withNetworkConnectivity } from 'react-native-offline'
import Navigation from './Services/Navigation'
import store from './Store'

const OfflineApp = withNetworkConnectivity({
  withRedux: true,
})(Navigation.Router)

class App extends Component<{}> {
  render() {
    return(
      <Provider store={store}>
        <OfflineApp />
      </Provider>
    )
  }
}

export default App
