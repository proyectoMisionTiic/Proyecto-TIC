import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";



const Productosbackend = [
  {
    ID : "903-550HM",
    Nombre: "Elia",
    Descripción: "Camiseta Rosada",
    Cantidad: "122",
    Valor_unitario: "$44.900",
  },
  {
    ID : "903-1507L",
    Nombre: "Elayne",
    Descripción: "Camiseta blanca y fucsia",
    Cantidad: "88",
    Valor_unitario: "$39.900",
  },
  {
    ID : "019-1505Z",
    Nombre: "Nous",
    Descripción: "Tenis Blancos/Rosados",
    Cantidad: "147",
    Valor_unitario: "$59.900",
  },
  {
    ID : "911-1501x",
    Nombre: "Edna",
    Descripción: "Body + short blanco",
    Cantidad: "95",
    Valor_unitario: "$69.900",
  },{
    ID : "916-9002x",
    Nombre: "Diya",
    Descripción: "Short Demin Azul",
    Cantidad: "56",
    Valor_unitario: "$69.900"
  },{
    ID : "915-5507N",
    Nombre: "Elle",
    Descripción: "vestido lila",
    Cantidad: "74",
    Valor_unitario: "$89.900",
  },
  {
    ID : "916-3642X",
    Nombre: "Ezequil",
    Descripción: "Camiseta + Bermuda azul",
    Cantidad: "96",
    Valor_unitario: "$79.900",
  },
  {
    ID : "915-9264N",
    Nombre: "Mojito",
    Descripción: "Zapatos beige",
    Cantidad: "115",
    Valor_unitario: "$49.900",
  },
  {
    ID : "916-4523X",
    Nombre: "Emerson",
    Descripción: "Jogger",
    Cantidad: "92",
    Valor_unitario: "$69.900",
  },
  {
    ID : "915-9207p",
    Nombre: "A.Elían",
    Descripción: "Pantalón negro",
    Cantidad: "189",
    Valor_unitario: "$89.900",
  },
  {
    ID : "915-4756A",
    Nombre: "Euken",
    Descripción: "Botas",
    Cantidad: "57",
    Valor_unitario: "$129.900",
  },
  {
    ID : "916-3521U",
    Nombre: "Enrico",
    Descripción: "Gorro Tejido Azul/Rojo",
    Cantidad: "92",
    Valor_unitario: "$39.900",
  }
];
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
const VerProductos = () => {
  const [mostrarTablap, setMostrarTablap] = useState(true);
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    //obtener lista de usuarios
    setproductos(Productosbackend);
  }, []);

  useEffect(() => {}, [mostrarTablap]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <Tablaproductos listaproductos={productos} />
      </div>
    </div>
  );
};

const Tablaproductos = ({ listaproductos }) => {
  useEffect(() => {
    console.log(
      "este es el listado de Productos en el componente de tabla",
      listaproductos
    );
  }, [listaproductos]);
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
              {listaproductos.map((producto) => {
                return (
                  <tr>
                    <td>{producto.ID}</td>
                    <td>{producto.Nombre}</td>
                    <td>{producto.Descripción}</td>
                    <td>{producto.Cantidad}</td>
                    <td>{producto.Valor_unitario}</td>
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

export default VerProductos;
