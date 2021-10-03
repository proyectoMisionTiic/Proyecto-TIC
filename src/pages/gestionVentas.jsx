import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Style-ventas.css";
import Nav from "../components/nav";

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

  return (
    <div>
      <div className="andrew-container  bg-gray-800  mb-10 ">
        {/* Inicio Seccion de input del usuario */}
        <div className="andrew-titulo mb-10 ">Gestionar Ventas</div>

        <form action="#">
          <div className="andrew-detalles-producto ">
            <div className="text-3xl mb-10 m-auto text-center ">
              Ingreso De Productos
            </div>

            <div className="tablet:flex tablet:gap-3 portatil:gap-5">
              <div className="andrew-input-box ">
                <span className="andrew-detalles">ID Producto</span>
                <input
                  type="number"
                  placeholder="Ingrese el identificador"
                  required
                />
              </div>

              <div className="andrew-input-box">
                <span className="andrew-detalles">Cantidad Producto</span>
                <input
                  type="number"
                  placeholder="Ingrese la cantidad de productos"
                  required
                />
              </div>
            </div>

            <div className="andrew-input-box">
              <span className="andrew-detalles">Valor unitario Producto</span>
              <input
                type="number"
                placeholder="Ingrese el valor unitario"
                required
              />
            </div>

            <div className="andrew-button w-full">
              <input
                onClick={mostrarMensajeP}
                type="submit"
                value="Ingresar Producto"
              />
            </div>

            <table class="min-w-full bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
                    ID
                  </th>
                  <th class=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
                    Cantidad
                  </th>
                  <th class=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">
                    Precio Unitario
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-left py-3 px-4">0</td>
                  <td class="w-1/3 text-left py-3 px-4">0</td>
                  <td class="w-1/3 text-left py-3 px-4">0</td>
                </tr>
              </tbody>
            </table>
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
                          <span className="andrew-detalles text-transparent ">Nombre Cliente</span>
                          <input  type="hidden" placeholder="Ingrese el nombre del vendedor" required />
                        </div>

                        <div className="andrew-input-box">
                          <span className="andrew-detalles text-transparent ">Nombre Cliente</span>
                          <input  type="hidden" placeholder="Ingrese el nombre del vendedor" required />
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

export default GestionVentas;
