import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { prettyDOM } from "@testing-library/dom";


const options = {method: 'GET', url: 'http://localhost:4000/productos/ver'};






const Tablaproductos = () => {
  const [productos, setproductos] = useState([{}]);

  const mostrarMensajep = () => {
    toast.success("Producto editado correctamente", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

     let Productosbackend = [{}];
  axios.request(options).then(function (response) {
    Productosbackend = response.data;
    setproductos(Productosbackend);

  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div className="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div class="md:px-32 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-900 text-white">
              <tr>
                <th class="text-xl w-2 py-4 px-2 text-left uppercase font-semibold">
                  ID
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Nombre
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Descripción
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Cantidad
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Valor_unitario
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((xd) => {
                return (
                  <tr>
                    <td>{xd._id}</td>
                    <td>{xd.nombre}</td>
                    <td>{xd.descripcion}</td>
                    <td>{xd.valor}</td>
                    <td>{xd.cantidad}</td>
                    <i type="submit" class="fas fa-broom"></i>

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
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Editar Producto
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
                                  Nuevo Nombre del producto
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nueva Descripción
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nueva cantidad
                                </label>
                              </div>
                              <div class="md:w-2/3">
                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                              </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                              <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                  Nuevo Valor unitario
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
                              onClick={mostrarMensajep}
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

export default Tablaproductos;

