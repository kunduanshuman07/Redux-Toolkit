import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from "react-redux"
// import store from "./redux/store"
import store from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
  )
}

export default App