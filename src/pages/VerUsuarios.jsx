import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";

const usuariosBackend = [
  {
    nombre: "Juan",
    apellido: "Montoya",
    cedula: "123456789",
    email: "juanmontoya@gmail.com",
    rol: "Administrador",
    estado: "Pendiente",
  },
  {
    nombre: "Andrea",
    apellido: "Gomez",
    cedula: "987654321",
    email: "andgomez@hotmail.com",
    rol: "Vendedor",
    estado: "Autorizado",
  },
  {
    nombre: "Santiago",
    apellido: "Cadavid",
    cedula: "145623698",
    email: "santicadv@hotmail.com",
    rol: "Vendedor",
    estado: "Pendiente",
  },
];
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
const VerUsuarios = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    //obtener lista de usuarios
    setUsuarios(usuariosBackend);
  }, []);

  useEffect(() => {}, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <TablaUsuarios listaUsuarios={usuarios} />
      </div>
    </div>
  );
};

const TablaUsuarios = ({ listaUsuarios }) => {
  useEffect(() => {
    console.log(
      "este es el listado de usuarios en el componente de tabla",
      listaUsuarios
    );
  }, [listaUsuarios]);
  return (
    <div className="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div class="md:px-32 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-900 text-white">
              <tr>
                <th class="text-xl w-2 py-4 px-2 text-left uppercase font-semibold">
                  Nombre
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Apellido
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Cedula
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Correo electronico
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Rol
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Estado
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {listaUsuarios.map((usuario) => {
                return (
                  <tr>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.cedula}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.estado}</td>

                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Editar
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="text-center modal-title"
                              id="exampleModalLabel"
                            >
                              Editar Usuario
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
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

                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Cerrar
                              </button>

                              <button
                                type="submit"
                                value="Guardar"
                                class="btn btn-primary"
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

export default VerUsuarios;
