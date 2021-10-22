import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Style-ventas.css";
import { obtenerUsuarios, obtenerProductos, crearVenta } from "../utils/api.js";

const GestionVentas = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);

  useEffect(() => {
    const fetchVendedores = async () => {
      await obtenerUsuarios(
        (response) => {
          setVendedores(response.data);
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    fetchVendedores();
    fetchProductos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const formData = {};
    fd.forEach((value, key) => {
      formData[key] = value;
    });
    // console.log(formData);

    const listaProductos = Object.keys(formData)
      .map((k) => {
        if (k.includes("producto")) {
          return productosTabla.filter((v) => v._id === formData[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    console.log(
      "lista de productos",
      listaProductos,
      "productos tabla",
      productosTabla
    );

    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
      total_venta: formData.total_venta,
      productos: productosTabla,
      documento: formData.documento,
    };
    console.log(datosVenta);

    await crearVenta(
      datosVenta,
      (response) => {
        toast.success("Venta Agregada");
      },
      (error) => {
        console.log("errorrrrr");
        toast.error("Error al agregar");
        console.error(error);
      }
    );
  };

  return (
    <div className="overflow-y-visible">
      <div className=" m-auto andrew-container bg-gray-800 ">
        {/* Inicio Seccion de input del usuario */}
        <div className="andrew-titulo ">Gestionar Ventas</div>

        <form ref={form} onSubmit={submitForm}>
          {/* <div className="text-3xl my-10 m-auto text-center ">
              Ingreso De Productos
            </div> */}
          <div className="flex flex-col">
            <span className="text-center my-2">Vendedor</span>
            <select
              name="vendedor"
              className="text-black p-2 text-center m-auto w-5/12 rounded-md"
              defaultValue={-1}
              required
            >
              <option disabled value={-1}>
                Seleccione un vendedor
              </option>
              {vendedores.map((xd) => {
                return (
                  <option key={nanoid()} value={xd._id}>
                    {`${xd.nombre} ${xd.apellido}`}
                  </option>
                );
              })}
            </select>
          </div>
          <TablaProductos
            productos={productos}
            setProductos={setProductos}
            setProductosTabla={setProductosTabla}
          />

          <div className="flex my-4">
            <span>Total venta</span>
            <input
              type="number"
              className="text-black my-6 mx-6 p-2 rounded-lg "
              name="total_venta"
              required
            />

            <span>Documento cliente</span>
            <input
              type="number"
              className="text-black my-6 mx-6  p-2 rounded-lg"
              name="documento"
              required
            />
          </div>
          <button className="bg-blue-500 andrew-button rounded-lg " type="submit">
            Agregar venta
          </button>
          {/* <div className="andrew-button ">
            <input type="submit" />
          </div> */}
        </form>

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
  );
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
  const [productoAAgregar, setProductoAAgregar] = useState([{}]);
  const [filasTabla, setFilasTabla] = useState([]);

  useEffect(() => {
    setProductosTabla(filasTabla);
  }, [filasTabla, setProductosTabla]);

  const agregarNuevoProducto = () => {
    setFilasTabla([...filasTabla, productoAAgregar]);
    setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
    setProductoAAgregar({});
  };

  const eliminarProducto = (productoAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
    setProductos([...productos, productoAEliminar]);
  };

  const modificarProducto = (producto, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto.id) {
          ft.cantidad = cantidad;
          ft.total = producto.valor * cantidad;
        }
        return ft;
      })
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col ">
        <span className="text-center my-2">Producto</span>
        <select
          className="text-black p-2 text-center m-auto w-5/12 rounded-md"
          value={productoAAgregar._id ?? ""}
          onChange={(e) =>
            setProductoAAgregar(
              productos.filter((v) => v._id === e.target.value)[0]
            )
          }
        >
          <option disabled value="">
            Seleccione un producto
          </option>
          {productos.map((xd) => {
            return (
              <option key={nanoid()} value={xd._id}>
                {`${xd.nombre} - ${xd.descripcion} (${xd.cantidad} und) `}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="button"
        className="bg-blue-500 andrew-button rounded-lg"
        onClick={() => agregarNuevoProducto()}
      >
        Agregar Producto
      </button>
      <table className="min-w-full bg-white rounded-2xl border">
        <thead className="bg-gray-800 text-white ">
          <tr className=" text-white">
            <th className=" text-center py-3 px-4 uppercase font-semibold text-sm">
              ID
            </th>
            <th className=" text-center py-3 px-4 uppercase font-semibold text-sm">
              Producto
            </th>
            <th className="  text-center py-3 px-4 uppercase font-semibold text-sm">
              Descripción
            </th>
            <th className="   text-center py-3 px-4 uppercase font-semibold text-sm">
              Cantidad
            </th>
            <th className="   text-center py-3 px-4 uppercase font-semibold text-sm">
              Valor unitario
            </th>
            <th className="   text-center py-3 px-4 uppercase font-semibold text-sm">
              Precio total
            </th>
            <th className="   text-center py-3 px-4 uppercase font-semibold text-sm">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((xd, index) => {
            return (
              <FilaProductos
                key={xd._id}
                pro={xd}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProductos = ({ pro, index, eliminarProducto, modificarProducto }) => {
  const [producto, setProducto] = useState(pro);
  useEffect(() => {
    console.log("producto", producto);
  }, [producto]);
  return (
    <tr className="bg-white text-black text-center font-normal">
      <td>{producto._id.slice(20)}</td>
      <td>{producto.nombre}</td>
      <td>{producto.descripcion}</td>
      <td className="w-1/5">
        <label htmlFor={`valor_${index}`}>
          <input
            className="w-1/5 border-solid rounded-lg border-black  bg-gray-400 my-2"
            type="number"
            name={`cantidad_${index}`}
            onChange={(e) => {
              modificarProducto(
                producto,
                e.target.value === "" ? "0" : e.target.value
              );
              setProducto({
                ...producto,
                cantidad: e.target.value === "" ? "0" : e.target.value,
                total:
                  parseFloat(producto.valor) *
                  parseFloat(e.target.value === "" ? "0" : e.target.value),
              });
            }}
          />
        </label>
      </td>
      <td>{producto.valor}</td>
      <td>{parseFloat(producto.total ?? 0)}</td>
      <td>
        <i
          onClick={() => eliminarProducto(producto)}
          className="fas fa-minus text-red-500 cursor-pointer"
        />
      </td>
      <td className="hidden">
        <input hidden defaultValue={producto._id} name={`producto_${index}`} />
      </td>
    </tr>
  );
};

export default GestionVentas;
