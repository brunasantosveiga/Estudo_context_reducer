import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { ContextProvider } from "./contexts/context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>titulo da página</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
/* toda a aplicação esta dentro do ContextProvider, ou seja, o contexto vai estar disponivel em toda a 
aplicação. Aqui basta importar o ContextProvider. */
export default App;
