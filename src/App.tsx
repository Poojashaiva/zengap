import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Loader from "./components/common/loader/loader";
import Custompages from "./custompages.tsx";
import Landingpage from "./landingpage.tsx";
import Alerts from "./components/ui/elements/alerts/alerts.tsx";
import Avatar from "./components/ui/elements/avatar/avatar.tsx";
import Bredcrumbs from "./components/ui/elements/bredcrumbs/bredcrumbs.tsx";
import Buttons from "./components/ui/elements/buttons/buttons.tsx";
import Badges from "./components/ui/elements/badges/badges.tsx";
import Dropdowns from "./components/ui/elements/dropdowns/dropdowns.tsx";
import ListGroups from "./components/ui/elements/listgroup/listgroup.tsx";
import Navigation from "./components/ui/elements/navigation/navigation.tsx";
import Pagination from "./components/ui/elements/pagination/pagination.tsx";
import Popovers from "./components/ui/elements/popover/popover.tsx";
import Progress from "./components/ui/elements/progress/progress.tsx";
import Spinners from "./components/ui/elements/spinner/spinner.tsx";
import Mediaobject from "./components/ui/elements/mediaobject/mediaobject.tsx";
import Typography from "./components/ui/elements/typography/typography.tsx";
import Tooltips from "./components/ui/elements/tooltip/tooltip.tsx";
import Toasts from "./components/ui/elements/toasts/toast.tsx";
import Tags from "./components/ui/elements/tags/tags.tsx";
import Tabss from "./components/ui/elements/tabs/tabs.tsx";
// import Profile from "./containers/pages/profile/profile.tsx";
import Widgets from "./containers/pages/widgets/widgets.tsx";
import Images from "./components/ui/elements/images/images.tsx";
import Switcherpagelayout from "./switcherpagelayout.tsx";

import "../src/assets/css/style.css";
import "../src/assets/css/plugins.css";
import "../src/assets/switcher/css/switcher.css";
import "../src/assets/switcher/styles.css";
import "react-datepicker/dist/react-datepicker.css"; // Day-picker
import 'react-phone-number-input/style.css'; //Country selctor
import "../src/assets/css/icons.css";
// import General from "./containers/dashboard/general/general.tsx";
import Layout from "./layout.tsx";
import Auth from "./firebase/auth.tsx";
import Login from "./firebase/login.tsx";
import FirebaseSignUp from "./firebase/signup.tsx";



function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
              <Route index element={<Login />} />
              <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
              <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<FirebaseSignUp />} />
            </Route>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Layout />}>
              {/* <Route
                path={`${import.meta.env.BASE_URL}/`}
                element={<General />}
              /> */}
              {/* <Route
                path={`${import.meta.env.BASE_URL}dashboard/index`}
                element={<General />}
              /> */}
              <Route
                path={`${import.meta.env.BASE_URL}pages/widgets`}
                element={<Widgets />}
              />
              {/* <Route
                path={`${import.meta.env.BASE_URL}dashboard/index-6`}
                element={<Crypto />}
              /> */}
              <Route
                path={`${import.meta.env.BASE_URL}elements/alerts`}
                element={<Alerts />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/avatar`}
                element={<Avatar />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/breadcrumbs`}
                element={<Bredcrumbs />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/buttons`}
                element={<Buttons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/badges`}
                element={<Badges />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/dropdown`}
                element={<Dropdowns />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/listgroup`}
                element={<ListGroups />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/navigation`}
                element={<Navigation />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/images`}
                element={<Images />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/paginations`}
                element={<Pagination />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/popover`}
                element={<Popovers />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/progress`}
                element={<Progress />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/spinners`}
                element={<Spinners />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/mediaObject`}
                element={<Mediaobject />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/typography`}
                element={<Typography />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/tooltip`}
                element={<Tooltips />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/toast`}
                element={<Toasts />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/tags`}
                element={<Tags />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/tabs`}
                element={<Tabss />}
              />
            </Route>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Custompages />}
            >
            </Route>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Landingpage />}
            >
              
            </Route>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Switcherpagelayout />}
            >
             
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
