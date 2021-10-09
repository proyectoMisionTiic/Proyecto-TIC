import React, { useEffect, useState, useRef } from 'react';
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


const GestionProductos = () => {
  const mostrarMensajevp = () => {
    toast.success("Producto Registrado Correctamente", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const form=useRef(null)

  const submitformulario = async (e) => {
    e.preventDefault();
    const data=new FormData(form.current);
  
    //nuevoProducto (objeto vacio) almacena los productos en un diccionario
    const nuevoProducto = {};
      data.forEach((value, key) => {
        nuevoProducto[key] = value;
      });
      console.log("Datos enviados", nuevoProducto);
      
      const options = {
        method: 'POST',
        url: 'http://localhost:3000/productos/nuevo/',
        headers: { 'Content-Type': 'application/json' },
        data: { nombre: nuevoProducto.nombre, descripcion: nuevoProducto.descripcion, valor: nuevoProducto.valor, 
          cantidad: nuevoProducto.cantidad, estado: nuevoProducto.estado}
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('Producto agregado con éxito');
        })
        .catch(function (error) {
          console.error(error);
          toast.error('Error creando el producto');
        });

  };

  return (
    <body className="flex">
      <div className="self-center   container p-10 ml-20 mr-20 mt-10 w-full ">
        {/* Inicio Seccion de input del usuario */}
        <div className="titulo">Registro de productos</div>
        <form onSubmit={submitformulario} ref={form}>
          <div className="detalles-producto">
            {/* <div className="input-box">
              <span className="detalles">ID</span>
              <input type="number" placeholder="Ingrese el ID " name='id' required />
            </div> */}
            <div className="input-box">
              <span className="detalles">Nombre</span>
              <input 
              type="text" 
              placeholder="Ingrese el nombre " 
              name='nombre'
              required />
            </div>
            <div className="input-box">
              <span className="detalles">Descripción</span>
              <input
                type="text"
                placeholder="Ingrese una descripción "
                name='descripcion'
                required
              />
            </div>
            <div className="input-box">
              <span className="detalles">Valor unitario</span>
              <input type="number" placeholder="Ingrese el valor " 
              name='valor'
              required />
            </div>
            <div className="input-box centrado">
              <span className="detalles centrado">Cantidad</span>
              <input
                type="number"
                className="centrado"
                placeholder="Ingrese la cantidad "
                name='cantidad'
                required
              />
            </div>
          </div>
          {/* Final seccion de input */}

          {/* Seccion de ESTADO y BOTONES */}
          <div className="estado-detalles">
            <input type="radio" name="estado" id="punto-1" value='disponible' required />
            <input type="radio" name="estado" id="punto-2" value='No disponible'/>
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
              <input                
                type="submit"
                value="Registrar producto"
              />
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
