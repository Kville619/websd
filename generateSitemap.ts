const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Import your routes or define them manually
const routes = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  // Add more routes as needed
];

(async () => {
  try {
    const stream = new SitemapStream({ hostname: 'https://example.com' }); // Replace 'example.com' with your domain
    routes.forEach(route => {
      stream.write(route);
    });
    stream.end();

    const sitemap = await streamToPromise(stream);
    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully.');
  } catch (error) {
    console.error(error);
  }
})();
