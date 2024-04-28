import React from 'react';
import Link from 'next/link';

interface WhyChooseUsSectionProps {
  buttonText: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ buttonText }) => {
  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Service</h2>
        </div>
        
        {/* For larger screens, adjust the height of the video container */}
        <div className="lg:flex lg:items-center lg:justify-between lg:mb-8">
          <div className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-8">
            <div style={{ paddingTop: '56.25%', position: 'relative' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-4">
            <p className="text-lg text-gray-600 mb-8 text-center">
            We take pride in our roofing inspections, which is why thats all we specialize
            in. We will never bid a reroof or contractor work. We do offer our service to seal broken pipes and replace broken/missing tiles if such minor repairs are needed.
            However, roof inspections is what we do. We have a thorough procedure that ensures a quality inspection.
            
               <br />
              <br />
              Weather you may need a minor repair, major repair, some maintenance
              , or an actual reroof, our honest evalutions is what sets us apart. We call it like we see it!
                          </p>
            {/* Button and phone number aligned to the left */}
            <br></br>
            <h1 className="text-center mb-4">BOOK AN INSPECTION OR LEARN MORE ABOUT OUR SERVICE. CLICK THE BUTTON BELOW</h1>
            <div className="flex flex-col items-center">
  <div className="mb-4">
    <Link href="/booking">
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        {buttonText}
      </button>
    </Link>
  </div>
  <h1 className="font-bold text-red-500 text-3xl mt-2">858-522-9562</h1>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
