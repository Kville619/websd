import React, { useState } from 'react';

const NotFree = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">How is Your Roof Holding Up? Click the benefit tabs below</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 text-lg font-semibold focus:outline-none ${activeTab === 1 ? 'bg-orange-300 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleTabClick(1)}
          >
            Benefit # 1
          </button>
          <button
            className={`px-4 py-2 mx-2 text-lg font-semibold focus:outline-none ${activeTab === 2 ? 'bg-orange-300 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleTabClick(2)}
          >
            Benefit # 2
          </button>
          <button
            className={`px-4 py-2 mx-2 text-lg font-semibold focus:outline-none ${activeTab === 3 ? 'bg-orange-300 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleTabClick(3)}
          >
            Benefit # 3
          </button>
        </div>
        {activeTab === 1 && (
            <div>
            <h2 className="text-center  font-bold">UNECESSARY EXPENSES</h2>
          <p className="text-lg text-center text-gray-600">
           We suggest a roof inspection at least once a year. Every homeowner knows the roofing system
           is the most expensive part of he house. Neglecting it over time can cause
           severe damage. As damage gets worse costs go up. More importantly
           this can contribute to an unsafe enviornment for people living inside. Let us give
           you the insight you need to reslove any issues before they escelate.   </p>
           <img
    src="https://duslyfgmfacnizupkxve.supabase.co/storage/v1/object/public/photos/pipes.jpg?t=2024-04-22T03%3A03%3A00.992Z"
    alt="Homeowners"
    className="mx-auto mt-8 mb-2"
    width="200" // Adjust the width as needed
    height="150" // Adjust the height as needed
  />
          </div>
          
        )}
        {activeTab === 2 && (
            <div>
                <h2 className="text-center  font-bold">INSURANCE COMPLIANCE</h2>
          <p className="text-lg text-center text-gray-600">
           We give inspections from the top of the roof ensuring any potential issues or damage are found early, reducing risk of future claims.
           We only specialize in roof inspections and often give a more detailed inspection then licensed contractors or home inspectors. 
           Since we are not contractors of any kind our service has no conflict of interest. 
           Our reports are thourough with clear images that are undeniable to our findings.  </p>
     
  <img
    src="https://duslyfgmfacnizupkxve.supabase.co/storage/v1/object/public/photos/broken-tile.jpg?t=2024-04-22T02%3A43%3A05.683Z"
    alt="Homeowners"
    className="mx-auto mt-8 mb-2"
    width="200" // Adjust the width as needed
    height="150" // Adjust the height as needed
  />
          </div>
        )}
        {activeTab === 3 && (
            <div>
            <h2 className="text-center  font-bold">EXPERT GUIDANCE</h2>
          <p className="text-lg text-center text-gray-600">
           Our roof inspections only cost $125.00. WIth over 40 years of experience in the industry,
           our reliable, independent roofing inspectors, gurantee their expertise will satifsy your needs.
           These inspectors specialize in roof inspections and have serviced 1000&apos;s of
           roofs throughout their career. No mattter what issues are found we will guide you on your best
           options.
          </p>
          <img
    src="https://duslyfgmfacnizupkxve.supabase.co/storage/v1/object/public/photos/RK.jpg?t=2024-04-21T19%3A05%3A49.730Z"
    alt="Homeowners"
    className="mx-auto mt-8 mb-2"
    width="200" // Adjust the width as needed
    height="150" // Adjust the height as needed
  />
          </div>
        )}
      </div>
    </section>
  );
};

export default NotFree;
