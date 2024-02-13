// import React from 'react'

import { Fragment, useEffect } from "react"
import TabToTop from "./components/common/backtotop/backtotop"
// import Landing from "./containers/pages/landing/landing"
import { Provider } from "react-redux";
import store from "./redux/store";

function Landingpage() {
  const html = document.documentElement;
  html.removeAttribute('data-theme-color');
  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollAmount = (windowScroll / height) * 100;
      const constprogressbar = document.querySelector(".progress-top-bar") as HTMLElement;
      constprogressbar.style.width = scrollAmount + "%";
    };
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Provider store={store}>
        <div className="progress-top-bar" style={{ width: 0 }} />
        {/* <Landing /> */}
        <TabToTop />
      </Provider>
    </Fragment>
  )
}

export default Landingpage