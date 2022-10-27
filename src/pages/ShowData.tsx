import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/context";

export const ShowData = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      {state.user.name && state.user.age !== 0 && (
        <>
          Meu nome é {state.user.name}.
          <br />
          Eu tenho {state.user.age} anos.
          <br />
        </>
      )}
      {!state.user.name && state.user.age === 0 && (
        <p>Não há informações para exibir.</p>
      )}
      <br />
      <Link style={{ backgroundColor: "#fff" }} to="/">
        Voltar para Tela de cadastro
      </Link>
    </div>
  );
};
//Para usar os valores do context em outro componente eu importo o useContext e o Context que criei
