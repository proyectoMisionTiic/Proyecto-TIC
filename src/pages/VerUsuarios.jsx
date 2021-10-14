import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from 'nanoid';
import axios from "axios";

const options = { method: "GET", url: "http://localhost:4000/usuarios/listar" };

const TablaUsuarios = () => {
  const [usuarios, setusuarios] = useState([{}]);

  const mostrarMensaje = () => {
    toast.success("Usuario editado correctamente", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  let Usuariosbackend = [{}];

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        Usuariosbackend = response.data;
        setusuarios(Usuariosbackend);
      })
      .catch(function (error) {
        console.error(error);
      });

  },[])
  return (
    <div className="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="text-xl w-2 py-4 px-2 text-left uppercase font-semibold">
                  Nombre
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Apellido
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Cedula
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Correo electronico
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Rol
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Estado
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => {
                return (
                  <tr key={nanoid()}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.cedula}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.estado}</td>
                    <i type="submit" className="fas fa-broom"></i>

                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Editar
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="text-center modal-title"
                              id="exampleModalLabel"
                            >
                              Editar Usuario
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form action="#">
                              <div className="detalles-producto">
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
                                    <option value="autorizado">
                                      {" "}
                                      Autorizado{" "}
                                    </option>
                                    <option value="pendiente">
                                      {" "}
                                      Pendiente{" "}
                                    </option>
                                    <option value="no autorizado">
                                      {" "}
                                      No Autorizado{" "}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </form>

                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Cerrar
                              </button>

                              <button
                                type="submit"
                                value="Guardar"
                                className="btn btn-primary"
                                onClick={mostrarMensaje}
                              >
                                Guardar cambios
                              </button>
                            </div>
                          </div>
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
                      </div>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaUsuarios;
