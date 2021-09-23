import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <main>
    {/* Section para la imagen superior*/} 

    <section>
    {/*Se crea div para trabajar la imagen como un contenedor y cambiar tamaño*/}
        <div>
            <img src="./media/imagen_registro.jpg" alt="Foto de una tienda de ropa"/>
        </div>
        
    </section>

    {/*Section para el registro*/}

    <section>
              <h3> Registro </h3>
    {/*Inicia el formulario*/}
     <form>
        <label for = "nombre">
            Nombre :
            <input name="nombre" type="text"/>
            <i class="far fa-user-circle"></i>
        </label>
        <label for = "email">
            Email :
           <input name="email"  type="email"/>
        </label>
        <label for = "contraseña">
            Contraseña :
           <input name="contraseña" type="password"/>
        </label>
        {/*Boton para enviar la informacion ingresada por el usuario*/}
        <button type="submit">Registrar</button>
     </form>
    </section>
    
    </main>
    </div>
  );
}

export default App;
