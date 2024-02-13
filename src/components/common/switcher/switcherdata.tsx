import { ChangeEvent, useState } from "react";
import store from "../../../redux/store";
import rtl from "../../../assets/plugins/bootstrap/css/bootstrap.rtl.min.css?inline";
import ltr from "../../../assets/plugins/bootstrap/css/bootstrap.min.css?inline";

export function addOrRemoveCss(cssCode: any) {
  if (document.head.querySelector(`style[data-name="dynamic-bootstrap"]`)) {
    document.head.removeChild(
      document.head.querySelector(
        `style[data-name="dynamic-bootstrap"]`
      ) as Element
    );
  }
  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-name", "dynamic-bootstrap");
  styleElement.textContent = cssCode;
  document.head.prepend(styleElement);
}

//Ltr -Start
export function Ltr(actionfunction: any) {
  const theme = store.getState();
  actionfunction({ ...theme, dir: "ltr" });

  addOrRemoveCss(ltr);
  localStorage.removeItem("Zemdirectionrtl");
  localStorage.setItem("Zemdirectionltr", "ltr");
}
//Ltr -End

//Rtl -Start
export function Rtl(actionfunction: any) {
  const theme = store.getState();
  actionfunction({ ...theme, dir: "rtl" });

  addOrRemoveCss(rtl);
  localStorage.removeItem("Zemdirectionltr");
  localStorage.setItem("Zemdirectionrtl", "rtl");
}
//Rtl -End

//Verticaldirection -Start

export function Verticaldirection(actionfunction: any) {
  let horheader = document.querySelector(".main-header") as HTMLElement;
  horheader.classList.remove("hor-header");
  const theme = store.getState();
  actionfunction({
    ...theme,
    datalayout: "vertical",
    dataVerticalStyle: "default",
    datahorstyle: "",
    body: { class: "main-body app index sidebar-mini " },
  });
  document.querySelector(".app")?.classList.add("sidebar-mini");
  document.querySelector(".main-header")?.classList.add("side-header");
  document.querySelector(".main-content")?.classList.add("app-content");
  // document.querySelector(".main-container")?.classList.add("container-fluid");

  document
    .querySelectorAll(".main-container")[1]
    ?.classList.add("container-fluid");
  document
    .querySelectorAll(".main-container")[1]
    ?.classList.remove("container");
  document.querySelector(".side-app")?.classList.remove("container");
  document.querySelector(".app")?.classList.remove("horizontal");
  document.querySelector(".app")?.classList.remove("horizontal-hover");
  document.querySelector(".app-sidebar")?.classList.remove("horizontal-main");
  document.querySelector(".main-header")?.classList.remove("hor-header");
  document.querySelector(".main-sidemenu")?.classList.remove("container");

  document.querySelector(".main-content")?.classList.remove("horizontal-content");
  const myonoffswitch34 = document.getElementById("switchbtn-vertical") as HTMLInputElement;
  myonoffswitch34.checked = true;
  localStorage.setItem("Zemvertical", "vertical");
  localStorage.removeItem("Zemhorizontal");
}
// Verticaldirection -End

export function HorizantalClickMenu(actionfunction: any) {
  let horheader = document.querySelector(".main-header") as HTMLElement;
  if(horheader){
    horheader.classList.add("hor-header");
  }
  const theme = store.getState();
  actionfunction({
    ...theme,
    datalayout: "horizontal",
    datahorstyle: "hor-click",
    dataVerticalStyle: "",
    body: { class: "main-body app " },
  });
  document.querySelector(".main-header")?.classList.add("hor-header");
  document.querySelector(".app")?.classList.add("horizontal");
  document.querySelectorAll(".main-container")[1]?.classList.remove("container-fluid");
  document.querySelectorAll(".main-container")[1]?.classList.add("container");
  document.querySelector(".main-sidemenu")?.classList.add("container");
  document.querySelector(".main-content")?.classList.add("horizontal-content");
  document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
  document.querySelector(".side-app")?.classList.add("container");

  document.querySelector(".app")?.classList.remove("sidebar-mini");
  document.querySelector(".main-header")?.classList.remove("side-header");
  document.querySelector(".main-content")?.classList.remove("app-content");

  document.querySelector(".app")?.classList.remove("sidenav-toggled");
  document.querySelector(".app")?.classList.remove("horizontal-hover");

  const myonoffswitch35 = document.getElementById(
    "switchbtn-horizontal"
  ) as HTMLInputElement;
  if(myonoffswitch35){
    myonoffswitch35.checked = true;
  }
  checkHoriMenu();
  Horizontalmenudefultclose();
  switcherArrowFn();
  localStorage.setItem("Zemhorizontal", "horizontal");
  localStorage.removeItem("Zemvertical");
  localStorage.removeItem("ZemhorizontalHover");


  if(localStorage.zemboxedwidth == "boxed"){
    document.querySelector("#slide-right")?.classList.remove("d-none")
  }
}

// Horizantalhovermenu
export function HorizantalHoverMenu(actionfunction: any) {
  const theme = store.getState();
  actionfunction({
    ...theme,
    datalayout: "horizontal",
    datahorstyle: "hor-hover",
    dataVerticalStyle: "",
    body: { class: "ltr main-body app " },
  });
  document.querySelector(".app")?.classList.add("horizontal-hover");
  document.querySelector(".app")?.classList.add("horizontal");
  document.querySelector(".main-content")?.classList.add("horizontal-content");
  document.querySelector(".main-container ")?.classList.add("container");
  document.querySelector(".main-header")?.classList.add("hor-header");
  document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
  document.querySelector(".main-sidemenu")?.classList.add("container");
  document.querySelector(".side-app")?.classList.add("container");
  document.querySelector("#slide-left")?.classList.remove("d-none");
  document.querySelector("#slide-right")?.classList.remove("d-none");
  document.querySelector(".main-content")?.classList.remove("app-content");
  document
    .querySelector(".main-container ")
    ?.classList.remove("container-fluid");
  document.querySelector(".app")?.classList.remove("sidebar-mini");
  document.querySelector(".app")?.classList.remove("sidenav-toggled");
  document
    .querySelector(".horizontal-hover .side-menu")
    ?.classList.add("flex-nowrap");
  const li = document.querySelectorAll(".side-menu li");
  li.forEach((e: any) => {
    if (e.classList.contains("is-expaned")) {
      const ele = [...e.children];
      ele.forEach((el) => {
        el.classList.remove("active");
        if (el.classList.contains("slide-menu")) {
          el.style = "";
          el.style.display = "none";
        }
      });
      e.classList.remove("is-expaned");
    }
  });
  checkHoriMenu();
  Horizontalmenudefultclose();
  switcherArrowFn();
  const myonoffswitch111 = document.getElementById(
    "switchbtn-horizontalHover"
  ) as HTMLInputElement;
  myonoffswitch111.checked = true;
  localStorage.setItem("ZemhorizontalHover", "horizontalHover");
  localStorage.removeItem("Zemvertical");
  localStorage.removeItem("Zemhorizontal");
  if(localStorage.zemboxedwidth == "boxed"){
    document.querySelector("#slide-right")?.classList.remove("d-none")
  }
}

export function Themedefault(actionfunction: any) {
  const theme = store.getState();
  actionfunction({ ...theme, datathemecolor: "default" });
  localStorage.setItem("ZemThemestyles", "default");
}
export function Themelight(actionfunction: any) {
  const theme = store.getState();
  actionfunction({ ...theme, datathemecolor: "light",bgImg:"" });
  document.documentElement.style.removeProperty("--background-rgb");
  localStorage.setItem("ZemThemestyles", "light");
  localStorage.removeItem("datathemecolor");
  localStorage.removeItem("bgimage1");
}
export function Themedark(actionfunction: any) {
  const theme = store.getState();
  actionfunction({ ...theme, datathemecolor: "dark" });
  localStorage.setItem("ZemThemestyles", "dark");
  localStorage.removeItem("datathemecolor");
  document.documentElement.style.removeProperty("--background-rgb");
  localStorage.removeItem("Dynamicbackground");  
}
export function Themeglassy(actionfunction: any) {
  const theme = store.getState();
  actionfunction({ ...theme, datathemecolor: "glassy" });
  localStorage.setItem("ZemThemestyles", "glassy");
  localStorage.removeItem("datathemecolor");
  document.documentElement.style.removeProperty("--background-rgb");
  localStorage.removeItem("Dynamicbackground");  
}
export const bgImage1 = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, bgImg: "bg-img1" });
  localStorage.setItem("bgimage1", "bgimg1");
};
export const bgImage2 = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, bgImg: "bg-img2" });
  localStorage.setItem("bgimage2", "bgimg2");
};
export const bgImage3 = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, bgImg: "bg-img3" });
  localStorage.setItem("bgimage3", "bgimg3");
};
export const bgImage4 = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, bgImg: "bg-img4" });
  localStorage.setItem("bgimage4", "bgimg4");
};
export const Fullwidth = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, datawidth: "fullwidth" });
  localStorage.setItem("zemfullwidth", "fullwidth");
};
export const Boxedwidth = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, datawidth: "boxed" });
  localStorage.setItem("zemboxedwidth", "boxed");

  if(localStorage.Zemhorizontal == "Zemhorizontal"){
    document.querySelector("#slide-right")?.classList.remove("d-none")
  }
};
export const Fixed = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, dataposition: "fixed" });
  localStorage.setItem("dataposition", "fix");
  localStorage.removeItem("scrollableposition");
};
export const Scrollable = (actionfunction: any) => {
  const theme = store.getState();
  actionfunction({ ...theme, dataposition: "scrollable" });
  localStorage.setItem("scrollableposition", "scrollable");
};

//Themeprimarycolor
interface ColorPickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  return (
    <div>
      <input type="color" {...props} />
    </div>
  );
};
function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}
const Themeprimarycolor: React.FC = () => {
  const [state, updateState] = useState<string>("#4deeea");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let { r, g, b }: any = hexToRgb(e.target.value);
    updateState(e.target.value);
    const html = document.documentElement as HTMLElement;
    html.style.setProperty("--primary-rgb", `${r}, ${g}, ${b}`);
    localStorage.setItem("dynamiccolor", `${r}, ${g}, ${b}`);
  };
  return (
    <div className="Themeprimarycolor">
      <ColorPicker onChange={handleInput} value={state} type="color" />
    </div>
  );
};
export default Themeprimarycolor;
//ThemeBackgroundcolor
export const Themebackgroundcolor = () => {
  const [state, updateState] = useState<string>("#4deeea");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let { r, g, b }: any = hexToRgb(e.target.value);
    updateState(e.target.value);
    const html = document.documentElement as HTMLElement;
    html.style.setProperty("--background-rgb", `${r}, ${g}, ${b}`);
    localStorage.setItem("Dynamicbackground", `${r}, ${g}, ${b}`);
  };
  return (
    <div className="Themebackgroundcolor">
      <ColorPicker onChange={handleInput} value={state} />
    </div>
  );
};
export const ResetButton = (actionfunction: any) => {
  const html = document.documentElement as HTMLElement;
  const theme = store.getState();
  actionfunction({
    ...theme,
    lang: "en",
    dir: "ltr",
    datathemecolor: "default",
    bgImg: "",
    datahorstyle: "",
    datawidth: "fullwidth",
    dataposition: "fixed",
    dataverticalstyle: "default",
    datalayout: "vertical",
    body: {
      class: " main-body app index sidebar-mini",
    },
  });
  html.style.removeProperty("--primary-rgb");
  html.style.removeProperty("--background-rgb");
  document
    .querySelectorAll(".main-container")[1]
    ?.classList.add("container-fluid");
  document
    .querySelectorAll(".main-container")[1]
    ?.classList.remove("container");
  let horheader = document.querySelector(".main-header") as HTMLElement;
  horheader.classList.remove("hor-header");
  document.querySelector(".main-header")?.classList.add("side-header");
  localStorage.clear();
  addOrRemoveCss(ltr);
};
// LocalBackup Storage
export const LocalStorageBackup = (actionfunction: any) => {
  localStorage.Zemdirectionltr ? Ltr(actionfunction) : "";
  localStorage.Zemdirectionrtl ? Rtl(actionfunction) : "";
  localStorage.Zemvertical ? Verticaldirection(actionfunction) : "";
  localStorage.Zemhorizontal ? HorizantalClickMenu(actionfunction) : "";
  localStorage.ZemhorizontalHover ? HorizantalHoverMenu(actionfunction) : "";
  localStorage.bgimage1 ? bgImage1(actionfunction) : "";
  localStorage.bgimage2 ? bgImage2(actionfunction) : "";
  localStorage.bgimage3 ? bgImage3(actionfunction) : "";
  localStorage.bgimage4 ? bgImage4(actionfunction) : "";
  localStorage.zemfullwidth ? Fullwidth(actionfunction) : "";
  localStorage.zemboxedwidth ? Boxedwidth(actionfunction) : "";
  localStorage.dataposition ? Fixed(actionfunction) : "";
  localStorage.scrollableposition ? Scrollable(actionfunction) : "";
  if (localStorage.ZemThemestyles) {
    let Themestylesbuttons = localStorage.getItem("ZemThemestyles");
    switch (Themestylesbuttons) {
      case "default":
        Themedefault(actionfunction);
        break;
      case "light":
        Themelight(actionfunction);
        break;

      case "dark":
        Themedark(actionfunction);
        break;
      case "glassy":
        Themeglassy(actionfunction);
        break;
    }
  }
  //Theme Primary:
  const html = document.documentElement as HTMLElement;
  if (localStorage.dynamiccolor) {
    html.style.setProperty("--primary-rgb", localStorage.dynamiccolor);
  }
  //backgroundcolor:
  if (localStorage.Dynamicbackground) {
    html.style.setProperty("--background-rgb", localStorage.Dynamicbackground);
  }

  if (
    localStorage.getItem("Zemdirectionltr") == null ||
    localStorage.getItem("Zemdirectionltr") == "ltr"
  ) {
    addOrRemoveCss(ltr);
  }
  if (localStorage.getItem("Zemdirectionrtl") == "rtl") {
    document.querySelector("body")?.classList.add("rtl");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
    addOrRemoveCss(rtl);
  }
};
//  switcherArrowFn
export function switcherArrowFn() {

  const slideLeft: any = document.querySelector(".slide-left");
  const slideRight: any = document.querySelector(".slide-right");
  // used to remove is-expanded class and remove class on clicking arrow buttons
  function slideClick() {
    const slide = document.querySelectorAll(".slide");
    const sideMenuitem = document.querySelectorAll(".slide-menu__item");
    const slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element, _index) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element, _index) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element: any, _index) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
  // horizontal arrows
  window.addEventListener("resize", () => {
    const menuWidth: any = document.querySelector(".horizontal-main");
    const menuItems: any = document.querySelector(".side-menu");
    const mainSidemenuWidth: any = document.querySelector(".main-sidemenu");
    const menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    const marginLeftValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
    );
    const marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
    );
    const check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-right")?.classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;
    } else {
      document.querySelector(".slide-right")?.classList.remove("d-none");
    }

    if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
      if (
        Math.abs(marginRightValue) < Math.abs(check) === false &&
        menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
      ) {
        menuItems.style.marginRight = -check + "px";
        document.querySelector(".slide-left")?.classList.remove("d-none");
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (
        Math.abs(marginLeftValue) < Math.abs(check) === false &&
        menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
      ) {
        menuItems.style.marginLeft = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  });

  if (
    !document.querySelector("body")?.classList.contains("login-img") &&
    !document.querySelector("body")?.classList.contains("error-bg")
  ) {
    checkHoriMenu();
  }

  slideLeft.addEventListener("click", () => {
    slideClick();
    const menuWidth: any = document.querySelector(".horizontal-main");
    const menuItems: any = document.querySelector(".side-menu");
    const mainSidemenuWidth: any = document.querySelector(".main-sidemenu");
    const menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    const marginLeftValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
      ) + 100;
    const marginRightValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
      ) + 100;

    if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-left")?.classList.remove("d-none");
      } else {
        document.querySelector(".slide-left")?.classList.add("d-none");
      }

      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = "0px";
      }
      // to remove dropdown when clicking arrows in horizontal menu
      const subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e: any) => {
        e.style.display = "";
      });
      const subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e: any) => {
        e.style.display = "";
      });
    } else {
      if (marginLeftValue < 0) {
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
        if (
          menuWidth?.offsetWidth - menuContainerWidth <
          menuItems.scrollWidth
        ) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
          document.querySelector(".slide-right")?.classList.remove("d-none");
        }
      } else {
        document.querySelector(".slide-left")?.classList.add("d-none");
      }

      if (marginLeftValue >= 0) {
        menuItems.style.marginLeft = "0px";
        if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }
      }

      // to remove dropdown when clicking arrows in horizontal menu
      const subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e: any) => {
        e.style.display = "";
      });
      const subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e: any) => {
        e.style.display = "";
      });
    }
  });
  slideRight.addEventListener("click", () => {
    slideClick();
    const menuWidth: any = document.querySelector(".horizontal-main");
    const menuItems: any = document.querySelector(".side-menu");
    const mainSidemenuWidth: any = document.querySelector(".main-sidemenu");
    const menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    const marginLeftValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
      ) - 100;
    const marginRightValue =
      Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
      ) - 100;
    const check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
      } else {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }

      if (marginRightValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      const subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e: any) => {
        e.style.display = "";
      });
      const subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e: any) => {
        e.style.display = "";
      });
    } else {
      if (marginLeftValue > -check) {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
      } else {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
      }
      if (marginLeftValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      const subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e: any) => {
        e.style.display = "";
      });
      const subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e: any) => {
        e.style.display = "";
      });
      //
    }
  });
}



//  switcherArrowFn -End
export function checkHoriMenu() {
  const menuWidth: any = document.querySelector(".horizontal-main");
  const menuItems: any = document.querySelector(".side-menu");
  const mainSidemenuWidth: any = document.querySelector(".main-sidemenu");
  const menuContainerWidth =
    menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
  const marginLeftValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
  );
  const marginRightValue = Math.ceil(
    Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
  );
  const check: any =
    menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
  if (document.querySelector(".app")?.classList.contains("ltr")) {
    menuItems.style.marginRight = 0;
  } else {
    menuItems.style.marginLeft = 0;
  }
  if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector(".slide-left")?.classList.add("d-none");
    document.querySelector(".slide-right")?.classList.add("d-none");
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    document.querySelector(".slide-rightRTL")?.classList.add("d-none");
  } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector(".slide-right")?.classList.remove("d-none");
    document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
  } else if (marginLeftValue !== -check || marginRightValue !== -check) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
  }
  if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-right")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
  }
  if (marginLeftValue === 0 || marginRightValue === 0) {
    document.querySelector(".slide-left")?.classList.add("d-none");
    document.querySelector(".slide-leftRTL")?.classList.add("d-none");
  }
  if (marginLeftValue !== 0 || marginRightValue !== 0) {
    document.querySelector(".slide-left")?.classList.remove("d-none");
    document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
  }
}

//Horizontalmenudefultclose
export function Horizontalmenudefultclose() {
  if (document.querySelector(".horizontal")) {
    const slide = document.querySelectorAll(".slide");
    const sideMenuitem = document.querySelectorAll(".slide-menu__item");
    const slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element: any) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
}
//Horizontalmenudefultclose -End