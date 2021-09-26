import Logo from '../media/logo_small.png';
import User from '../media/user.png'


const Nav = () => {

    return (

        <div className='bg-white w-3/4   overflow-x-hidden shadow-2xl p-4 flex justify-between w-screen '  >

            <div>
                <img  className='max-h-14 tablet:min-h-full '   src={Logo} alt="" />
            </div>

            <div>
                <img  className='max-h-14 ml-10  tablet:ml-5 tablet:max-h-16'   src={User} alt="" />
            </div>

           
 


        </div>
    );


}



export default Nav;