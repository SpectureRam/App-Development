import React,{useState} from 'react'

function ProfileContainer() {
    const [loggedin , setloggedin] = useState(false)
  return ( 
        <div >
            
            <div className='w-[250px] space-y-[10px]'>
            <h1 className='font-bold '>Welcome</h1>
            <p className='text-[14px] justify-self-auto flex'>To access account and manage orders</p>
            <button className='bg-transparent text-black font-semibold py-2 px-4 border-[3px] hover:bg-gray-100 border-gray-200 hover:transition-border-color hover:transition-timing-function:ease-in-out hover:transition-duration:200ms hover:border-black'>
                Login/SignUp
            </button>
        </div>
  
        </div>

  )
}

export default ProfileContainer;