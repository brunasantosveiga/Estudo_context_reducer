import { reducerActionType } from "../types/reducerActionType";

export type UserType = {
  name: string;
  age: number;
};

export const userInitialState: UserType = {
  name: "",
  age: 0,
};

export const userReducer = (state: UserType, action: reducerActionType) => {
  // state: valor atual do reducer, action: ação que vai ser executada
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    //Quando o type for CHANGE_NAME eu retorno uma cópia do state atual, mudando o name para o que está no payload
    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
  }

  return state;
};
