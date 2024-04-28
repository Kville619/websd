import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy - San Diego Roof Inspection</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
      </Head>
      <Header />
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in velit eu justo sodales convallis. Nulla facilisi. Proin posuere vestibulum neque, sit amet ultrices est ultricies vitae. Phasellus dictum dapibus velit id gravida. Mauris mattis convallis lorem, nec blandit felis tincidunt et. Nulla facilisi. Vestibulum rhoncus elit eu pulvinar consequat.</p>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in velit eu justo sodales convallis. Nulla facilisi. Proin posuere vestibulum neque, sit amet ultrices est ultricies vitae. Phasellus dictum dapibus velit id gravida. Mauris mattis convallis lorem, nec blandit felis tincidunt et. Nulla facilisi. Vestibulum rhoncus elit eu pulvinar consequat.</p>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in velit eu justo sodales convallis. Nulla facilisi. Proin posuere vestibulum neque, sit amet ultrices est ultricies vitae. Phasellus dictum dapibus velit id gravida. Mauris mattis convallis lorem, nec blandit felis tincidunt et. Nulla facilisi. Vestibulum rhoncus elit eu pulvinar consequat.</p>
          {/* Add more paragraphs as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
