// import React from 'react'

import { Fragment, useEffect } from "react";
import RSC from "react-scrollbars-custom";
import Allimages from "../imagesdata/imagesdata";
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Themeprimarycolor, * as SwitcherData from "./switcherdata";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { ThemeChanger } from "../../../redux/action";
import { Row } from "react-bootstrap";
function Switcher({ local_varaiable, ThemeChanger, }: { local_varaiable: any; ThemeChanger: any; }) {
  useEffect(() => {
    SwitcherData.LocalStorageBackup(ThemeChanger);
    
  }, []);
 
  return (
    <Fragment>
      <Helmet>
        <body className={local_varaiable.body.class}></body>
        <html
          dir={local_varaiable.dir}
          data-theme-color={local_varaiable.datathemecolor}
          data-menuimg={local_varaiable.bgImg}
          data-width={local_varaiable.datawidth}
          data-position={local_varaiable.dataposition}
          data-vertical-style={local_varaiable.dataverticalstyle}
          data-layout={local_varaiable.datalayout}
          data-hor-style={local_varaiable.datahorstyle}
        ></html>
      </Helmet>
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <Row className="row">
              <div className="predefined_styles">
                <RSC style={{ width: "100%", height: "100vh" }}>
                  <div className="swichermainleft text-center">
                    <h4 className="my-2"> LTR AND RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">LTR</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch25"
                              checked={local_varaiable.dir == "ltr"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Ltr(ThemeChanger);
                              }}
                              id="switchbtn-ltr"
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="switchbtn-ltr"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch25"
                              id="switchbtn-rtl"
                              className="onoffswitch2-checkbox"
                              checked={local_varaiable.dir == "rtl"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Rtl(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-rtl"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft switcher-nav">
                    <h4 className="my-2"> Navigation Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Vertical Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="switchbtn-vertical"
                              className="onoffswitch2-checkbox"
                              checked={local_varaiable.datalayout == "vertical"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Verticaldirection(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-vertical"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizontal Click Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="switchbtn-horizontal"
                              className="onoffswitch2-checkbox"
                              checked={
                                local_varaiable.datahorstyle == "hor-click"
                              }
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.HorizantalClickMenu(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-horizontal"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizontal Hover Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="switchbtn-horizontalHover"
                              className="onoffswitch2-checkbox"
                              checked={
                                local_varaiable.datahorstyle == "hor-hover"
                              }
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.HorizantalHoverMenu(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-horizontalHover"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4 className="my-2"> Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Default Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="switchbtn-default"
                              className="onoffswitch2-checkbox"
                              checked={
                                local_varaiable.datathemecolor == "default"
                              }
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Themedefault(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-default"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Light Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="switchbtn-light-theme"
                              className="onoffswitch2-checkbox"
                              checked={
                                local_varaiable.datathemecolor == "light"
                              }
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Themelight(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-light-theme"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="switchbtn-dark"
                              className="onoffswitch2-checkbox"
                              checked={local_varaiable.datathemecolor == "dark"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Themedark(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-dark"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Glassy Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="switchbtn-glassy-theme"
                              className="onoffswitch2-checkbox"
                              checked={
                                local_varaiable.datathemecolor == "glassy"
                              }
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Themeglassy(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-glassy-theme"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4 className="my-2"> Theme-colors</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Theme Primary</span>
                          <div className="">

                            <Themeprimarycolor />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex dynamic-bg">
                          <span className="me-auto">Theme Background</span>
                          <div className="">

                          </div>
                          <SwitcherData.Themebackgroundcolor />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4 className="my-2"> Menu Images</h4>
                    <div className="skin-body">
                      <div className="switch_section d-flex flex-between">
                        <div className="switch-toggle d-flex">
                          <div
                            className="bg-image"
                            onClick={() => SwitcherData.bgImage1(ThemeChanger)}
                          >
                            <img src={Allimages("Menuimages1")} />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex">
                          <div
                            className="bg-image"
                           
                            onClick={() => SwitcherData.bgImage2(ThemeChanger)}
                          >
                            <img src={Allimages("Menuimages2")} />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex">
                          <div
                            className="bg-image"
                          
                            onClick={() => SwitcherData.bgImage3(ThemeChanger)}
                          >
                            <img src={Allimages("Menuimages3")} />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex">
                          <div
                            className="bg-image"
                          
                            onClick={() => SwitcherData.bgImage4(ThemeChanger)}
                          >
                            <img src={Allimages("Menuimages4")} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4 className="my-2"> Layout Width Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Full Width</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch4"
                              id="switchbtn-fullwidth"
                              className="onoffswitch2-checkbox"
                              checked={local_varaiable.datawidth == "fullwidth"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Fullwidth(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-fullwidth"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Boxed</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch4"
                              id="switchbtn-boxed"
                              className="onoffswitch2-checkbox"
                              checked={local_varaiable.datawidth == "boxed"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Boxedwidth(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-boxed"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft switcher-layout">
                    <h4 className="my-2"> Layout Positions</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Fixed</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch5"
                              id="switchbtn-fixed"
                              className="onoffswitch2-checkbox"
                              checked={local_varaiable.dataposition == "fixed"}
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Fixed(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-fixed"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Scrollable</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch5"
                              id="switchbtn-scrollable"
                              className="onoffswitch2-checkbox"
                              checked={
                                local_varaiable.dataposition == "scrollable"
                              }
                              onChange={() => { }}
                              onClick={() => {
                                SwitcherData.Scrollable(ThemeChanger);
                              }}
                            />
                            <label
                              htmlFor="switchbtn-scrollable"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <button
                          id="resetbtn"
                          className="btn btn-danger btn-block"
                          onClick={() => SwitcherData.ResetButton(ThemeChanger)}
                        >
                          Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                </RSC>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
Switcher.defaultProps = {};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Switcher);
