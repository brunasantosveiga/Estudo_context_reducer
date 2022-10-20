import { createContext, useReducer } from "react"; //função que cria o context
import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

type Props = {
  children: React.ReactNode;
};
type initialStateType = {
  user: UserType;
};
type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState, //valor inicial do reducer. Se tiver outros reducers coloco aqui tbm com um nome
};

// estrutura do reducer: const [state, dispatch] = useReducer(reducer, initialState);

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
  /* só para dar um valor inicial ao dispatch, pois se algo executar o dispatch vindo do context antes dele 
  ter configurado os reducers, ele vai usar essa função que não faz nada*/
}); /* Criando o context, state e dispatch serão globais */

/*dispach é uma função que passa o type e o payload (opcional) que serão usados na função reducer. A 
  função criada para executar uma ação, por exemplo handleAddButton, só serve para passar o dispatch. */

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
});

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// O provider é um componente de bolha do context
