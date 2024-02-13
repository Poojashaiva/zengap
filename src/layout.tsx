import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Switcher from "./components/common/switcher/switcher";
import TabToTop from "./components/common/backtotop/backtotop";
import Header from "./components/common/header/header";
import Sidebar from "./components/common/sidebar/sidebar";
import Rightsidebar from "./components/common/rightsidebar/rightsidebar";
import Footer from "./components/common/footer/footer";
import { Fragment, useEffect, useState } from "react";
import { MENUITEMS } from "./components/common/sidebar/menudata";
function Layout() {
  const [menuitems, setMenuitems] = useState(MENUITEMS);
  document.querySelector("body")?.classList.remove("error-page1", "bg-primary", "ltr");

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollAmount = (windowScroll / height) * 100;
      const constprogressbar = document.querySelector(
        ".progress-top-bar"
      ) as HTMLElement;
      constprogressbar.style.width = scrollAmount + "%";
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // for Sticky-pin
  const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".main-header")) {
      const Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      const Scolls = document.querySelectorAll(".sticky");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  window.addEventListener("scroll", Topup);
  const Remove = () => {
    let Demochnager = document.querySelector(".demo_changer") as HTMLElement;
    Demochnager.classList.remove("active");
    Demochnager.style.insetInlineEnd = "-270px";
    document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
  };

  let horizontalBodyClick = () => {
    if (
      localStorage.Zemhorizontal == "horizontal" ||
      localStorage.ZemhorizontalHover == "horizontalHover"
    ) {
      MENUITEMS.filter((data: any) => {
        data.active = false;
        data.Items.filter((child1: any) => {
          child1.active = false;
        });
      });
    }
    setMenuitems((arr: any) => [...arr]);
  };
  return (
    <Fragment>
      <Provider store={store}>
        <div className="horizontalMenucontainer">
          <div className="progress-top-bar" style={{ width: 0 }} />
          <TabToTop />
          <Switcher />
          <div className="page">
            <div className="layout-position-binder">
              <Header />
              <Sidebar
                MENUITEMS={menuitems}
                local_varaiable={undefined}
                ThemeChanger={undefined}
                />
            </div>
            <div
              className="main-content app-content"
              onClick={() => {
                horizontalBodyClick();
              }}
            >
              <div
                className="main-container container-fluid"
                onClick={() => Remove()}
              >
                <Outlet />
              </div>
            </div>
            <Rightsidebar />
            <Footer />
          </div>
        </div>
      </Provider>
    </Fragment>
  );
}
export default Layout;
