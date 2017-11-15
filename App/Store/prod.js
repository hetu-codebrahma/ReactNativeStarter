import { AsyncStorage } from 'react-native'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './combineReducers'
import sagas from './registerSagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

export default store
