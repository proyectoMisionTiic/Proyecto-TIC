
const Principal = () => {
  return (
    <div className="contenido-principal">
      <div className="vista-cajas">
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja ">Total pedidos</div>
            <div className="cifra">124</div>
          </div>
          <i className="bx bx-package icono uno" ></i>
        </div>
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Total ventas</div>
            <div className="cifra align-center text-center">$5.124.000</div>
          </div>
          <i className="bx bx-dollar icono dos"></i>
        </div>
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Ganancias netas</div>
            <div className="cifra">$1.589.000</div>
          </div>
          <i className="bx bx-line-chart icono"></i>
        </div>
        <div className="cajas">
          <div className="lado-izq">
            <div className="tema-caja">Mejor vendedor</div>
            <div className="cifra">JuanD</div>
          </div>
          <i className='bx bx-user-pin icono cuatro'></i>
        </div>
      </div>
      {/* Ventas */}
      <div className="caja-ventas flex justify-between p-2">
        <div className="ventas-recientes caja w-3/4 ml-5 bg-white box-border shadow-lg rounded-xl p-5 mt-4">
          <div className="titulo text-4xl font-semibold text-center py-4">Ventas Recientes</div>
          <div className="detalles-ventas flex justify-between align-center">
          <ul className="py-2">
              <li className="tema text-2xl font-semibold text-center">ID</li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">36589</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">36589</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">36589</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">36589</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">36589</a></li>
            </ul>
            <ul className="py-2">
              <li className="tema text-2xl font-semibold text-center">Fecha</li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">01 Oct 2022</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">01 Oct 2022</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">01 Oct 2022</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">01 Oct 2022</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">01 Oct 2022</a></li>
            </ul>
            <ul className="py-2">
              <li className="tema text-2xl font-semibold text-center">Cliente</li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">Jose Balvin</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">Jose Balvin</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">Jose Balvin</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">Jose Balvin</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">Jose Balvin</a></li>
            </ul>
            <ul className="py-2">
              <li className="tema text-2xl font-semibold text-center">Total</li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">$ 259.000</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">$ 259.000</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">$ 259.000</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">$ 259.000</a></li>
              <li className="list-none m-2"><a className="font-medium no-underline text-gray-700" href="#">$ 259.000</a></li>
            </ul>
          </div>
          <div className="button flex font-medium justify-end pt-2 pl-2 text-blue-400 hover:text-blue-800">
            <a href="#" className="">Ver más</a>
          </div>
        </div>
        {/* Lado derecho */}
        <div className="top-productos caja w-1/4 ml-6 bg-white box-border shadow-lg rounded-xl p-5 mr-4 mt-4">
          <div className="titulo text-4xl font-semibold text-center py-4">Productos mas véndidos</div>
          <div className="detalles-ventas">
            <ul className="detalles flex-col">
              <li className="flex align-center justify-between">
                <a href="#">
                  <img src="" />
                  <span className=""> Camisa manga larga </span>
                </a>
                <span className="precio">$ 25.500</span>
              </li>
              <li className="flex align-center justify-between">
                <a href="#">
                  <img src="" />
                  <span className=""> Zapatos negros </span>
                </a>
                <span className="precio">$ 145.000</span>
              </li>
              <li className="flex align-center justify-between">
                <a href="#">
                  <img src="" />
                  <span className=""> Bolso azul </span>
                </a>
                <span className="precio">$ 65.500</span>
              </li>
              <li className="flex align-center justify-between">
                <a href="#">
                  <img src="" />
                  <span className=""> Jean clásico </span>
                </a>
                <span className="precio">$ 92.000</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Principal;
