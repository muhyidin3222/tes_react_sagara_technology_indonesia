import React, { Suspense, lazy } from 'react'
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import LoadingLoad from 'components/general/loadingLoad'

const App = lazy(() => import('./App'))

const store = configureStore();

function Root() {
  return (
    <Suspense fallback={<LoadingLoad />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  );
}

export default Root;