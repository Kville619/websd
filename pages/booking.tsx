import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    gate_code: '',
    levels: '',
    phone_number: '',
  });

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    router.push('/terms');
  };

  return (
    <div>
      <Head>

   
<title>Bookings - Schedule Your Roof Inspection | San Diego Roof
   Inspections</title>
<meta name="title" content="Bookings - Schedule Your Roof Inspection
 | San Diego Roof Inspections" />
<meta name="description" content="Schedule your roof inspection 
with San Diego Roof Inspections. Our expert inspectors provide 
thorough evaluations and detailed reports within 1-2 business days.
 Book now" />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Bookings - Schedule Your Roof Inspection | San Diego Roof Inspections" />
<meta property="og:description" content="Schedule your roof inspection with San Diego Roof Inspections. Our expert inspectors provide thorough evaluations and detailed reports within 1-2 business days. Book now" />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Bookings - Schedule Your Roof Inspection | San Diego Roof Inspections" />
<meta property="twitter:description" content="Schedule your roof inspection with San Diego Roof Inspections. Our expert inspectors provide thorough evaluations and detailed reports within 1-2 business days. Book now" />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>


        <meta name="robots" content="noindex, nofollow"/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Bookings - San Diego Roof Inspection",
              "description": "Book your roof inspection appointment with us today.",
              "url": "https://www.sdroofinspection.com/bookings"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Roof Inspection",
              "provider": {
                "@type": "LocalBusiness",
                "name": "SD Roof Inspection",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "4517 West Point Loma Blvd",
                  "addressLocality": "San Diego",
                  "addressRegion": "CA",
                  "postalCode": "92107",
                  "addressCountry": "US"
                },
                "telephone": "+1-858-522-9562"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebForm",
              "name": "Booking Form",
              "url": "https://www.sdroofinspection.com/bookings",
              "potentialAction": {
                "@type": "Action",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.sdroofinspection.com/bookings",
                  "inLanguage": "en-US"
                },
                "expectsAcceptanceOf": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              "telephone": "+1-858-522-9562",
              "contactType": "customer service",
              "contactOption": "TollFree",
              "areaServed": "US",
              "availableLanguage": "English"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Home",
              "url": "https://www.sdroofinspection.com/index"
            })
          }}
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Roof Inspections",
              "url": "https://www.sdroofinspection.com/bookings"
            })
          }}
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "About Us",
              "url": "https://www.sdroofinspection.com/aboutus"
            })
          }}
        />  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "FAQ",
            "url": "https://www.sdroofinspection.com/FAQ"
          })
        }}
      />
      </Head>
      <Header />
      <div className="container mx-auto mt-8 mb-8 px-4">
      <section className="text-center bg-gray-100 p-6 mb-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Form</h2>
          <form onSubmit={handleFormSubmit}>
            {/* Form inputs */}
            <div className="mb-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="text" name="gate_code" value={formData.gate_code} onChange={handleInputChange} placeholder="Gate Code" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="text" name="levels" value={formData.levels} onChange={handleInputChange} placeholder="Levels" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} placeholder="Phone Number" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="block w-full bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Start Booking 
            </button>
          </form>
        </section>
        {/* Inspection Details Section */}
        <div className="lg:w-1/2 lg:pl-4">
          <section className="text-center mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-8 mb-8">How to prepare for a Roof Inspection</h2>
            <ul className="text-center list-inside text-center mb-4">
              <li className="items-center">
                <span className="mr-2">&#10003;</span>Roof Inspections take between 30-45 min.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> Please make sure the residence is accessible and pets are secured.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> Nobody needs to be home for the roof inspection. We just need access to the roof.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> These roof inspections are done hands-on from the top of the roof by one of our expert inspectors. 
              </li>
              <li className="items-center">
                <span className="mr-2 mb-8">&#10003;</span>Roof inspections are completed within 1 business day of booking most of the time. Always completed within 2 business days.
              </li>
            </ul>
          </section>
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          <section className="text-center mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-8 mb-8">What is included in the Inspection Report?</h2>
            <ul className="text-center list-inside text-center mb-4">
              <li className="items-center">
                <span className="mr-2">&#10003;</span>  We start by walking the roof surface visually inspecting for any signs of leaks, wear and tear, damage, vegeation overgrowth, mistakes from a previous roofer.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> We also look for signs of the roof age and its lifespan. 
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span>We check to see if drains and gutters are visually not clogged. 
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span>We check all flashings and around the chimney area for any issues.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> We check for structural damage such as a sagging roof. We look for missing tile shingle peices.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span>  We take note and document any issues found in any of these areas on the roof.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> We take pictures of everything we are inspecting and include them in our report.
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span> Once the roof inspection is complete, a verbal report will be given in person or over the phone and you will receive an email with your detailed report and images. 
              </li>
              <li className="items-center">
                <span className="mr-2">&#10003;</span>  We will give guidance on the next best steps for any issues we find.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  );
};
export default Booking;