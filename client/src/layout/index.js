import React from 'react';
import chatapp from '../assests/chatapp.jpg';


const AuthLayouts = ({children}) => {
  return (
   <>
   <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white' >
             <div>
               <img src={chatapp} alt='logo' width={100} height={60} />
             </div>
             </header>
             {children}

   </>
  );
}

export default AuthLayouts;
