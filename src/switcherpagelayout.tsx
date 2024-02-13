// import React from 'react'

import { Fragment, useState } from "react"
import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"
import store from "./redux/store"
import TabToTop from "./components/common/backtotop/backtotop"

import Sidebar from "./components/common/sidebar/sidebar"
import Rightsidebar from "./components/common/rightsidebar/rightsidebar"
import Footer from "./components/common/footer/footer"
import { MENUITEMS } from "./components/common/sidebar/menudata"
import Header2 from "./components/common/header/header2"



function Switcherpagelayout() {
    const [menuitems, setMenuitems] = useState(MENUITEMS);
    let horizontalBodyClick = () => {
        if (localStorage.Zemhorizontal == 'horizontal' || localStorage.ZemhorizontalHover == 'horizontalHover') {
            MENUITEMS.filter((data: any) => {
                data.active = false
                data.Items.filter((child1: any) => {
                    child1.active = false
                })
            })

        }
        setMenuitems((arr: any) => [...arr]);
    }
    // const Remove = () => {

    //     // const Demochnager = document.querySelector(".demo_changer") as HTMLElement
    //     // Demochnager.classList.remove("active");
    //     // Demochnager.style.insetInlineEnd = "-270px";
    //     // document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");

    // };

    const theme :any = store.getState();
    return (
        <Fragment>

            <Provider store={store}>
                <div className="horizontalMenucontainer">
                    <div className="progress-top-bar" style={{ width: 0 }} />
                    <TabToTop />
                    {/* <Switcher /> */}
                    <div className="page">
                        <div className="layout-position-binder">
                            <Header2 />
                            <Sidebar MENUITEMS={menuitems} local_varaiable={undefined} ThemeChanger={undefined} />
                        </div>
                        <div className="main-content app-content" onClick={() => { horizontalBodyClick() }}>
                            <div className={`main-contanier ${theme.datalayout == 'horizontal' ? 'container' : 'container-fluid'}`}>
                                <Outlet />
                            </div>
                        </div>
                        <Rightsidebar />
                        <Footer />
                    </div>
                </div>
            </Provider>
        </Fragment>

    )
}

export default Switcherpagelayout