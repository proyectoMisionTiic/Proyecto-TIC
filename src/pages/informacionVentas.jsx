import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { toast, ToastContainer } from "react-toastify";
import {
  obtenerVenta,
  editarVenta,
  eliminarVenta,
} from "../utils/api.js";
import { nanoid } from "nanoid";

const Tablaventas = () => {
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
    if (ejecutarConsulta) {
      fetchVentas();
    }
  }, [ejecutarConsulta]);

  return (
    <div className="">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200"></div>

        <Tabla listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
      </div>
    </div>
  );
};

export default Tablaventas;

const Tabla = ({ listaVentas, ventas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltrados, setventasFiltrados] = useState(listaVentas);

  useEffect(() => {
    setventasFiltrados(
      listaVentas.filter((elemento) => {
        //elemento._id.includes(busqueda);
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);

  return (
    <table className="m-auto w-11/12 rounded-xl bg-white ">
      <thead className=" bg-gray-900  text-white w-full ">
        <div className="flex p-6 w-full -m-5 ">
          <div className="bg-white flex  items-center rounded-md shadow-xl ">
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="string"
              placeholder="Búsqueda por id"
            />
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <i class="bx bx-search text-3xl"></i>
              </button>
            </div>
          </div>
        </div>

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
          <th className="text-xl w-2 py-4 px-2 text-center uppercase font-semibold">
            ID VENTA
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            DOCUMENTO CLIENTE
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ID VENDEDOR
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            NOMBRE
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            APELLIDO
          </th>

          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ID PRODUCTO
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            NOMBRE PRODUCTO
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            DESCRIPCION
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            VALOR
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            CANTIDAD
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            TOTAL VENTA
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ACCIONES
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
  );
};

const FilaVentas = ({ ventas, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [nuevaVenta, setnuevaVenta] = useState({
    _id: ventas._id.slice(20),

    documento: ventas.documento,

    _idVendedor: ventas.vendedor._id.slice(15),
    nombre: ventas.vendedor.nombre,
    apellido: ventas.vendedor.apellido,
    cedula: ventas.vendedor.cedula,
    producto: ventas.productos[0].nombre,
    descripcion: ventas.productos[0].descripcion,
    valor: ventas.productos[0].valor,
    cantidad: ventas.productos[0].cantidad,

    total_venta: ventas.vendedor.total_venta,
  });

  const actualizarVenta = async () => {
    await editarVenta(
      ventas._id,
      {
        documento: nuevaVenta.documento,
        nombre: nuevaVenta.nombre,
        apellido: nuevaVenta.apellido,
        producto: nuevaVenta.producto,
        descripcion: nuevaVenta.descripcion,
        valor: nuevaVenta.valor,
        cantidad: nuevaVenta.cantidad,
        total_venta: nuevaVenta.total_venta,
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

  const borrarVenta = async () => {
    await eliminarVenta(
      ventas._id,
      (response) => {
        console.log(response.data);
        toast.success("Venta eliminada con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando la venta");
      }
    );
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className="text-center"
              type="text"
              value={ventas._id.slice(20)}
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="text"
              value={nuevaVenta.documento}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  documento: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="text-center"
              type="text"
              value={ventas.vendedor._id.slice(20)}
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={nuevaVenta.nombre}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  nombre: e.target.value
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={nuevaVenta.apellido}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  apellido: e.target.value,
                })
              }
            />
          </td>

          <td>
            <input
              className="text-center"
              type="text"
              value={ventas.productos[0]._id.slice(20)}
            />
          </td>

          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="text"
              value={nuevaVenta.producto}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  producto: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="text"
              value={nuevaVenta.descripcion}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  descripcion: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="number"
              value={nuevaVenta.valor}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  valor: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="number"
              value={nuevaVenta.cantidad}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  cantidad: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="number"
              value={nuevaVenta.total_venta}
              onChange={(e) =>
                setnuevaVenta({
                  ...nuevaVenta,
                  total_venta: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td className="text-center">{ventas._id.slice(20)}</td>
          <td className="text-center">{ventas.documento}</td>
          <td className="text-center">{ventas.vendedor._id.slice(20)}</td>
          <td className="text-center">{ventas.vendedor.nombre}</td>
          <td className="text-center">{ventas.vendedor.apellido}</td>
          <td className="text-center">{ventas.productos[0]._id.slice(20)}</td>
          <td className="text-center">{ventas.productos[0].nombre}</td>
          <td className="text-center">{ventas.productos[0].descripcion}</td>
          <td className="text-center">{ventas.productos[0].valor}</td>
          <td className="text-center">{ventas.productos[0].cantidad}</td>
          <td className="text-center">{ventas.vendedor.total_venta}</td>
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
              <i className="fas fa-trash text-red-700 hover:text-red-500"
                  onClick={borrarVenta}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
