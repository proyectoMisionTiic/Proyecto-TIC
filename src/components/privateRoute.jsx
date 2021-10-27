import {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { isAuthenticated,loginWithRedirect,getAccessTokenSilently } = useAuth0();

  useEffect(()=>{
    const fetchAuth0Token= async()=>{
      const accessToken = await getAccessTokenSilently({
        audience:"api-gestor-ventas"
      });
      localStorage.setItem('token',accessToken);
    };
    if (isAuthenticated){
      fetchAuth0Token();
    }
  },[isAuthenticated,getAccessTokenSilently]);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col items-center h-full">
      <span className="text-6xl">No esta autorizado</span>
      {/* <Link to="/login"> */}
        <button className="bg-green-500 rounded-xl text-6xl hover:bg-green-800 m-4 p-5 text-white"
		onClick={() => loginWithRedirect()}
		>
          Inicia sesión
        </button>
      {/* </Link> */}
    </div>
  );
};

export default PrivateRoute;
