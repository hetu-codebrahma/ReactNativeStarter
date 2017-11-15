import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import '../Config/reactotron'
import rootReducer from './combineReducers'
import sagas from './registerSagas'

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = Reactotron.createStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

export default store
