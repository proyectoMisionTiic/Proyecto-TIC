import React from 'react'
import "../styles/Style-gestionar-productos.css";
import Nav from '../components/nav';

const GestionProductos = () => {



  const cambioID=(e)=>{
    console.log(e.target.value);
  }

	return (
    <body className='flex'>
      
      <div className="container ml-7 mt-7 max-h-full w-1/2">
        {/* Inicio Seccion de input del usuario */}
        <div className="titulo">Registro de productos</div>
        <form action="#">
          <div className="detalles-producto">
            <div className="input-box">
              <span className="detalles">ID</span>
              <input onChange={cambioID} type="number" placeholder="Ingrese el ID " required />
            </div>
            <div className="input-box">
              <span className="detalles">Nombre</span>
              <input type="text" placeholder="Ingrese el nombre " required />
            </div>
            <div className="input-box">
              <span className="detalles">Descripción</span>
              <input
                type="text"
                placeholder="Ingrese una descripción "
                required
              />
            </div>
            <div className="input-box">
              <span className="detalles">Valor unitario</span>
              <input type="number" placeholder="Ingrese el valor " required />
            </div>
            <div className="input-box centrado">
              <span className="detalles centrado">Cantidad</span>
              <input
                type="number"
                className="centrado"
                placeholder="Ingrese la cantidad "
                required
              />
            </div>
          </div>
          {/* Final seccion de input */}

          {/* Seccion de ESTADO y BOTONES */}
          <div className="estado-detalles">
            <input type="radio" name="estado" id="punto-1" />
            <input type="radio" name="estado" id="punto-2" />
            <span className="estado-titulo">Estado</span>
            <div className="category">
              <label for="punto-1">
                <span className="punto uno"></span>
                <span className="estado">Disponible</span>
              </label>
              <label for="punto-2">
                <span className="punto dos"></span>
                <span className="estado">No disponible</span>
              </label>
            </div>
          </div>
          <div className="botones">
            <div className="button">
              <input type="submit" value="Buscar por ID" />
            </div>
            <div className="button">
              <input type="submit" value="Modificar producto" />
            </div>
            <div className="button">
              <input type="submit" value="Registrar producto" />
            </div>
          </div>
        </form>
        {/* Fin seccion de ESTADO y BOTONES */}
      </div>
      {/* Tabla dummie*/}
      <section >
        <div className='flex ml-7 mt-7 w-full mr-20'>
        <div class="md:px-32 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr>
        <td class="w-1/3 text-left py-3 px-4">Lian</td>
        <td class="w-1/3 text-left py-3 px-4">Smith</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Emma</td>
        <td class="w-1/3 text-left py-3 px-4">Johnson</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">Oliver</td>
        <td class="w-1/3 text-left py-3 px-4">Williams</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Isabella</td>
        <td class="w-1/3 text-left py-3 px-4">Brown</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
        </div>
      </section>
      {/* Fin tabla */}
      </body>
	);
}

export default GestionProductos
