import { configureStore, createStore, Store, EnhancedStore } from '@reduxjs/toolkit'
import hooks from './hooks'

const store: EnhancedStore = configureStore({
  reducer: {
    datastate: hooks
  }
})
const createstore: Store = createStore(hooks)

export { store, createstore }