import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">San Diego Roof Inspection Can Help</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center md:mr-8">
 
  
    <ul className="text-gray-600 mt-4 text-center">

  <li>Even after getting a brand new roof installed, its always good to have an unbiased 3rd party inspect
    the roof to ensure the work was done properly avoiding any issues and possible disputes that can arise from this.
  </li>
  <li>Storms and adverse weather can create external damage to the top of the roof breaking tiles and clogging drains.</li>
  <li>The roof may be getting older and visually looking so with a few visible spots of damage, homeowners may just be looking
    for an honest assessment of these issues and the best route to take to address them.
  </li>
  <li>Help claim damage insurance.</li>
  </ul>
</div>



          {/* Benefit 2 */}
          <div className="flex flex-col items-center mt-8 md:mx-8">
         
             <img
    src="https://duslyfgmfacnizupkxve.supabase.co/storage/v1/object/public/photos/pipes.jpg?t=2024-04-22T03%3A03%3A00.992Z"
    alt="Homeowners"
    className="mb-2"
    width="200" // Adjust the width as needed
    height="150" // Adjust the height as needed
  />
            <ul className="text-gray-600 text-center mt-4">
              
              <li>
              Roofing system is suggest to be inspected once a year
            to ensure the roof is safe for the residence inside the property.
            </li>
            <li>we offer minor maintenance with our roof inspection if needed. Such as unclogging drains, cutting back 
              overgrown vegetation, sealing pipes, replacing broken tiles. </li>
            </ul>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col mt-8 items-center md:ml-8">
           
               
            <ul className="text-gray-600 text-center mt-4">
              
              
              
              <li>We are the only company in San Diego offering roof inspections that is not a conflict of interest , giving 
                reliable unbiased inspection reports that are undeniable in assessing the condition of the roofing system.
            </li>
           <li>We will make your clients satisfied with a report that will blueprint the next 40 years of life for their roof.

           </li>
           <li>Our only profit motive is to give specialized unbiased roof inspections. </li>
           <li>Having to replace a roof right before putting a home on the market is very stressful, our roof inspection
            can help prevent unnecessary reroofs contractors are looking to bid.
           </li>

            
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
