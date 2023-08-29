import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* <div className='bg-teal-700 p-5 flex items-center justify-center
             min-w-100vw min-h-screen'>
                <div className='bg-blue-300 p-5 gap-10 flex items-center justify-center
             min-w-40vw min-h-40vh'></div>
                <div className='bg-blue-300 p-5  flex items-center justify-center
             min-w-80vw min-h-80vh'></div>

            </div> */}

            <div className=' flex container bg-black text-white flex-row gap-64 p-5 '>
                <h1 className='text-5xl p-4 hover:opacity-90' >THE ELECTRIC💡 DEV</h1>

                <div className='  text-2xl gap-24 p-2 flex flex-cols '>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>

                </div>

            </div>
            <button class="text-3xl text-white  sm:bg-sky-700" >
                &#9776;
            </button>
        </>
    )
}

export default Navbar