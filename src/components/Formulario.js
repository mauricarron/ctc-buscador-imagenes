import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ guardarBusqueda }) => {
  const [keyword, guardarKeyword] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusqueda(keyword);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Busca una imagen, ejemplo: Football o Café"
            onChange={(e) => {
              guardarKeyword(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group col-md-4">
          <input
            className="btn btn-lg btn-success btn-block"
            type="submit"
            placeholder="Buscar"
          ></input>
          {error ? <Error mensaje="Ingresa un termino para buscar!" /> : null}
        </div>
      </div>
    </form>
  );
};

export default Formulario;
