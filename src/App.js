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
        `q=${busqueda}&` +
        `per_pages=${imagenesPorPagina}&` +
        `page=${paginaactual}`;

      const respuesta = await axios.get(url);
      guardarImagenes(respuesta.data.hits);

      const calcularTotalPaginas = Math.ceil(
        respuesta.data.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);

      const imgContainer = document.querySelector(".img-container");
      imgContainer.scrollIntoView({ behavior: "smooth" });
    };
    consultarApi();
  }, [busqueda, paginaactual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (paginaactual === 1) return;
    guardarPaginaActual(nuevaPaginaActual);
  };
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpaginas) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center img-container">
        <ListaImagen imagenes={imagenes} />
      </div>
      {paginaactual === 1 ? null : (
        <button
          type="button"
          onClick={paginaAnterior}
          className="btn btn-success mr-1"
        >
          Anterior
        </button>
      )}
      {paginaactual === totalpaginas ? null : (
        <button
          type="button"
          onClick={paginaSiguiente}
          className="btn btn-success mr-1"
        >
          Siguiente
        </button>
      )}
    </div>
  );
}

export default App;
