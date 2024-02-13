import { Fragment } from "react";
import { Provider } from "react-redux";
// import { Helmet } from "react-helmet";
import { Outlet } from "react-router";
import store from "./redux/store";

function Custompages() {
  return (
    <Fragment>
      <Provider store={store}>
        <div className="square-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Outlet />
      </Provider>
    </Fragment>
  );
}

export default Custompages;
