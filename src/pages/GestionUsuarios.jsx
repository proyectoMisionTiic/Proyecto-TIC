import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";

const usuariosBackend = [
  {
    nombre: "Juan",
    apellido: "Montoya",
    cedula: "123456789",
    email: "juanm@gmail.com",
    rol: "Administrador",
    estado: "Pendiente",
  },
  {
    nombre: "Andrea",
    apellido: "Gomez",
    cedula: "987654321",
    email: "andr@hotmail.com",
    rol: "Vendedo",
    estado: "Autorizado",
  },
];

const Usuarios = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear o Modificar Usuario");

  useEffect(() => {
    //obtener lista de usuarios
    setUsuarios(usuariosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear o Modificar Usuario");
    } else {
      setTextoBoton("Mostrar Todos los usuarios");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="bg-gray-800 text-white px-4 py-2 rounded-xl "
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaUsuarios listaUsuarios={usuarios} />
      ) : (
        <FormularioCreacionUsuarios />
      )}
    </div>
  );
};

const TablaUsuarios = ({ listaUsuarios }) => {
  useEffect(() => {
    console.log(
      "este es el listado de usuarios en el componente de tabla",
      listaUsuarios
    );
  }, [listaUsuarios]);
  return (
    <div className="flex ml-7 mt-7 w-full mr-20">
      <div class="md:px-32 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="w-2 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Nombre
                </th>
                <th class="w-2 text-left  py-3 px-4 uppercase font-semibold text-sm">
                  Apellido
                </th>
                <th class="w-2 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Cedula
                </th>
                <th class="w-2 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email
                </th>
                <th class="w-2 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Rol
                </th>
                <th class="w-2 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {listaUsuarios.map((usuario) => {
                return (
                  <tr>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.cedula}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.estado}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const FormularioCreacionUsuarios = () => {
  return (
    <body className="flex">
      <div className="container ml-7 mt-7 max-h-full w-1/2 object-center">
        {/* Inicio Seccion de input del usuario */}
        <div className="titulo">Registro de Usuarios</div>
        <form action="#">
          <div className="detalles-producto">
            <div className="input-box">
              <span className="detalles">Nombre</span>
              <input type="text" placeholder="Ingrese nombres " required />
            </div>

            <div className="input-box">
              <span className="detalles">Apellido</span>
              <input type="text" placeholder="Ingrese apellidos " required />
            </div>

            <div className="input-box">
              <span className="detalles">Cédula </span>
              <input type="number" placeholder="Ingrese el nombre " required />
            </div>

            <div className="input-box">
              <span className="detalles">Email</span>
              <input type="text" placeholder="Ingrese el email " required />
            </div>

            <div className="input-box">
              <span className="detalles">Rol</span>
              <select className="border-2 ">
                <option value="rol"> Administrador </option>
                <option value="rol"> Vendedor </option>
              </select>
            </div>

            <div className="input-box">
              <span className="detalles">Estado</span>
              <select className="border-2">
                <option value="autorizado"> Autorizado </option>
                <option value="pendiente"> Pendiente </option>
                <option value="no autorizado"> No Autorizado </option>
              </select>
            </div>
          </div>
          {/* Final seccion de input */}

          {/* Seccion de ESTADO y BOTONES */}

          <div className="botones">
            <div className="button">
              <input type="submit" value="Buscar por cédula" />
            </div>
            <div className="button">
              <input type="submit" value="Modificar usuario" />
            </div>
            <div className="button">
              <input type="submit" value="Registrar usuario" />
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Usuarios;
