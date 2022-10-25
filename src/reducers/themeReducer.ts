import { reducerActionType } from "../types/reducerActionType";

export type ThemeType = {
  status: "dark" | "light";
  lightColors: {
    backgroundColor: string;
    color: string;
  };
  darkColors: {
    backgroundColor: string;
    color: string;
  };
};

export const themeInitialState: ThemeType = {
  status: "light",
  lightColors: {
    backgroundColor: "white",
    color: "black",
  },
  darkColors: {
    backgroundColor: "black",
    color: "white",
  },
};

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
  // state: valor atual do reducer, action: ação que vai ser executada
  switch (action.type) {
    case "CHANGE_STATUS":
      return { ...state, status: action.payload.status };
    //Quando o type for CHANGE_NAME eu retorno uma cópia do state atual, mudando o name para o que está no payload
  }

  return state;
};
