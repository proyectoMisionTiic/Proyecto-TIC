import Logo from '../media/logo_small.png';

import {Link} from 'react-router-dom';


const Login = ()=>{

    return(
      <div className='fondo w-full h-screen  celular:text-2x1 tablet:text-4xl flex  '> 
           
            <div className='rounded-3xl p-6  mx-auto my-auto shadow-2xl bg-white ' >
                <form action="">


                        <div>
                          <img className='mb-16 m-auto h-20' src={Logo} alt="" />
                        </div>


                        <h1 className='text-4xl portatil:text-6xl   mb-20 text-center' >Iniciar sesión</h1>

                  
                        <div className='mb-12'>
                          <label className='block' htmlFor="">Email:</label>
                          <div className='flex  border-gray-900 border-2 p-1 rounded-xl'>
                          <i className="far fa-envelope mr-3 mt-4"></i>
                          <input className='outline-none rounded-xl p-2 w-full' type="email" placeholder='Email'/>
                          </div>
                        </div>


                        
                        <div className='mb-12'>
                          <label className='block' htmlFor="">Password:</label>
                          <div className='flex  border-gray-900 border-2 p-1 rounded-xl'>
                          <i className="fas fa-lock mr-3 mt-4"></i>
                          <input className='outline-none rounded-xl p-2 w-full' type="Password" placeholder='Password'/>
                          </div>
                        </div>

                        <Link to='/Principal'>
                        <div>
                          <input autocomplete='name' className='text-white w-full bg-gray-900 rounded-xl mt-20 p-3 cursor-pointer ' type="button" value='Ingresar' />
                        </div>
                        </Link>

                        <div>
                          <input   className='text-white w-full bg-red-700 rounded-xl mt-20 p-3 cursor-pointer' type="button"  value='Ingresar Con Google' />
                        </div>
                 

                  
                </form>

            </div>
      </div>
    );
}


export default Login;