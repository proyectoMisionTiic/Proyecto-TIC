import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";

const GestionUsuarios = () => {
  return (
    <body className="flex">
           <div className="self-center   container p-20 ml-20 mr-20 mt-10 w-full ">
        {/* Inicio registro de usuarios */}
        <div className="titulo">Registro de Usuarios</div>
        <form action="#">
          <div className="detalles-producto">
            <div className="input-box">
              <span className="detalles">Nombre</span>
              <input type="text" placeholder="Ingrese nombres " required />
            </div>

            <div className="input-box">
              <span className="detalles">Apellido</span>
              <input type="text" placeholder="Ingrese apellidos " required />
            </div>

            <div className="input-box">
              <span className="detalles">Cédula </span>
              <input type="number" placeholder="Ingrese cédula " required />
            </div>

            <div className="input-box">
              <span className="detalles">Email</span>
              <input type="email" placeholder="Ingrese el email " required />
            </div>

            <div className="input-box">
              <span className="detalles">Rol</span>
              <select
                className="border-2"
                name="brand"
                required
                defaultValue={0}
              >
                <option disabled value={0}>
                  Seleccione un rol
                </option>
                <option value="rol"> Administrador </option>
                <option value="rol"> Vendedor </option>
              </select>
            </div>

            <div className="input-box">
              <span className="detalles">Estado</span>
              <select
                className="border-2"
                name="brand"
                required
                defaultValue={0}
              >
                <option disabled value={0}>
                  Seleccione un estado
                </option>
                <option value="autorizado"> Autorizado </option>
                <option value="pendiente"> Pendiente </option>
                <option value="no autorizado"> No Autorizado </option>
              </select>
            </div>
          </div>
          {/* Fin registro*/}

          {/* Botones de buscar, modificar y registrar */}

          <div className="botones">  
            <div className="button">
              <input type="submit" value="Registrar usuario" />
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default GestionUsuarios;
