import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import ListaImagen from "./components/ListaImagenes";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    if (busqueda === "") return;
    const consultarApi = async () => {
      const API_KEY = "18295173-25b8442835d7e79f6753c167e";
      const imagenesPorPagina = 30;
      const url =
        `https://pixabay.com/api/` +
        `?key=${API_KEY}&` +
        `q=${imagenesPorPagina}`;

      const respuesta = await axios.get(url);
      guardarImagenes(respuesta.data.hits);

      const calcularTotalPaginas = Math.ceil(
        respuesta.data.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListaImagen imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
