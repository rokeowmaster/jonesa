import React from 'react'

const Testimonial = () => {
  return (
    
    <div className='mt-2 flex items-center justify-center h-screen'>
        <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="lady.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <p className="px-6 mt-3 text-center text-gray-700 dark:text-gray-300">"I've been Buying from Jonesa a while now and it's been great! Everything is easy to find and it's great to have everything in one place."</p>
            </div>
        </div>
    </div>

  )
}

export default Testimonial