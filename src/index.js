import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./assets/styles/global.style.scss";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./utils/store/rootReducer";
import rootSaga from "./utils/store/rootSaga";
import ThemeProvider from "./theme";

const sagaMiddleware = createSagaMiddleware();

let middleware = [];
middleware = [sagaMiddleware, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default function RootApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
