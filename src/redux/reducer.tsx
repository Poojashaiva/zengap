interface BodyStyles {
  
  class: string;
}

interface RootState {
  lang: string;
  dir: string;
  datathemecolor: string;
  bgImg: string;
  datawidth: string
  dataposition: string
  dataverticalstyle: string,
  datalayout: string,
  datahorstyle: string
  body: BodyStyles;

}

const initialState: RootState = {
  lang: "en",
  dir: "ltr",
  datathemecolor: "default",
  bgImg: '',
  datawidth: 'fullwidth',
  dataposition: 'fixed',
  dataverticalstyle: 'default',
  datalayout: 'vertical',
  datahorstyle: '',



  body: {
    class: "main-body app sidebar-mini index ",
  },
};

type Action = {
  type: string;
  payload: RootState;
};

const reducer = (state: RootState = initialState, action: Action): RootState => {
  const { type, payload } = action;

  switch (type) {
    case "ThemeChanger":
      return payload;
    default:
      return state;
  }
};

export default reducer;
