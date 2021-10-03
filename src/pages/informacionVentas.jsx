import { ToastContainer, toast } from "react-toastify";
import React from "react";
import "../styles/Style-ventas.css";

const mostrarMensaje = () => {
  toast.success("Venta editada correctamente", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const informacionVentas = () => {
  return (
    <div>
      <div className="andrew-container bg-gray-900">
        {/* Inicio Seccion de input del usuario */}
        <div className="andrew-titulo mb-10 ">Informacion Ventas</div>

        {/* Barra de busqueda */}
        <div className="flex p-6 w-1/4 -m-5 ">
          <div className="bg-white flex  items-center rounded-md shadow-xl ">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="number"
              placeholder="Búsqueda por id"
            />
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <i class="bx bx-search text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Fin barra */}

        <form className="" action="#">
          <div className="andrew-detalles-producto ">
            <table class="min-w-full bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">
                    ID Venta
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Valor Total
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Fecha De Venta
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Documento Cliente
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Nombre Vendedor
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Nombre Cliente
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Productos
                  </th>
                  <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr class="bg-gray-100">
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">0</td>
                  <td class=" text-left py-3 px-4">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Editar
                    </button>
                    {/* Modal del boton editar */}
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Editar venta
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
                          <form class="w-full max-w-sm align-center">
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nuevo Valor Total
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nueva fecha
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nuevo Documento cliente
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nuevo nombre vendedor
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nuevo nombre cliente
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                              </div>
                            </div>
                            

                            
                          </form>
                          </div>
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
                      {/* fin modal */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};

export default informacionVentas;
