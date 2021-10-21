import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Style-ventas.css";
import { obtenerUsuarios, obtenerProductos, crearVenta } from "../utils/api.js";

const GestionVentas = ({ setProductoAAgregar }) => {
  const mostrarMensajeV = () => {
    toast.success("Venta Registrada Correctamente", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const form = useRef(null);
  const [vendedores, setVendedores] = useState([{}]);
  const [productos, setProductos] = useState([{}]);
  const [productosTabla, setProductosTabla] = useState([{}]);

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
    console.log(formData);

    const listaProductos = Object.keys(formData)
      .map((k) => {
        if (k.includes("productos")) {
          return productosTabla.filter((v) => v._id === formData[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
      producto: productos.filter((v) => v._id === formData.producto)[0],
      productos: listaProductos,
    };
    console.log(datosVenta);

    await crearVenta(
      datosVenta,
      (response) => {
        toast.success("Venta Agregada");
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div>
      <div className="andrew-container  bg-gray-800  mb-10 ">
        {/* Inicio Seccion de input del usuario */}
        <div className="andrew-titulo mb-10 ">Gestionar Ventas</div>

        <form ref={form} onSubmit={submitForm}>
          <div className="andrew-detalles-producto ">
            <div className="text-3xl mb-10 m-auto text-center ">
              Ingreso De Productos
            </div>

            <div className="tablet:flex tablet:gap-3 portatil:gap-5">
              <div className="andrew-input-box ">
                <span className="andrew-detalles">Vendedor</span>
                <select
                  name="vendedor"
                  className="text-black p-2 w-3/4 rounded-md border-blue-400 focus:ring-indigo-500 "
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

              {/* <div className="andrew-input-box">
                <span className="andrew-detalles">Cantidad Producto</span>
                <input
                  type="number"
                  className="text-black"
                  name="cantidad"
                  placeholder="Ingrese la cantidad de productos"
                  required
                />
              </div> */}
            </div>

            <TablaProductos
              productos={productos}
              setProductos={setProductos}
              setProductosTabla={setProductosTabla}
            />
          </div>
        </form>

        <form action="#">
          {/* <div className="andrew-detalles-producto ">
            <div className="text-3xl mt-10 m-auto text-center mb-10">
              Ingreso De Venta
            </div>

            <div className="tablet:flex tablet:gap-5">
              <div className="andrew-input-box">
                <span className="andrew-detalles">ID Venta</span>
                <input type="number" placeholder="Ingrese xd ID " required />
              </div>

              <div className="andrew-input-box">
                <span className="andrew-detalles ">Valor Total</span>
                <input
                  type="number"
                  placeholder="Ingrese xd valor total"
                  required
                />
              </div>
            </div>

            <div className="tablet:flex tablet:gap-5">
              <div className="andrew-input-box">
                <span className="andrew-detalles">Fecha de venta</span>
                <input type="date" required />
              </div>

              <div className="andrew-input-box">
                <span className="andrew-detalles">Documento Cliente</span>
                <input
                  type="number"
                  placeholder="Ingrese xd documento del cliente"
                  required
                />
              </div>
            </div>

            <div className="tablet:flex tablet:gap-5">
              <div className="andrew-input-box">
                <span className="andrew-detalles">Nombre Vendedor</span>
                <input
                  type="text"
                  placeholder="Ingrese xd nombre del vendedor"
                  required
                />
              </div>

              <div className="andrew-input-box">
                <span className="andrew-detalles">Nombre Cliente</span>
                <input
                  type="text"
                  placeholder="Ingrese xd nombre del vendedor"
                  required
                />
              </div>
            </div>


            <div className="andrew-input-box">
              <span className="andrew-detalles text-transparent ">
                Nombre Cliente
              </span>
              <input
                type="hidden"
                placeholder="Ingrese xd nombre del vendedor"
                required
              />
            </div>

            <div className="andrew-input-box">
              <span className="andrew-detalles text-transparent ">
                Nombre Cliente
              </span>
              <input
                type="hidden"
                placeholder="Ingrese xd nombre del vendedor"
                required
              />
            </div>
          </div> */}
          <div className="andrew-button w-full ">
            <input
              onClick={mostrarMensajeV}
              type="submit"
              value="Registrar Venta"
            />
          </div>
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
    <div>
      <div className="andrew-input-box ">
        <span className="andrew-detalles">Producto</span>
        <select
          name="producto"
          className="text-black p-2  w-3/4 rounded-md border-blue-400 focus:ring-indigo-500 "
          valuealue={productoAAgregar._id ?? ""}
          onChange={(e) =>
            setProductoAAgregar(
              productos.filter((v) => v._id === e.target.value)[0]
            )
          }
        >
          <option disabled value={-1}>
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
      <button className="bg-blue-500 andrew-button" onClick={() => agregarNuevoProducto()}>
        Agregar Producto
      </button>
      <table className="min-w-full bg-white ">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className=" text-center py-3 px-4 uppercase font-semibold text-sm">
              ID
            </th>
            <th className="    text-center py-3 px-4 uppercase font-semibold text-sm">
              Producto
            </th>
            <th className="   text-center py-3 px-4 uppercase font-semibold text-sm">
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
    console.log("veh", producto);
  }, [producto]);
  return (
    <tr className="text-black text-center">
      <td>{producto._id.slice(20)}</td>
      <td>{producto.nombre}</td>
      <td>{producto.descripcion}</td>
      {/* <td>{productos.valor}</td> */}
      <td>
        <label htmlFor={`valor_${index}`}>
          <input
            className="andrew-detalles"
            type="number"
            name={`cantidad_${index}`}
            value={producto.cantidad}
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
      {/* <td>
        <i
          onClick={() => eliminarProducto(producto)}
          className="fas fa-minus text-red-500 cursor-pointer"
        />
      </td> */}
      {/* <td className="hidden">
        <input hidden defaultValue={producto._id} name={`producto_${index}`} />
      </td> */}
    </tr>
  );
};

export default GestionVentas;
