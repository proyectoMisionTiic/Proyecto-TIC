import Botonsidebar from "./botonsidebar";


const Sidebar = () => {

    return (

        <div> 

    
                <div className=' celular:bg-gray-800    flex flex-col celular:w-screen   tablet:h-screen  portatil:w-full tablet:w-full portatil:mr-36 tablet:gap-20  '>

                    <div className=' flex   hover:bg-green-500 my-1 p-2.5 tablet:mt-20 ml-2 mr-2 tablet:mb-10 portatil:mb-20'>
                        <i class="fas fa-shopping-cart text-white justify-center mr-3"></i>
                        <Botonsidebar className='celular:' NombreBoton='Gestionar Venta' />
                    </div>

                    <div className=' flex   hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-20'>
                        <i class="fas fa-receipt text-white justify-center mr-3"></i>
                        <Botonsidebar className='celular:' NombreBoton='Informacion Ventas' />
                    </div>

                    <div className=' flex   hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-20'>
                        <i class="fas fa-tshirt text-white justify-center mr-3"></i>
                        <Botonsidebar className='celular:' NombreBoton='Ver Productos' />
                    </div>

                    <div className=' flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-20'>
                        <i class="fab fa-shopify text-white justify-center mr-3"></i>
                        <Botonsidebar className='celular:' NombreBoton='Gestionar Productos' />
                    </div>

                    <div className=' flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-20'>
                        <i class="fas fa-users text-white justify-center mr-3"></i>
                        <Botonsidebar className='celular:' NombreBoton='Gestionar Vendedores' />
                    </div>


                    <div className=' flex  hover:bg-green-500 my-1 p-2.5  ml-2 mr-2 tablet:mb-10 portatil:mb-20'>
                        <i class="fas fa-sign-out-alt text-white justify-center "></i>
                        <Botonsidebar className='celular:' NombreBoton='Salir' />
                    </div>

                   
              

            </div>






        </div>

    );
}


export default Sidebar;