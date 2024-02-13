/* eslint-disable @typescript-eslint/no-explicit-any */

export const ThemeChanger = (value: any) => async (dispatch: (arg: { type: string; payload: any }) => void) => {
    dispatch({
        type: "ThemeChanger",
        payload: value
    })
  }
  
  