import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State to manage button disabled status
  const router = useRouter();

  useEffect(() => {
    const agreedToTermsFromLocalStorage = localStorage.getItem('agreedToTerms');
    if (agreedToTermsFromLocalStorage) {
      setAgreedToTerms(agreedToTermsFromLocalStorage === 'true');
    }
  }, []);

  // Update button disabled status when checkbox state changes
  useEffect(() => {
    setIsButtonDisabled(!agreedToTerms);
  }, [agreedToTerms]);

  const handleCheckboxChange = () => {
    const newValue = !agreedToTerms;
    setAgreedToTerms(newValue);
    localStorage.setItem('agreedToTerms', String(newValue));
  };

  const handleBookInspection = () => {
    if (agreedToTerms) {
      const formDataString = localStorage.getItem('formData') || '{}'; // Handle null case
      const formData = JSON.parse(formDataString);
      router.push({
        pathname: '/bookings',
        query: formData, // Pass formData as query params
      });
    } else {
      alert('Please agree to the terms and conditions first.');
    }
  };

  return (
    <div>
      <Header />
      <h1 className="text-center font-bold mt-8 mb-4">Terms and Conditions</h1>
      <ul className="ml-8">
        <li>1. Welcome to San Diego Roof Inspections. By scheduling an inspection with us, you agree to the following terms and conditions.</li>
        <br />
        <li>2. Inspection Process: Our service includes physically climbing onto the roof of the specified property to conduct a thorough inspection. We document the process through photographs.</li>
        <br />
        <li>3. Liability for Damages: San Diego Roof Inspections is not liable for any damages to the property that are not directly caused by our inspectors. Our responsibility is limited to damages directly resulting from our inspection process.</li>
        <br />
        <li>4. Homeowner Responsibility: The homeowner is not responsible for any injuries that occur to our inspectors during the inspection process. Our company takes full responsibility for the safety of our personnel.</li>
        <br />
        <li>5. Appointment Scheduling: Inspections are conducted on the agreed-upon date and time. We reserve the right to reschedule or cancel appointments due to unforeseen circumstances.</li>
        <br />
        <li>6. Inspection Results: The results of the inspection will be communicated to the homeowner, including any necessary repair recommendations.</li>
        <br />
        <li>7. Changes to Terms: We reserve the right to modify these terms and conditions at any time.</li>
      </ul>
      <label className="mr-8 ml-8">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={handleCheckboxChange}
        />
        I agree to the terms
      </label>
      <button
        onClick={handleBookInspection}
        disabled={isButtonDisabled} // Set button disabled status
        className="bg-blue-500 hover:bg-blue-700 text-white mt-8 font-bold py-2 px-4 rounded"
      >
       Agree to Terms
      </button>
      <Footer />
    </div>
  );
};

export default Terms;
