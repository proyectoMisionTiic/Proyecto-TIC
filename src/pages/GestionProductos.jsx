import React from 'react'
import "../styles/Style-gestionar-productos.css";
import Nav from '../components/nav';

const GestionProductos = () => {
	return (
		<body>
      <div className="container">
        {/* Inicio Seccion de input del usuario */}
        <div className="titulo">Registro de productos</div>
        <form action="#">
          <div className="detalles-producto">
            <div className="input-box">
              <span className="detalles">ID</span>
              <input type="number" placeholder="Ingrese el ID " required />
            </div>
            <div className="input-box">
              <span className="detalles">Nombre</span>
              <input type="text" placeholder="Ingrese el nombre " required />
            </div>
            <div className="input-box">
              <span className="detalles">Descripción</span>
              <input
                type="text"
                placeholder="Ingrese una descripción "
                required
              />
            </div>
            <div className="input-box">
              <span className="detalles">Valor unitario</span>
              <input type="number" placeholder="Ingrese el valor " required />
            </div>
            <div className="input-box centrado">
              <span className="detalles centrado">Cantidad</span>
              <input
                type="number"
                className="centrado"
                placeholder="Ingrese la cantidad "
                required
              />
            </div>
          </div>
          {/* Final seccion de input */}

          {/* Seccion de ESTADO y BOTONES */}
          <div className="estado-detalles">
            <input type="radio" name="estado" id="punto-1" />
            <input type="radio" name="estado" id="punto-2" />
            <span className="estado-titulo">Estado</span>
            <div className="category">
              <label for="punto-1">
                <span className="punto uno"></span>
                <span className="estado">Disponible</span>
              </label>
              <label for="punto-2">
                <span className="punto dos"></span>
                <span className="estado">No disponible</span>
              </label>
            </div>
          </div>
          <div className="botones">
            <div className="button">
              <input type="submit" value="Buscar por ID" />
            </div>
            <div className="button">
              <input type="submit" value="Modificar producto" />
            </div>
            <div className="button">
              <input type="submit" value="Registrar producto" />
            </div>
          </div>
        </form>
      </div>
      <div className="container-tabla"></div>
    </body>
	);
}

export default GestionProductos
