import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { toast, ToastContainer } from "react-toastify";
import {
  obtenerventas,
  obtenerVenta,
  editarProducto,
  eliminarProducto,
} from "../utils/api.js";
import { nanoid } from "nanoid";

const TablaVentas = () => {
  
  const [ventas, setventas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  
 
  useEffect(() => {
    const fetchventas = async () => {
      await obtenerVenta(
        (response) => {
          setventas(response.data);
          setEjecutarConsulta(false);
          console.log(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
    };
    if (ejecutarConsulta) {
      fetchventas();
    }
  }, [ejecutarConsulta]);

  return (
    <div classNameName="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200"></div>
       
        <Tabla
          listaVentas={ventas}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      </div>
    </div>
  );
};

export default TablaVentas;

const Tabla = ({ listaVentas, ventas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltradas, setventasFiltradas] = useState(listaVentas);

  useEffect(() => {
    setventasFiltradas(
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
              onChange ={(e)=> setBusqueda(e.target.value)}
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
            DOCUMENTO
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
            CEDULA
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            CORREO
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ESTADO
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ROL
          </th>

          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ID PRODUCTO
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            NOMBRE
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
            VALOR TOTAL
          </th>

          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            ACCIONES
          </th>
        </tr>
      </thead>
      <tbody>
        {ventasFiltradas.map((ventas) => {
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
 



  return (
    <tr>
  
          <td className="text-center">{ventas._id.slice(20)}</td>
       
          <td className="text-center">{ventas.documento}</td>

          <td className="text-center">{ventas.vendedor._id}</td>
          <td className="text-center">{ventas.vendedor.nombre}</td>
          <td className="text-center">{ventas.vendedor.apellido}</td>
          <td className="text-center">{ventas.vendedor.cedula}</td>
          <td className="text-center">{ventas.vendedor.email}</td>
          <td className="text-center">{ventas.vendedor.estado}</td>
          <td className="text-center">{ventas.vendedor.rol}</td>


          <td className="text-center">{ventas.productos[0]._id}</td>
          <td className="text-center">{ventas.productos[0].nombre}</td>
          <td className="text-center">{ventas.productos[0].descripcion}</td>
          <td className="text-center">{ventas.productos[0].valor}</td>
          <td className="text-center">{ventas.productos[0].cantidad}</td>


          <td className="text-center">{ventas.vendedor.total_venta}</td>


      


           
           <i
                
                className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
              />

              <i
                className="fas fa-trash text-red-700 hover:text-red-500"
                
              />




         
      
    </tr>
  );
};
