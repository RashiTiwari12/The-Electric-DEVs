import React from 'react'

const LearnTailwind = () => {
    return (
        <>
            <div>
                <h1 className='border-4'
                >Hello World</h1>
                <h1 className='text-9xl'>Text 1</h1>
                <h2 className='text-2xl'>Text 2</h2>
                <h3 className='text-base underline decoration-red-500 
                decoration-wavy decoration-1 underline-offset-1'>Text3</h3>
                <p>regular para graph</p>
                <div className=' flex justify-evenly '>
                    <div className='grow bg-yellow-700 m-5'>jh</div>
                    <div className='basis-1/4 bg-yellow-700 m-5'>1</div>
                    <div className='grow bg-yellow-700 m-5'>jh</div></div>

            </div>
            <div className='grid lg:grid-cols-4 gap-1 md:grid-cols-2'>
                <div className='bg-sky-400 rounded-lg p-6 '>Helo</div>
                <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
                <div className='bg-sky-400 rounded-lg p-6 col-span-2'> second Helo</div>
                <div className='bg-sky-400 rounded-lg p-6'> second Helo</div>
            </div>
        </>
    )
}

export default LearnTailwind