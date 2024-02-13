///Alerts

// import Allimages from "../imagesdata/imagesdata";

// import Allimages from "../Allimages/Allimages";

//  1)
interface initialList {
  id: string
  show: string
  variant: string
  text: string
}
export const initialListdata: initialList[] = [
  {
    id: "1",
    show: "Well done!",
    variant: "success",
    text: "You successfully read this alert message.",
  },
  {
    id: "2",
    show: "Heads up!",
    variant: "danger",
    text: " This alert needs your attention, but it's not super .",
  },
  {
    id: "3",
    show: "Warning!",
    variant: "warning",
    text: "Better check yourself, you're not looking too good.",
  },
  {
    id: "4",
    show: "Oh snap!",
    variant: "info",
    text: "Change a few things up and try submitting again.",
  },
];
// 2)
interface initialListdismissing {
  id: string
  show: string
  variant: string
  text: string
}
export const initialListdismissingdata: initialListdismissing[] = [
  {
    id: "1",
    show: "Holy guacamole!",
    variant: "warning",
    text: "You should check in on some of those fields below.",
  },
  {
    id: "2",
    show: "Holy guacamole!",
    variant: "success",
    text: "You should check in on some of those fields below.",
  },
  {
    id: "3",
    show: "Holy guacamole!",
    variant: "danger",
    text: " You should check in on some of those fields below.",
  },

  {
    id: "4",
    show: "Holy guacamole!",
    variant: "info",
    text: "You should check in on some of those fields below.",
  },
];
// 3)
interface initialListicons {
  id: string
  show: string
  variant: string
  text: string
  icons: string
}
export const initialListiconsdata: initialListicons[] = [
  {
    id: "1",
    show: "Default!",
    variant: "default",
    icons: "fe fe-download",
    text: "This is a warning alert—check it out that has an icon too!",
  },
  {
    id: "2",
    show: "Primary!",
    variant: "primary",
    icons: "fe fe-check-square",
    text: "This is a warning alert—check it out that has an icon too!",
  },
  {
    id: "3",
    show: "Success!",
    variant: "success",
    icons: "fe fe-thumbs-up",
    text: " This is a warning alert—check it out that has an icon too!",
  },
  {
    id: "4",
    show: "Info!",
    variant: "info",
    icons: "ti-bell",
    text: "This is a warning alert—check it out that has an icon too!",
  },
  {
    id: "5",
    show: "Warning!",
    variant: "warning",
    icons: "fe fe-info",
    text: "This is a warning alert—check it out that has an icon too!",
  },
  {
    id: "7",
    show: "Danger!",
    variant: "danger",
    icons: "fe fe-slash",
    text: "This is a warning alert—check it out that has an icon too!",
  },
];
// 4)
interface Alertdatalink {

  color: string

}
export const Alertdatalinkdata: Alertdatalink[] = [
  {
    color: "primary",
  },
  {
    color: "secondary",
  },
  {
    color: "success",
  },
  {
    color: "danger",
  },
  {
    color: "warning",
  },
  {
    color: "info",
  },
  {
    color: "light",
  },
  {
    color: "dark",
  },
];
// 5)
interface Alertdatacontent {
  bg: string
  fe: string
  text: string
}
export const Alertdatacontentdata: Alertdatacontent[] = [
  {
    bg: "success",
    fe: "fe fe-check-circle",
    text: "Well done!",
  },
  {
    bg: "warning",
    fe: "fe fe-alert-octagon",
    text: "Warning!",
  },
  {
    bg: "danger",
    fe: "fe fe-delete",
    text: "Error!",
  },
];


// Buttons

// 1)DEFAULT BUTTONS

interface Defaultbuttons {
  color: string
  text: string
  id: number
}

export const Defaultbuttonsdata: Defaultbuttons[] = [
  { id: 1, color: 'primary', text: 'Primary' },
  { id: 2, color: 'secondary', text: 'Secondary' },
  { id: 3, color: 'success', text: 'Success' },
  { id: 4, color: 'info', text: 'Info' },
  { id: 5, color: 'warning', text: 'Warning' },
  { id: 6, color: 'danger', text: 'Danger' },
  { id: 7, color: 'light', text: 'Light' },
  { id: 8, color: 'link', text: 'Link' }

];
// 2)DISABLED BUTTONS

interface Disabledbuttons {
  color: string
  text: string
  id: number
}

export const Disabledbuttonsdata: Disabledbuttons[] = [
  { id: 1, color: 'primary', text: 'Primary' },
  { id: 2, color: 'secondary', text: 'Secondary' },
  { id: 3, color: 'success', text: 'Success' },
  { id: 4, color: 'info', text: 'Info' },
  { id: 5, color: 'warning', text: 'Warning' },
  { id: 6, color: 'danger', text: 'Danger' },
  { id: 7, color: 'light', text: 'Light' },
];

// 3)

interface Gradientbuttons {
  color: string
  text: string
  id: number
}

export const Gradientbuttonsdata: Gradientbuttons[] = [
  { id: 1, color: 'primary', text: 'Primary' },
  { id: 2, color: 'secondary', text: 'Secondary' },
  { id: 3, color: 'success', text: 'Success' },
  { id: 4, color: 'info', text: 'Info' },
  { id: 5, color: 'warning', text: 'Warning' },
  { id: 6, color: 'danger', text: 'Danger' }
];

// 4)

interface Lightbuttons {
  color: string
  text: string
  class: string
  id: number
}

export const Lightbuttonsdata: Lightbuttons[] = [
  { id: 1, color: 'primary', text: 'Primary', class: '' },
  { id: 2, color: 'secondary', text: 'Secondary', class: '' },
  { id: 3, color: 'success', text: 'Success', class: '' },
  { id: 4, color: 'info', text: 'Info', class: '' },
  { id: 5, color: 'warning', text: 'Warning', class: '' },
  { id: 6, color: 'danger', text: 'Danger', class: '' },
  { id: 6, color: 'dark', text: 'Dark', class: 'text-dark' }
];
//5)OUTLINE BUTTONS ,ROUNDED BUTTONS and ROUNDED OUTLINE BUTTONS

interface Outlinebuttons {
  color: string
  text: string
  class: string
  id: number
}

export const Outlinebuttonsdata: Outlinebuttons[] = [
  { id: 1, color: 'primary', text: 'Primary', class: '' },
  { id: 2, color: 'secondary', text: 'Secondary', class: '' },
  { id: 3, color: 'success', text: 'Success', class: '' },
  { id: 4, color: 'info', text: 'Info', class: '' },
  { id: 5, color: 'warning', text: 'Warning', class: '' },
  { id: 6, color: 'danger', text: 'Danger', class: '' },
  { id: 6, color: 'dark', text: 'Dark', class: 'text-dark' },
  { id: 7, color: 'light', text: 'Light', class: '' }
];

// 6)BUTTON WITH LOADING ANIMATION

interface Buttonwithloadinganimation {
  color: string
  class: string
  id: number
}

export const Buttonwithloadinganimationdata: Buttonwithloadinganimation[] = [
  { id: 1, color: 'secondary', class: 'spiner' },
  { id: 3, color: 'success', class: 'spiner' },
  { id: 2, color: 'warning', class: 'spiner' },
  { id: 4, color: 'primary', class: 'loaders' },
  { id: 5, color: 'danger', class: 'loaders' },
  { id: 6, color: 'info', class: 'loaders' }
];

// 7)BUTTON WITH ICONS

interface Buttonwithicons {
  color: string
  icon: string
  text: string
  id: number
}

export const Buttonwithiconsdata: Buttonwithicons[] = [
  { id: 1, color: 'dark', icon: 'upload', text: '' },
  { id: 3, color: 'warning', icon: 'heart', text: 'I like' },
  { id: 2, color: 'outline-success', icon: 'check', text: '' },
  { id: 4, color: 'outline-primary', icon: 'plus', text: 'More' },
  { id: 5, color: 'secondary-light', icon: 'link', text: '' },
  { id: 6, color: 'info-light', icon: 'message-circle', text: 'Comment' }
];

// 8)ICON BUTTONS
interface Iconbuttons {
  color: string
  icon: string
  class: string
  id: number
}
export const Iconbuttonsdata: Iconbuttons[] = [
  { id: 1, color: 'primary', icon: 'activity', class: '' },
  { id: 3, color: 'dark', icon: 'github', class: '' },
  { id: 2, color: 'success', icon: 'bell', class: '' },
  { id: 4, color: 'warning', icon: 'star', class: '' },
  { id: 5, color: 'danger', icon: 'trash', class: 'd-none d-sm-flex' },
  { id: 6, color: 'purple', icon: 'bar-chart', class: 'd-none d-sm-flex' }
];
// end buttons


//badges

//BORDER BUTTONS WITH SQUARE BADGES
interface Borderbuttons {
  color: string
  icon: string
  class: string
  id: number
}

export const Borderbuttonsdata: Borderbuttons[] = [
  { id: 1, color: 'primary', icon: 'activity', class: '2' },
  { id: 3, color: 'success', icon: 'github', class: '65' },
  { id: 2, color: 'secondary', icon: 'bell', class: '1' },
  { id: 4, color: 'info', icon: 'star', class: '5333' }
];

//BUTTONS WITH ROUNDED BADGES
interface Buttonswithroundedbadges {
  color: string
  icon: string
  class: string
  id: number
}

export const Buttonswithroundedbadgesdata: Buttonswithroundedbadges[] = [
  { id: 1, color: 'info', icon: 'activity', class: '3' },
  { id: 3, color: 'primary', icon: 'github', class: '22' },
  { id: 2, color: 'secondary', icon: 'bell', class: '145' },
  { id: 4, color: 'success', icon: 'star', class: '3225' }
];

//Border buttons with rounded Badges

interface Borderbuttonswithroundedbadges {
  color: string
  class: string
  id: number
}

export const Borderbuttonswithroundedbadgesdata: Borderbuttonswithroundedbadges[] = [
  { id: 1, color: 'primary', class: '2' },
  { id: 3, color: 'success', class: '65' },
  { id: 2, color: 'secondary', class: '43' },
  { id: 4, color: 'info', class: '563' }
];

//LINK BADGES

interface Linkbadges {
  color: string
  text: string
  class1: string
  class: string
  class2: string
  id: number
}

export const Linkbadgesdata: Linkbadges[] = [
  { id: 1, text: 'Primary', color: 'primary', class1: '22', class2: 'info', class: '' },
  { id: 3, text: 'Success', color: 'success', class1: 'New', class2: '', class: '' },
  { id: 2, text: 'Info', color: 'info', class1: '5', class2: '', class: '' },
  { id: 4, text: 'Warning', color: 'warning', class1: '', class2: 'badge-pill ', class: 'fe fe-plus-circle tx-14' },
  { id: 5, text: 'Danger', color: 'danger', class1: 'Updated', class2: 'badge-pill ', class: '' }
];



//BADGES

interface Badges {
  color: string
  class: string
  text: string
  id: number
}

export const Badgesdata: Badges[] = [
  { id: 1, color: 'primary', class: 'my-2', text: 'Primary' },
  { id: 2, color: 'secondary', class: '', text: 'Secondary' },
  { id: 3, color: 'success', class: '', text: 'Success' },
  { id: 4, color: 'danger', class: '', text: 'Danger' },
  { id: 5, color: 'warning', class: '', text: 'Warning' },
  { id: 6, color: 'info', class: '', text: 'Info' },
  { id: 7, color: 'light', class: '', text: 'Light' },
  { id: 8, color: 'dark', class: '', text: 'Dark' }
];

interface Badges1 {
  color: string
  class: string
  text: string
  id: number
}

export const Badgesdata1: Badges1[] = [
  { id: 1, color: 'primary', class: 'my-2', text: 'Primary' },
  { id: 2, color: 'secondary', class: '', text: 'Secondary' },
  { id: 3, color: 'success', class: '', text: 'Success' },
  { id: 4, color: 'danger', class: '', text: 'Danger' },
  { id: 5, color: 'warning', class: '', text: 'Warning' },
  { id: 6, color: 'info', class: '', text: 'Info' },
  { id: 7, color: 'light', class: '', text: 'Light' },
  { id: 8, color: 'dark', class: '', text: 'Dark' }
];


//Dropdowns
// 1)
interface Basic1 {
  color: string
  id: number
}

export const Basicdata1: Basic1[] = [
  { id: 1, color: 'primary' },
  { id: 2, color: 'secondary' },
  { id: 3, color: 'info' },
];

// 2)ROUNDED SPLIT BUTTON DROPDOWNS , OUTLINE SPLIT BUTTON DROPDOWNS , ROUNDED OUTLINE SPLIT BUTTON DROPDOWNS and OUTLINE SPLIT BUTTON DROPDOWNS

interface Roundedsplitdropdowns {
  color: string
  id: number
}

export const Roundedsplitdropdownsdata1: Roundedsplitdropdowns[] = [
  { id: 1, color: 'primary' },
  { id: 2, color: 'secondary' },
  { id: 3, color: 'info' },

];

// 3)ACTIVE MENU ITEM
interface Activemenu {
  color: string
  id: number
}

export const Activemenudata: Activemenu[] = [
  { id: 1, color: 'warning' },
  { id: 2, color: 'teal' },
  { id: 3, color: 'secondary' },
  { id: 4, color: 'danger' }

];
// 4)DISABLED MENU ITEM
interface Disabledmenu {
  color: string
  id: number
}

export const Disabledmenudata: Disabledmenu[] = [
  { id: 1, color: 'primary' },
  { id: 2, color: 'teal' },
  { id: 3, color: 'danger' },
  { id: 4, color: 'info' }

];

// 5)DROPDOWN HEADER
interface dropdownheader {
  color: string
  id: number
}

export const dropdownheaderdata: dropdownheader[] = [
  { id: 1, color: 'secondary' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'info' },
  { id: 4, color: 'warning' }

];

// 6)DROPDOWN DIVIDER

interface dropdowndivider {
  color: string
  id: number
}

export const dropdowndividerdata: dropdowndivider[] = [
  { id: 1, color: 'info' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'danger' },
  { id: 4, color: 'warning' }

];

// 7)DROPDOWN WITH ICONS

interface dropdownwithicons {
  color: string
  class: string
  id: number
}

export const dropdownwithiconsdata: dropdownwithicons[] = [
  { id: 1, color: 'danger', class: 'mail' },
  { id: 2, color: 'info', class: 'more-horizontal' },
  { id: 3, color: 'secondary', class: 'more-vertical' },
  { id: 4, color: 'outline-primary', class: 'settings ' }

];