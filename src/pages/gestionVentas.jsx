import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Style-ventas.css";
import { obtenerUsuarios, obtenerProductos, crearVenta } from "../utils/api.js";

const GestionVentas = () => {
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
  const mostrarMensajeP = () => {
    toast.success("Producto Registrado Correctamente", {
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

    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
      producto: productos.filter((v) => v._id === formData.producto)[0],
      cantidad: formData.cantidad,
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
                  {vendedores.map((el) => {
                    return (
                      <option key={nanoid()} value={el._id}>
                        {`${el.nombre} ${el.apellido}`}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="andrew-input-box ">
                <span className="andrew-detalles">Producto</span>
                <select
                  name="producto"
                  className="text-black p-2  w-3/4 rounded-md border-blue-400 focus:ring-indigo-500 "
                  defaultValue={-1}
                  required
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

              <div className="andrew-input-box">
                <span className="andrew-detalles">Cantidad Producto</span>
                <input
                  type="number"
                  className="text-black"
                  name="cantidad"
                  placeholder="Ingrese la cantidad de productos"
                  required
                />
              </div>
            </div>

            <div className="andrew-button">
              <input type="submit" value="Agregar Producto" />
            </div>

            <TablaProductos />
          </div>
        </form>

        <form action="#">
          <div className="andrew-detalles-producto ">
            <div className="text-3xl mt-10 m-auto text-center mb-10">
              Ingreso De Venta
            </div>

            <div className="tablet:flex tablet:gap-5">
              <div className="andrew-input-box">
                <span className="andrew-detalles">ID Venta</span>
                <input type="number" placeholder="Ingrese el ID " required />
              </div>

              <div className="andrew-input-box">
                <span className="andrew-detalles ">Valor Total</span>
                <input
                  type="number"
                  placeholder="Ingrese el valor total"
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
                  placeholder="Ingrese el documento del cliente"
                  required
                />
              </div>
            </div>

            <div className="tablet:flex tablet:gap-5">
              <div className="andrew-input-box">
                <span className="andrew-detalles">Nombre Vendedor</span>
                <input
                  type="text"
                  placeholder="Ingrese el nombre del vendedor"
                  required
                />
              </div>

              <div className="andrew-input-box">
                <span className="andrew-detalles">Nombre Cliente</span>
                <input
                  type="text"
                  placeholder="Ingrese el nombre del vendedor"
                  required
                />
              </div>
            </div>

            <div className="andrew-button w-full ">
              <input
                onClick={mostrarMensajeV}
                type="submit"
                value="Registrar Venta"
              />
            </div>

            <div className="andrew-input-box">
              <span className="andrew-detalles text-transparent ">
                Nombre Cliente
              </span>
              <input
                type="hidden"
                placeholder="Ingrese el nombre del vendedor"
                required
              />
            </div>

            <div className="andrew-input-box">
              <span className="andrew-detalles text-transparent ">
                Nombre Cliente
              </span>
              <input
                type="hidden"
                placeholder="Ingrese el nombre del vendedor"
                required
              />
            </div>
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

const TablaProductos = () => {
  const [productoAAgregar, setProductoAAgregar] = useState([{}]);
  return (
    <table className="min-w-full bg-white ">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
            Producto
          </th>
          <th className=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
            Cantidad
          </th>
          <th className=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
            Precio Unitario
          </th>
          <th className=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="bg-gray-100">
          <td className="w-1/3 text-left py-3 px-4">0</td>
          <td className="w-1/3 text-left py-3 px-4">0</td>
          <td className="w-1/3 text-left py-3 px-4">0</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GestionVentas;
