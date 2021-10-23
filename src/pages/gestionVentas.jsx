import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Style-ventas.css";
import { obtenerUsuarios, obtenerProductos, crearVenta } from "../utils/api.js";
import CurrencyFormat from "react-currency-format";

const GestionVentas = (totalVenta) => {
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

    const listaProductos = Object.keys(formData)
      .map((k) => {
        if (k.includes("producto")) {
          return productosTabla.filter((v) => v._id === formData[k])[0];
        }
        return null;
      })
      .filter((v) => v);


    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
      total_venta: totalVenta,
      productos: productosTabla,
      documento: formData.documento,
    };
    // console.log("datos venta", datosVenta);

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
    document.getElementById('formventas').reset();
  };

  return (
    <div className="overscroll-y-auto">
      <div className=" m-auto andrew-container bg-gray-800 ">
        {/* Inicio Seccion de input del usuario */}
        <div className="andrew-titulo ">Gestionar Ventas</div>

        <form ref={form} onSubmit={submitForm} id="formventas">
          <TablaProductos
            productos={productos}
            setProductos={setProductos}
            setProductosTabla={setProductosTabla}
          />

          <div className="flex my-3 justify-center">
            <span className=" mx-2  p-2">Documento cliente</span>
            <input
              type="number"
              className="text-black  mx-2  p-2 rounded-lg w-4/12"
              name="documento"
              placeholder="Cedula de ciudadania"
              required
            />
          </div>
          <div className="flex justify-center ">
            <span className="text-center my-2 mx-2">Vendedor</span>
            <select
              name="vendedor"
              className="text-black p-2  w-4/12 rounded-lg mx-2"
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
          <button
            className="bg-blue-500 andrew-button rounded-lg "
            type="submit"
          >
            Agregar venta
          </button>
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
  const [totalVenta, setTotalVenta] = useState(0);

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
        if (ft._id === producto._id) {
          ft.cantidad = cantidad;
          ft.total = producto.valor * cantidad;
        }
        return ft;
      })
    );
  };

  useEffect(() => {
    let total = 0;
    filasTabla.forEach((f) => {
      total = total + f.total;
    });
    setTotalVenta(total);
  }, [filasTabla]);

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
      <span className="flex justify-center my-2 ">
        Valor total de la venta = $ {totalVenta ?? 0}
        {/* <CurrencyFormat
          value={totalVenta}
          displayType={"text"}
          prefix={"$ "}
          // decimalSeparator={false}
          // thousandSeparator="."
          // fixedDecimalScale={true}
          // decimalScale={0}
        /> */}
      </span>
    </div>
  );
};

const FilaProductos = ({ pro, index, eliminarProducto, modificarProducto }) => {
  const [producto, setProducto] = useState(pro);
  const [num, setNum] = useState(1);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    setNum(num - 1);
  };

  useEffect(() => {
    console.log("producto", producto);
  }, [producto]);
  return (
    <tr className="bg-white text-black text-center font-normal">
      <td>{producto._id.slice(15)}</td>
      <td>{producto.nombre}</td>
      <td>{producto.descripcion}</td>
      <td className="w-1/5 justify-center">
        <label htmlFor={`valor_${index}`}>
          <button className="" onClick={decNum} type="button">
            <i className="fas fa-minus text-red-500 cursor-pointer" />
          </button>
          <input
            className="w-1/5 border-solid rounded-lg border-black  bg-gray-400 my-2 mx-3 text-center"
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
          <button className="" onClick={incNum} type="button">
            <i className="fas fa-plus text-green-600 "></i>
          </button>
        </label>
      </td>
      <td>
        {producto.valor}
        {/* <CurrencyFormat
          value={producto.valor}
          displayType={"text"}
          // decimalSeparator={false}
          prefix={"$ "}
          // thousandSeparator="."
          decimalScale={0}
          // fixedDecimalScale={true}
        /> */}
      </td>
      <td>
        {parseFloat(producto.total ?? 0)}
        {/* <CurrencyFormat
          value={parseFloat(producto.total ?? 0)}
          displayType={"text"}
          // decimalSeparator={false}
          prefix={"$ "}
          // thousandSeparator="."
          decimalScale={0}
          // fixedDecimalScale={true}
        /> */}
      </td>
      <td>
        <i
          onClick={() => eliminarProducto(producto)}
          className="fas fa-times text-red-500 cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default GestionVentas;
