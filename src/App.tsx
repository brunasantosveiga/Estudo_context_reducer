import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { Context } from "./contexts/context";

function App() {
  const { state, dispatch } = useContext(Context);

  const handleSwitchTheme = () => {
    if (state.theme.status === "light") {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
        },
      });
    }
  }; //Função que passa o dispatch

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor:
            state.theme.status === "light"
              ? state.theme.lightColors.backgroundColor
              : state.theme.darkColors.backgroundColor,
          color:
            state.theme.status === "light"
              ? state.theme.lightColors.color
              : state.theme.darkColors.color,
        }}
      >
        <h1>Título da página</h1>
        <p>Tema: {state.theme.status}</p>
        <button onClick={handleSwitchTheme}>Mudar Tema</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
/* toda a aplicação esta dentro do ContextProvider, ou seja, o contexto vai estar disponivel em toda a 
aplicação. Aqui basta importar o ContextProvider. */
export default App;

/*Posso colocar o BrowserRouter dentro do <ContextProvider></ContextProvider> para conseguir acessar as 
informações do contexto em todas as páginas. Para acessar as informações do contexto no App.tsx preciso
colocar o <App/> dentro do <ContextProvider></ContextProvider> no arquivo index.tsx ( e onde for usar o 
ContextProvider preciso importar o ContextProvider do context)*/
