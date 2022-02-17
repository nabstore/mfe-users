import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div className="mt-16">Error</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// https://single-spa-playground.org/playground/instant-test?name=@nabstore/mfe-users&url=3020