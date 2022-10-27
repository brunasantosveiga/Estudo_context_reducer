import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../contexts/context";

export const SignUp = () => {
  const { state, dispatch } = useContext(Context); //vou usar todos os valores do Context

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: e.target.value,
      },
    });
  }; //Função que passa o dispatch

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_AGE",
      payload: {
        age: parseInt(e.target.value),
      },
    });
  }; //Função que passa o dispatch

  return (
    <div>
      <h3>Tela de cadastro:</h3>
      <span>Nome: </span>
      <input type="text" value={state.user.name} onChange={handleNameChange} />
      <br />
      <span>Idade: </span>
      <input
        type="number"
        value={state.user.age === 0 ? "" : state.user.age}
        onChange={handleAgeChange}
      />
      <br />
      <br />
      <Link style={{ backgroundColor: "#fff" }} to="/exibir">
        Mostrar dados cadastrados
      </Link>
    </div>
  );
};
