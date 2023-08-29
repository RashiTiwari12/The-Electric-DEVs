import React from 'react';
import image01 from '../../images/image01.png';
import image02 from '../../images/image02.png';

const MainPage = () => {
    const divStyle = {
        backgroundImage: `url(${image02})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: 'full', // Set to full viewport height
    };

    return (
        <>
            {/* <div className='bg-white p-5  flex items-center justify-center rounded-lg'>
                <div style={divStyle} className="bg-opacity-75 rounded-lg text-white text-center p-0">
                    <h1 className='text-5xl underline decoration-yellow-500 decoration-3 
                    '>THE ELECTRIC💡 DEV</h1>
                    <h1 className='text-4xl font-bold mb-2'>Code, Creativity, Connection -</h1>
                    <h3 className='text-xl'>Crafting Exquisite Websites Together.</h3>

                </div>
            </div> */}
            <div style={divStyle} className="flex rounded-lg text-center w-full">fhgfjj</div>
            <div>
                <div className='bg-teal-700 p-5 flex items-center justify-center
             min-w-100vw min-h-screen'>
                    <div className='bg-teal-500 p-32 grid lg:grid-cols-4 gap-1 md:grid-cols-2'>

                        <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                        <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                        <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                        <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
