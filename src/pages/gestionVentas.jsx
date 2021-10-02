import React from 'react'
import "../styles/Style-ventas.css";
import Nav from '../components/nav';

const GestionVentas = () => {
  return (


      <div className="container  bg-gray-800  ">
        {/* Inicio Seccion de input del usuario */}
        <div className="titulo mb-10 ">Gestionar Ventas</div>

         <form  className='' action="#">
     


          <div className="detalles-producto ">
          <div className='text-3xl mb-10 m-auto text-center '>Ingreso De Productos</div>

             <div className='tablet:flex tablet:gap-3 portatil:gap-5'>
                  <div className="input-box ">
                    <span className="detalles">ID Producto</span>
                    <input type="number" placeholder="Ingrese el identificador" required />
                  </div>

                  <div className="input-box">
                    <span className="detalles">Cantidad Producto</span>
                    <input type="number" placeholder="Ingrese la cantidad de productos" required />
                  </div>
             </div>

            <div className="input-box">
              <span className="detalles">Valor unitario Producto</span>
              <input type="number" placeholder="Ingrese el valor unitario" required />
            </div>

            <div className="button w-full">
              <input type="submit" value="Ingresar Producto" />
            </div>


            <table class="min-w-full bg-white">
              <thead class="bg-gray-800 text-white">
                <tr>
                  <th class=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                  <th class=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">Cantidad</th>
                  <th class=" w-1/3   text-left py-3 px-4 uppercase font-semibold text-sm">Precio Unitario</th>
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




            <div className='text-3xl mt-10 m-auto text-center mb-10'>Registro De Venta</div>



            <div className='tablet:flex tablet:gap-5'>
              <div className="input-box">
                <span className="detalles">ID Venta</span>
                <input type="number" placeholder="Ingrese el ID " required />
              </div>


              <div className="input-box">
                <span className="detalles ">Valor Total</span>
                <input type="number" placeholder="Ingrese el valor total" required />
              </div>

            </div>


            <div className='tablet:flex tablet:gap-5'>
                  <div className="input-box">
                    <span className="detalles">Fecha de venta</span>
                    <input type="date" required />
                  </div>

                  <div className="input-box">
                    <span className="detalles">Documento Cliente</span>
                    <input type="number" placeholder="Ingrese el documento del cliente" required />
                  </div>
              </div>

              <div className='tablet:flex tablet:gap-5'>
              

                  <div className="input-box">
                    <span className="detalles">Nombre Vendedor</span>
                    <input  type="text" placeholder="Ingrese el nombre del vendedor" required />
                  </div>

                  <div className="input-box">
                    <span className="detalles">Nombre Cliente</span>
                    <input  type="text" placeholder="Ingrese el nombre del vendedor" required />
                  </div>
           </div>

          


            <div className="input-box es mt-10">
              <input className=' mb-10 colorxd text-white ' type="submit" value='Registrar Venta' required />
            </div>



          </div>
        </form>
      
    </div>
 








  );
}

export default GestionVentas;
