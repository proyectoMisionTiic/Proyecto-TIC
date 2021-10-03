
import React from 'react'
import "../styles/Style-ventas.css";
import Nav from '../components/nav';

const informacionVentas = () => {
    return (
      <div >
  
        <div className="andrew-container bg-gray-900">
          {/* Inicio Seccion de input del usuario */}
          <div className="andrew-titulo mb-10 ">Informacion Ventas</div>
  
           <form  className='' action="#">
       
            <div className="andrew-detalles-producto ">
  
              <table class="min-w-full bg-white">
                <thead class="bg-gray-800 text-white">
                  <tr>
                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">ID Venta</th>
                    <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">Valor Total</th>
                    <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">Fecha De Venta</th>
                    <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">Documento Cliente</th>
                    <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">Nombre Vendedor</th>
                    <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">Nombre Cliente</th>
                    <th class="  text-left py-3 px-4 uppercase font-semibold text-sm">Productos</th>
                   
                    
                  </tr>
                </thead>
                <tbody class="text-gray-700">
  
                  <tr class="bg-gray-100">
                    <td class=" text-left py-3 px-4">0</td>
                    <td class=" text-left py-3 px-4">0</td>
                    <td class=" text-left py-3 px-4">0</td>
                    <td class=" text-left py-3 px-4">0</td>
                    <td class=" text-left py-3 px-4">0</td>
                    <td class=" text-left py-3 px-4">0</td>
                    <td class=" text-left py-3 px-4">0</td>
  
                  </tr>
                </tbody>
              </table>
  
  

            </div>
          </form>
        
      </div>
      </div>
  
  
  
  
  
  
  
  
    );
  }
  
  export default informacionVentas;
  
