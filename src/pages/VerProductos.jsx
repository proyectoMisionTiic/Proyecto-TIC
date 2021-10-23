import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { toast, ToastContainer } from "react-toastify";
import {
  obtenerProductos,
  editarProducto,
  eliminarProducto,
} from "../utils/api.js";
import { nanoid } from "nanoid";

const Tablaproductos = () => {
  const [productos, setProductos] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
    };
    if (ejecutarConsulta) {
      fetchProductos();
    }
  }, [ejecutarConsulta]);

  return (
    <div classNameName="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200"></div>
        <Tabla
          listaProductos={productos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      </div>
    </div>
  );
};

export default Tablaproductos;

const Tabla = ({ listaProductos, productos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <table className="m-auto w-11/12 rounded-xl bg-white ">
      <thead className="bg-gray-900 text-white">
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
            ID
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Nombre
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Descripción
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Cantidad
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Valor_unitario
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {productosFiltrados.map((productos) => {
          return (
            <FilaProductos
              key={nanoid()}
              productos={productos}
              setEjecutarConsulta={setEjecutarConsulta}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const FilaProductos = ({ productos, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: productos._id,
    nombre: productos.nombre,
    descripcion: productos.descripcion,
    valor: productos.valor,
    cantidad: productos.cantidad,
    estado: productos.estado,
  });

  const actualizarProducto = async () => {
    await editarProducto(
      productos._id,
      {
        nombre: infoNuevoProducto.nombre,
        descripcion: infoNuevoProducto.descripcion,
        valor: infoNuevoProducto.valor,
        cantidad: infoNuevoProducto.cantidad,
        estado: infoNuevoProducto.estado,
      },
      (response) => {
        toast.success("Producto modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        console.log("errorrrrrrrrrrrrr");
        toast.error("Error modificando el producto");
        console.error(error);
      }
    );
  };

  const borrarProducto = async () => {
    await eliminarProducto(
      productos._id,
      (response) => {
        console.log(response.data);
        toast.success("Producto eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el producto");
      }
    );
  };

  return (
    <tr>
      {edit ? (
        <>
          <td className="text-center">{infoNuevoProducto._id.slice(20)}</td>
          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="text"
              value={infoNuevoProducto.nombre}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  nombre: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevoProducto.descripcion}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  descripcion: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevoProducto.valor}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  valor: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevoProducto.cantidad}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  cantidad: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td className="text-center">{productos._id.slice(20)}</td>
          <td className="text-center">{productos.nombre}</td>
          <td className="text-center">{productos.descripcion}</td>
          <td className="text-center">{productos.valor}</td>
          <td className="text-center">{productos.cantidad}</td>
        </>
      )}
      <td className="flex my-4 ">
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <i
                onClick={() => actualizarProducto()}
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

              <i
                className="fas fa-trash text-red-700 hover:text-red-500"
                onClick={borrarProducto}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
