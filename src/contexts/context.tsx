import { createContext, useReducer } from "react"; //função que cria o context
import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";
import {
  ThemeType,
  themeInitialState,
  themeReducer,
} from "../reducers/themeReducer";

type Props = {
  children: React.ReactNode;
};
type initialStateType = {
  user: UserType;
  theme: ThemeType;
};
type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState, //valor inicial do reducer.
  theme: themeInitialState,
}; //inicializando o state do contexto

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
  theme: themeReducer(state.theme, action),
}); /*criando o reducer que engloba os dois outros redeucers (userReducer e themeReducer) */

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState); //Usando o mainReducer
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}; // O provider é um componente de bolha do context

/*  Estrutura do reducer: const [state, dispatch] = useReducer(reducer, initialState);
  1- state são os dados que vou guardar nesse reducer.
  2- dispach é uma função que passa o type e o payload (opcional) que serão usados na função reducer. A 
  função criada para executar uma ação, por exemplo mainReducer, só serve para passar o dispatch.
  3- reducer é uma função: const reducer = (state, action) => {} 1o parâmetro 'state' é o valor atual do 
  reducer, 2o parâmetro 'action' é que ação eu quero executar. Ou seja, a função reducer é executada sempre 
  que quero alterar algo no reducer.
  4- initialState é o valor inicial do reducer, basta eu criar a variável initialState e inicializa-la */
