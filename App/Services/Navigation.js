// @flow
import React from 'react'
// $FlowFixMe   We are ignoring react-navigation module cause it has flow errors
import { NavigationActions } from 'react-navigation'
import Routes from '../routes'

type Router = ?{
  dispatch: (action: Object) => void
}

// A private object that only this file will have access too
let router: Router = null

// Navigation "class"
// We can change this around if the navigation library changes
const Navigation = {

  Router: () => (
    <Routes ref={element => router = element} />
  ),

  navigate: (routeName: string, params?: Object) => {
    if (routeName) {
      let action = NavigationActions.navigate({ routeName, params })
      if (router){
        router.dispatch(action)
      }
    }
  },

  goBack: () => {
    let action = NavigationActions.back({})
    if (router) {
      router.dispatch(action)
    }
  },

  reset: (routeName: string, params?: Object) => {
    if (routeName){
      let action = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName, params })
        ]
      })
      if (router){
        router.dispatch(action)
      }
    }
  },
}

export default Navigation
