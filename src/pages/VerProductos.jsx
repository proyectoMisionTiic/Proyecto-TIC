import React from 'react'
import "../styles/Style-gestionar-productos.css";
import Nav from '../components/nav';


const TablaProductos = () => {
  return (

<div>
      <section >
       <div className='flex ml-7 mt-7 w-full mr-20'>
        <div class="md:px-32 w-full">
        <form action="/action_page.php">
          <label for="gsearch">Search: </label>
          <input type="search" id="gsearch" name="gsearch"></input>
        </form> 
        <br></br>       
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ID Producto</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Nombre producto</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Descripcion del producto</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">cantidad</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Valor unitario</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Acciones</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr>
        <td class="w-1/3 text-left py-3 px-4">903-550HM</td>
        <td class="text-left py-3 px-4">Elia</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">Camiseta rosada</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">122</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">$44.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">903-1507L</td>
        <td class="text-left py-3 px-4">Elayne</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Camiseta blanca y fucsia</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">88</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$39.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>  
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">019-1505Z</td>
        <td class=" text-left py-3 px-4">Nous</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Tenis Blancos/Rosados</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">147</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$59.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">911-1501x</td>
        <td class=" text-left py-3 px-4">Edna</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Body + short Blanco</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">95</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$69.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">916-9002x</td>
        <td class=" text-left py-3 px-4">Diya</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Short Demin Azul</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">72</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$69.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">915-5507N</td>
        <td class=" text-left py-3 px-4">Elle</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Vestido lila</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">132</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$89.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">916-3642x</td>
        <td class=" text-left py-3 px-4">Ezequil</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Camiseta + Bermuda azul</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">76</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$79.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">915-9264N</td>
        <td class=" text-left py-3 px-4">Mojito</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Zapatos beige</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">115</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$49.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">916-4523x</td>
        <td class=" text-left py-3 px-4">Emerson</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Jogger</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">92</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$69.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">915-9207P</td>
        <td class=" text-left py-3 px-4">A.Elían</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Pantalon negro</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">189</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$89.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">916-4523x</td>
        <td class=" text-left py-3 px-4">Emerson</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Jogger</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">92</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$69.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">915-4756A</td>
        <td class=" text-left py-3 px-4">Euken</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Botas</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">143</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">$129.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">916-3521U</td>
        <td class=" text-left py-3 px-4">Enrico</td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">Gorro Tejido Azul/Rojo</a></td>
        <td class="w-1/3 text-left py-3 px-4"><a class="hover:text-blue-500">82</a></td>
        <td class="w-1/3text-left py-3 px-4"><a class="hover:text-blue-500">$39.900</a></td>
        <i class="fas fa-ban"></i>
        <i class="fas fa-broom"></i>   
      </tr>
      

    


    </tbody>
    </table>
  </div>
</div>
        </div>
      </section>
      </div>
        );
      }
      export default TablaProductos;