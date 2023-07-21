import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { routinePromiseWatcherSaga } from "redux-saga-routines";
import { createLogger } from "redux-logger";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./store/rootReducer"; //
import rootSaga from "./store/rootSaga";

export default function configureStore() {
  const config = {
    key: "root",
    storage,
    blacklist: ["loadingReducer"],
    debug: true,
  };

  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  middleware.push(createLogger());

  const reducers = persistCombineReducers(config, rootReducer);
  const enhancers = [applyMiddleware(...middleware)];
  const initialState = {};
  const persistConfig = { enhancers };
  const store = createStore(reducers, initialState, compose(...enhancers));
  const persistor = persistStore(store, persistConfig, () => {
    //   console.log('Test', store.getState());
  });
  const configureStore = () => {
    return { persistor, store };
  };

  sagaMiddleware.run(rootSaga);
  return store;
}
