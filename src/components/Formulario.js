import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Busca una imagen, ejemplo: Football o Café"
          ></input>
        </div>
        <div className="form-group col-md-4">
          <input
            className="btn btn-lg btn-success btn-block"
            type="submit"
            placeholder="Buscar"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
