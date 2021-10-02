import React, { useEffect, useState } from "react";
import "../styles/Style-gestionar-productos.css";

const usuariosBackend = [
  {
    nombre: "Juan",
    apellido: "Montoya",
    cedula: "123456789",
    email: "juanmontoya@gmail.com",
    rol: "Administrador",
    estado: "Pendiente",
  },
  {
    nombre: "Andrea",
    apellido: "Gomez",
    cedula: "987654321",
    email: "andgomez@hotmail.com",
    rol: "Vendedor",
    estado: "Autorizado",
  },
  {
    nombre: "Santiago",
    apellido: "Cadavid",
    cedula: "145623698",
    email: "santicadv@hotmail.com",
    rol: "Vendedor",
    estado: "Pendiente",
  },
];

const VerUsuarios = () => {
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
      setTextoBoton("Mostrar Todos los Usuarios");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="bg-gray-900 text-white px-4 py-2 rounded-xl text-4xl"
        >
          {textoBoton}
        </button>
      </div>
    
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
    <div className="bg-gray-800 self-center container p-10 ml-10 mr-20 mt-10 ">
      <div class="md:px-32 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-900 text-white">
              <tr>
                <th class="text-xl w-2 py-4 px-2 text-left uppercase font-semibold">
                  Nombre
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Apellido
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Cedula
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Correo electronico
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
                  Rol
                </th>
                <th class="text-xl w-2 py-4 text-left uppercase font-semibold">
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

export default VerUsuarios;