//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import {Router, browserHistory} from "react-router";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
/*  */
import {notify} from "react-notify-toast";
/*  */
import "./styles/base.css";
import rootReducer from "./reducers";

// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
/**/
require.ensure(["./sw-registration"], (require) => {
  require("./sw-registration")(notify);
}, "sw-registration");
/**/
window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;

    const enhancers = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    );

  const store = createStore(rootReducer, initialState,enhancers);
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.querySelector(".js-content")
  );
};
