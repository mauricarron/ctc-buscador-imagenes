import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  const [busqueda, guardarBusqueda] = useState("");

  useEffect(() => {
    if (busqueda === "") return;
    const consultarApi = async () => {
      const API_KEY = "18295173-25b8442835d7e79f6753c167e";
      const imagenesPorPagina = "30";
      const url =
        `https://pixabay.com/api/` +
        `?key=${API_KEY}&` +
        `q=${imagenesPorPagina}`;

      const respuesta = await axios.get(url);
      console.log(respuesta.data.hits);
    };
    consultarApi();
  }, [busqueda]);
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
    </div>
  );
}

export default App;
