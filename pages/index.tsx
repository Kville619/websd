import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChooseUsSection from '../components/WhyChooseUseSection';

import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';
import NotFree from '../components/Notfree';


export default function Home() {
  const imageUrl = "https://duslyfgmfacnizupkxve.supabase.co/storage/v1/object/public/photos/tileinspect.jpg?t=2024-04-22T00%3A58%3A13.573Z";
  const buttonText = "Book Roof Inspection";

  const textContent = `
  SDRI is San Diego's resource for timely, reliable, and unbiased roof inspections. 
  We are NOT a re-roof company and do NOT provide re-roof bids. Our focus as a 
  roof inspection company is geared towards providing impartial roof 
  inspections to homeowners. We provide a comprehensive report detailing
   the condition of the roof, identifying and documenting issues. This report
    is supported by pictures that are undeniable evidence of our findings. 
    Finally, we provide guidance on the next best steps if issues are found.
     CLICK or call to book a roof inspection below.
`;

const pageTitle = "Your Page Title"; // Define pageTitle
const pageDescription = "Your page description"; // Define pageDescription

  return (
    <div>
      <Head>
      
<title>San Diego Roof Inspection. Honest evaluations.</title>
<meta name="title" content="San Diego Roof Inspection. Honest evaluations." />
<meta name="description" content="SDRI is NOT a re-roof company and do NOT give re-roof bids. 
        We give reliable, impartial roof inspections." />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="San Diego Roof Inspection. Honest evaluations." />
<meta property="og:description" content="SDRI is NOT a re-roof company and do NOT give re-roof bids. 
        We give reliable, impartial roof inspections." />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="San Diego Roof Inspection. Honest evaluations." />
<meta property="twitter:description" content="SDRI is NOT a re-roof company and do NOT give re-roof bids. 
        We give reliable, impartial roof inspections." />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>


        <meta name="robots" content="noindex, nofollow"/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": pageTitle,
              "description": pageDescription,
              "url": "https://sdroofinspection.com",
              "video": {
                "@type": "VideoObject",
                "name": "Your Video Name",
                "description": "Description of your video",
                "thumbnailUrl": "https://example.com/video-thumbnail.jpg",
                "contentUrl": "https://example.com/video.mp4"
              },
              "image": {
                "@type": "ImageObject",
                "url": imageUrl,
                "width": "800",
                "height": "600"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "San Diego Roof Inspection",
              "description": "San Diego's resource for timely, reliable, and unbiased roof inspections.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4517 West Point Loma Blvd.",
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92107",
                "addressCountry": "US"
              },
              "telephone": "858-522-9562",
              "image": "https://example.com/image.jpg",
              "url": "https://example.com/",
              "sameAs": [
                "https://www.facebook.com/your-facebook-page",
                "https://twitter.com/your-twitter-handle"
              ],
              "service": {
                "@type": "Service",
                "name": "San Diego Roof Inspection",
                "description": "Unbiased roof inspections for homeowners.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Sd Roof Inspection",
                  "telephone": "858-522-9562",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "4517 West Point Loma Blvd.",
                    "addressLocality": "San Diego",
                    "addressRegion": "CA",
                    "postalCode": "92107",
                    "addressCountry": "US"
                  }
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
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVTJSXGS');
            `,
          }}
        />
      </Head>
      <Header />
      <Hero
        imageUrl={imageUrl}
        title="We are San Diego Roof Inspection. We are roofing experts, 
        NOT roofing contractors. Roof Inspections is all we do."
        text={textContent}
        buttonText={buttonText}
        buttonLink="/booking"
      />
      <NotFree />
      <WhyChooseUsSection buttonText={buttonText} />
      
      <Footer />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVTJSXGS"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />
    </div>
  );
}
