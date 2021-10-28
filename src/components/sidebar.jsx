import Botonsidebar from "./botonsidebar";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useAuth0();
  const cerrarSesion = () => {
    logout({ returnTo: "https://thawing-stream-94254.herokuapp.com/login" });
    localStorage.setItem("token", null);
  };
  return (
    <div>
      <nav className=" celular:bg-gray-800    flex flex-col celular:w-screen   tablet:h-screen  portatil:w-full tablet:w-full portatil:mr-10 tablet:gap-20 portatil:text-3xl  ">
        <ul>
          <Link to="/Ventas">
            <div className=" flex   hover:bg-green-500 my-1 p-2.5 tablet:mt-20 ml-2 mr-2 tablet:mb-10 portatil:mb-15 andrew-campo">
              <i class="fas fa-shopping-cart text-white justify-center mr-3"></i>
              <Botonsidebar
                className="celular:"
                NombreBoton="Gestionar Venta"
              />
            </div>
          </Link>

          <Link to="/InformacionVentas">
            <div className=" flex   hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-15 andrew-campo">
              <i class="fas fa-receipt text-white justify-center mr-3"></i>
              <Botonsidebar
                className="celular:"
                NombreBoton="Informacion Ventas"
              />
            </div>
          </Link>

          <Link to="/GestionProductos">
            <div className=" flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-15 andrew-campo">
              <i class="fab fa-shopify text-white justify-center mr-3"></i>
              <Botonsidebar
                className="celular:"
                NombreBoton="Gestionar Producto"
              />
            </div>
          </Link>

          <Link to="/VerProductos">
            <div className=" flex   hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-15">
              <i class="fas fa-tshirt text-white justify-center mr-3"></i>
              <Botonsidebar className="celular:" NombreBoton="Ver Productos" />
            </div>
          </Link>

          <Link to="/GestionUsuarios">
            <div className=" flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-15 andrew-campo">
              <i class="fas fa-users text-white justify-center mr-3"></i>
              <Botonsidebar
                className="celular:"
                NombreBoton="Gestionar Usuarios"
              />
            </div>
          </Link>

          <Link to="/VerUsuarios">
            <div className=" flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-15 andrew-campo">
              <i class="fas fa-users text-white justify-center mr-3"></i>
              <Botonsidebar
                className="celular:"
                NombreBoton="Información Usuarios"
              />
            </div>
          </Link>

          <div className=" flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-20 andrew-campo">
            <i class="fas fa-sign-out-alt text-white justify-center "></i>
            <button
              className="text-white w-full"
              onClick={() => cerrarSesion()}
            >
              Salir
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
