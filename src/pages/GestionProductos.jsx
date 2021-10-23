import React, { useRef, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

const GestionProductos = () => {
  const [valorProducto, setValorProducto] = useState();
  const form = useRef(null);

  const submitformulario = async (e) => {
    e.preventDefault();

    
    const data = new FormData(form.current);

    //nuevoProducto (objeto vacio) almacena los productos en un diccionario
    const nuevoProducto = {};
    data.forEach((value, key) => {
      nuevoProducto[key] = value;
    });


    const options = {
      method: "POST",
      url: "http://localhost:4000/productos/nuevo/",
      headers: { "Content-Type": "application/json" },
      data: {
        nombre: nuevoProducto.nombre,
        descripcion: nuevoProducto.descripcion,
        valor: nuevoProducto.valor,
        cantidad: nuevoProducto.cantidad,
        estado: nuevoProducto.estado,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto agregado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error creando el producto");
      });
      document.getElementById('formproducto').reset();
  };

  return (
    <body className="flex">
      <div className="m-auto self-center   container p-10 w-1/2 ">
        {/* Inicio Seccion de input del usuario */}
        <div className="titulo">Registro de productos</div>
        <form onSubmit={submitformulario} ref={form} id="formproducto">
          <div className="detalles-producto">
            <div className="input-box">
              <span className="detalles">Nombre</span>
              <input
                type="text"
                placeholder="Ingrese el nombre "
                name="nombre"
                required
              />
            </div>
            <div className="input-box">
              <span className="detalles">Descripción</span>
              <input
                type="text"
                placeholder="Ingrese una descripción "
                name="descripcion"
                required
              />
            </div>
            <div className="input-box">
              <span className="detalles">Valor unitario</span>
              <input
                type="number"
                placeholder="Ingrese el valor "
                name="valor"
                required
              />
              {/* <CurrencyFormat
                name="valor"
                value={valorProducto}
                displayType={"input"}
                className="input-box"
                placeholder="Ingrese el valor"
                decimalSeparator={false}
                prefix={"$ "}
                thousandSeparator="."
                required
              /> */}
            </div>

            <div className="input-box">
              <span className="detalles">Cantidad</span>
              <input
                type="number"
                className=""
                placeholder="Ingrese la cantidad "
                name="cantidad"
                required
              />
            </div>
          </div>
          {/* Final seccion de input */}

          {/* Seccion de ESTADO y BOTONES */}
          <div className="w-1/2 m-auto estado-detalles">
            <input
              type="radio"
              name="estado"
              id="punto-1"
              value="disponible"
              required
            />
            <input
              type="radio"
              name="estado"
              id="punto-2"
              value="No disponible"
            />
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
              <input type="submit" value="Registrar producto"/>
            </div>
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Fin seccion de ESTADO y BOTONES */}
      </div>
    </body>
  );
};

export default GestionProductos;
