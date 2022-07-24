import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import store, {persistor} from './setup/redux/Store'

import './index.css'
import './styles/global.scss'
import reportWebVitals from './reportWebVitals'
import {AppRoutes} from './app/routing/AppRoutes'
import * as _redux from './setup'
import APIV2 from './utils/api/ApiV2'
import {createRoot} from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
_redux.setupAxiosV2(APIV2, store)

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <AppRoutes />
    </PersistGate>
  </Provider>
)

// ReactDOM.render(
//   <Provider store={store}>
//     {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
//     <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
//       <AppRoutes />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// )
