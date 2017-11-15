// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigation from './Services/Navigation'
import store from './Store'

class App extends Component<{}> {
  render() {
    return(
      <Provider store={store}>
        <Navigation.Router />
      </Provider>
    )
  }
}

export default App
