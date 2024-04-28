import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  text: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, text, imageUrl, buttonText, buttonLink }) => {
  return (
    <div className="container mx-auto py-12 px-4">
  
      {/* For larger screens, display image and text side by side */}
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <img src={imageUrl} alt="Product" className="w-3/4 h-auto" />
        </div>
        <div className="lg:w-1/2 lg:ml-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{text}</p>
          <Link href={buttonLink} passHref>
  <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">{buttonText}</button>
</Link>

  <h1 className="font-bold text-red-500 text-3xl mt-2">858-522-9562</h1>
        </div>
      </div>

      {/* For medium and small screens, display image and text stacked */}
      <div className="lg:hidden">
  <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
  <img src={imageUrl} alt="Product" className="w-full h-auto mx-auto" /> {/* Center the image */}
  <div className="mt-8">
    <p className="text-lg text-gray-600 mb-8 text-center">{text}</p>
    <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 block mx-auto">{buttonText}</button> {/* Increased padding and rounded-lg */}
    <h1 className="font-bold text-red-500 text-4xl mt-8 text-center">858-522-9562</h1>
  </div>
</div>

    </div>
  );
};

export default Hero;
