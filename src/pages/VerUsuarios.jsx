import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";
import { toast, ToastContainer } from "react-toastify";
import { obtenerUsuarios, editarUsuario } from "../utils/api.js";
import { nanoid } from "nanoid";

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      await obtenerUsuarios(
        (response) => {
          setUsuarios(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
    };
    console.log("Los usuarios son ", usuarios);
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchUsuarios();
    }
  }, [ejecutarConsulta]);

  return (
    <div classNameName="bg-gray-800 self-center container ml-80 mr-80 mt-10 ">
      <div className="md:px-32 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200"></div>
        <Tabla
          listaUsuarios={usuarios}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      </div>
    </div>
  );
};

export default TablaUsuarios;

const Tabla = ({ listaUsuarios, usuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);

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
            Nombre
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Apellido
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Cédula
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Correo electrónico
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Rol
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Estado
          </th>
          <th className="text-xl w-2 py-4 text-center uppercase font-semibold">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {usuariosFiltrados.map((usuarios) => {
          return (
            <FilaUsuarios
              key={nanoid()}
              usuarios={usuarios}
              setEjecutarConsulta={setEjecutarConsulta}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const FilaUsuarios = ({ usuarios, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    _id: usuarios._id,
    nombre: usuarios.nombre,
    apellido: usuarios.apellido,
    cedula: usuarios.cedula,
    email: usuarios.email,
    rol: usuarios.rol,
    estado: usuarios.estado,
  });

  const actualizarUsuario = async () => {
    await editarUsuario(
      usuarios._id,
      {
        nombre: usuarios.nombre,
        apellido: usuarios.apellido,
        cedula: usuarios.cedula,
        email: usuarios.email,
        rol: infoNuevoUsuario.rol,
        estado: infoNuevoUsuario.estado,
      },
      (response) => {
        toast.success("Usuario modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        console.log("errorrrrrrrrrrrrr");
        toast.error("Error modificando el usuario");
        console.error(error);
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
              value={usuarios.nombre}
            />
          </td>

          <td>
            <input
              className="text-center"
              type="text"
              value={usuarios.apellido}
            />
          </td>

          <td>
            <input
              className="text-center"
              type="text"
              value={usuarios.cedula}
            />
          </td>

          <td>
            <input className="text-center" type="text" value={usuarios.email} />
          </td>

          <td>
            <input
              className="bg-gray-50 border self-center-center w-3/4 border-gray-600 p-2 rounded-lg "
              type="text"
              value={infoNuevoUsuario.rol}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  rol: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border w-3/4 border-gray-600 p-2 rounded-lg"
              type="text"
              value={infoNuevoUsuario.estado}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  estado: e.target.value,
                })
              }
            />
          </td>
          <td></td>
          <td></td>
        </>
      ) : (
        <>
          <td className="text-center">{usuarios.nombre}</td>
          <td className="text-center">{usuarios.apellido}</td>
          <td className="text-center">{usuarios.cedula}</td>
          <td className="text-center">{usuarios.email}</td>
          <td className="text-center">{usuarios.rol}</td>
          <td className="text-center">{usuarios.estado}</td>
        </>
      )}
      <td className="flex my-4 ">
        <div className="flex w-full justify-around ">
          {edit ? (
            <>
              <i
                onClick={() => actualizarUsuario()}
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
