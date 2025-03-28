import React from 'react';

const Testimonial = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full max-w-sm p-4 rounded-lg shadow-md bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg border border-white/20">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center text-center">
          <img
            className="w-20 h-20 mb-2 rounded-full border-4 border-white shadow-md"
            src="testimonial.jfif"
            alt="Bonnie Green"
          />
          
          {/* Name & Role */}
          <h5 className="text-base font-semibold text-gray-900 dark:text-white">
            James Mwangi
          </h5>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Happy client
          </span>

          {/* Testimonial Text */}
          <p className="mt-2 px-2 text-sm text-gray-700 dark:text-gray-300 italic">
            "I've been buying from Jonesa for a while now, and it's been great! Everything is easy to find, and it's amazing to have everything in one place."
          </p>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
