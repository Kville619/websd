import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Repairs = () => {
  return (
    <div>
      <Head>
        <title>Repairs - San Diego Roof Inspection</title>
        <meta name="description" content="Learn about our roof repair services." />
      </Head>
      <Header />
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Roof Repair Details</h1>
          <ul>
            <li>Roof repairs take between 2-4 hours.</li>
            <li>Please make sure the residence is accessible and pets are secured.</li>
            <li>Nobody needs to be home for the roof repair. The only thing needed is access to the roof.</li>
            <li>Once the roof repairs are complete, we will send you pictures so you have an after shot of the work.</li>
            <li>If you use us for roof repair work you will not be charged for your next roof inspection on another property at a future time.</li>
          </ul>
          <div className="mt-8">
            <form action="/submit" method="post">
              <div className="mb-4">
                <p>Use your ID provided in your roof inspection email to schedule your roof repair. All repairs are made within 2 business days of paid invoice.</p>
                <label htmlFor="ID" className="block text-gray-700">ID:</label>
                <input type="text" id="id" name="id" className="border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 block w-full" />
              </div>
          
            
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Repairs;
