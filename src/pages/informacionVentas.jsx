import React, { useEffect, useState } from "react";
import "../styles/Style-ventas.css";
import { toast, ToastContainer } from "react-toastify";
import { obtenerVenta, editarVenta } from "../utils/api.js";

import { nanoid } from "nanoid";

const TablaVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const fetchVentas = async () => {
      await obtenerVenta(
        (response) => {
          setVentas(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
    };
    console.log("Las ventas son ", ventas);
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchVentas();
    }
  }, [ejecutarConsulta]);

  return (
    <div classNameName="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200"></div>
        <Tabla listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
      </div>
    </div>
  );
};

export default TablaVentas;

const Tabla = ({ listaVentas, ventas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltrados, setVentasFiltrados] = useState(listaVentas);

  useEffect(() => {
    setVentasFiltrados(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);

  return (
    <div className="andrew-container bg-gray-900">
 
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

      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <tr>
          <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              ID Venta
            </th>
            <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Valor total
            </th>
              <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Fecha de venta
            </th>
            <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Documento cliente
            </th>
            <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Nombre cliente
            </th>
            <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Nombre vendedor
            </th>
            <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Productos
            </th>
            <th class=" text-xl py-3 px-4 uppercase font-semibold ">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {ventasFiltrados.map((ventas) => {
            return (
              <FilaVentas
                key={nanoid()}
                ventas={ventas}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaVentas = ({ ventas, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    _id: ventas._id,
    valorTotal: ventas.valorTotal,
    fecha: ventas.fecha,
    documentoCliente: ventas.documentoCliente,
    nombreCliente: ventas.nombreCliente,
    nombreVendedor: ventas.nombreVendedor,
    productos: ventas.productos,
  });

  const actualizarVenta = async () => {
    await editarVenta(
      ventas._id,
      {
        valorTotal: infoNuevaVenta.valorTotal,
        fecha: infoNuevaVenta.fecha,
        documentoCliente: infoNuevaVenta.documentoCliente,
        nombreCliente: infoNuevaVenta.nombreCliente,
        nombreVendedor: infoNuevaVenta.nombreVendedor,
        productos: infoNuevaVenta.productos,
      },
      (response) => {
        toast.success("Venta modificada con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        console.log("errorrrrrrrrrrrrr");
        toast.error("Error modificando la venta");
        console.error(error);
      }
    );
  };

  return (
    <tr>
      {edit ? (
        <>
          <td className="text-center">{infoNuevaVenta._id.slice(20)}</td>
          <td>
            <input
              className="bg-gray-50 text-gray-800 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="text"
              value={infoNuevaVenta.valorTotal}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  valorTotal: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 text-gray-800 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevaVenta.fecha}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  fecha: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 text-gray-800 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevaVenta.documentoCliente}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  documentoCliente: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 text-gray-800 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevaVenta.nombreCliente}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  nombreCliente: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 text-gray-800 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevaVenta.nombreVendedor}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  nombreVendedor: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 text-gray-800 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevaVenta.productos}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  productos: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td className="text-center text-gray-800">{ventas._id.slice(20)}</td>
          <td className="text-center text-gray-800">{ventas.valorTotal}</td>
          <td className="text-center text-gray-800">{ventas.fecha}</td>
          <td className="text-center text-gray-800">{ventas.documentoCliente}</td>
          <td className="text-center text-gray-800">{ventas.nombreCliente}</td>
          <td className="text-center text-gray-800">{ventas.nombreVendedor}</td>
          <td className="text-center text-gray-800">{ventas.productos}</td>
        </>
      )}
      <td className="flex my-4 ">
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <i
                onClick={() => actualizarVenta()}
                className="fas fa-check text-green-700 hover:text-green-500"
              />

              <i
                onClick={() => setEdit(!edit)}
                className="fas fa-ban text-yellow-700 hover:text-yellow-500"
              />
            </>
          ) : (
            <>
              <i
                onClick={() => setEdit(!edit)}
                className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
              />

              <i className="fas fa-trash text-red-700 hover:text-red-500" />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
