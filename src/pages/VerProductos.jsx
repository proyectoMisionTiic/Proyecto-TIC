import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { nanoid } from 'nanoid';

const options = { method: "GET", url: "http://localhost:4000/productos/ver" };

const Tablaproductos = () => {
  const [productos, setproductos] = useState([{}]);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: productos._id,
    nombre: productos.nombre,
    descripcion: productos.descripcion,
    valor: productos.valor,
    cantidad: productos.cantidad,
    estado: productos.estado
  });

  const mostrarMensajep = () => {
    toast.success("productos editado correctamente", {
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
  useEffect(() => {
  axios
    .request(options)
    .then(function (response) {
      Productosbackend = response.data;
      setproductos(Productosbackend);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[]);

    const actualizarProducto = async () => {
      //enviar la info al backend
      const options = {
        method: 'PATCH',
        url: `http://localhost:4000/productos/${productos._id}/`,
        headers: { 'Content-Type': 'application/json' },
        data: { ...infoNuevoProducto },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('Producto modificado con éxito');
        })
        .catch(function (error) {
          toast.error('Error modificando el Producto');
          console.error(error);
        });
    };


  return (
    <div classNameName="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="text-xl w-2 py-4 px-2 text-left uppercase font-semibold">
                  ID
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Nombre
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Descripción
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Cantidad
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Valor_unitario
                </th>
                <th className="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody >
              {productos.map((xd)  => {
                return (
                  <tr key={nanoid()}>
                    <td>{xd._id}</td>
                    <td>{xd.nombre}</td>
                    <td>{xd.descripcion}</td>
                    <td>{xd.valor}</td>
                    <td>{xd.cantidad}</td>

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
                            <h5 className="modal-title" id="exampleModalLabel">
                              Editar productos
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
                            
                            <form className="w-full max-w-sm align-center">
                              <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                  <label
                                    classNameName="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="inline-full-name"
                                  >
                                    Nuevo Nombre del productos
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    value={infoNuevoProducto.nombre}
                                    onChange={(e) =>
                                      setInfoNuevoProducto({
                                        ...infoNuevoProducto,
                                        nombre: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                  <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="inline-full-name"
                                  >
                                    Nueva Descripción
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    // value={producto.descripcion}
                                    onChange={(e) =>
                                      setInfoNuevoProducto({
                                        ...infoNuevoProducto,
                                        descripcion: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                  <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="inline-full-name"
                                  >
                                    Nueva cantidad
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="number"
                                    // value={producto.cantidad}
                                    onChange={(e) =>
                                      setInfoNuevoProducto({
                                        ...infoNuevoProducto,
                                        cantidad: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                  <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="inline-full-name"
                                  >
                                    Nuevo Valor unitario
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="number"
                                    // value={producto.valor}
                                    onChange={(e) =>
                                      setInfoNuevoProducto({
                                        ...infoNuevoProducto,
                                        valor: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
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
                              onClick={mostrarMensajep,actualizarProducto}
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
