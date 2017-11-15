// @flow
import devStore from './dev'
import prodStore from './prod'

const store = __DEV__ ? devStore : prodStore

export default store
