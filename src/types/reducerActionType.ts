export type reducerActionType = {
  type: string; // tipo da ação que será executada. Ex: CHANGE_NAME (mudar nome)
  payload: {
    [key: string]: any; // Dado que quero enviar. Ex: name: 'Ana' ; age: 30
  } /*esse objeto payload pode ter qualquer chave desde que ela seja uma string, e o valor das chaves pode 
  ser qualquer um (por isso o any). Isso é uma feature do TS chamada de mapped types.*/;
};
