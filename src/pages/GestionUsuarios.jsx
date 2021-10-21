import React, { useEffect, useState, useRef } from 'react';
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


const GestionUsuarios = () => {
  const mostrarMensaje = () => {
    toast.success("Usuario Registrado Correctamente", {
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
  
    const nuevoUsuario = {};
      data.forEach((value, key) => {
        nuevoUsuario[key] = value;
      });
      console.log("Datos enviados", nuevoUsuario);
      
      const options = {
        method: 'POST',
        url: 'http://localhost:4000/usuarios/crear/',
        headers: { 'Content-Type': 'application/json' },
        data: {   
          nombre: nuevoUsuario.nombre,
          apellido: nuevoUsuario.apellido,
          cedula: nuevoUsuario.cedula,
          email: nuevoUsuario.email,
          estado: nuevoUsuario.estado,
          rol: nuevoUsuario.rol
      },
    };
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('Usuario agregado con éxito');
        })
        .catch(function (error) {
          console.error(error);
          toast.error('Error creando el usuario');
        });

  };

  return (
    <body className="flex">
    <div className="self-center   container p-20 ml-20 mr-20 mt-10 w-full ">
      {/* Inicio registro de usuarios */}
      <div className="titulo">Registro de Usuarios</div>
      <form onSubmit={submitformulario} ref={form}>
        <div className="detalles-producto">
          <div className="input-box">
            <span className="detalles">Nombre</span>
            <input type="text" placeholder="Ingrese nombres " name='nombre' required />
          </div>

          <div className="input-box">
            <span className="detalles">Apellido</span>
            <input type="text" placeholder="Ingrese apellidos " name='apellido' required />
          </div>

          <div className="input-box">
            <span className="detalles">Cédula </span>
            <input type="number" placeholder="Ingrese cédula " name='cedula' required />
          </div>

          <div className="input-box">
            <span className="detalles">Email</span>
            <input type="email" placeholder="Ingrese el email " name='email' required />
          </div>

          <div className="input-box">
            <span className="detalles">Rol</span>
            <select
              className="border-2"
              name='rol'
              required
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un rol
              </option>
              <option value="Administrador" name='rol'> Administrador </option>
              <option value="Vendedor" name='rol'> Vendedor </option>
            </select>
          </div>

          <div className="input-box">
            <span className="detalles">Estado</span>
            <select
              className="border-2"
              name="estado"
              required
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un estado
              </option>
              <option value="autorizado" name='estado'> Autorizado </option>
              <option value="pendiente" name='estado'> Pendiente </option>
              <option value="no autorizado" name='estado'> No Autorizado </option>
            </select>
          </div>
        </div>
        {/* Fin registro*/}

        {/* Botones de buscar, modificar y registrar */}

        <div className="botones">
          <div className="button">
            <input
              // onClick={mostrarMensaje}
              type="submit"
              value="Registrar usuario"
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
    </div>
  </body>
);
};

export default GestionUsuarios;











