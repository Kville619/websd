import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        {/* Footer Point 1 */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-center">&copy; 2024 SDRI</h3>
        </div>
        
        {/* Footer Point 2 */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-center">San Diego, Ca. 92107</h3>
        </div>
        
        {/* Footer Point 3 */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-center">858 - 522 - 9562</h3>
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-center">Privacy Policy</h3>
        </div>
      </div>
   

    </footer>
  );
};

export default Footer;
