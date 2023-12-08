addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request: any) {
    // Make a request to your desired URL
    const url = 'https://landingpages.mrtin.co/shortener?domain=mvrt.in';
    const response = await fetch(url);
  
    // Get the response body
    let data = await response.text();

    // change all instances of "./" to "https://landingpages.mrtin.co/"
    data = data.replace(/"\.\//g, '"https://landingpages.mrtin.co/');
    // change all instances of "/_next/" to "https://landingpages.mrtin.co/_next/"
    data = data.replace(/"\/_next\//g, '"https://landingpages.mrtin.co/_next/');
  
    // Customize the response if needed
    const modifiedResponse = new Response(data, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  
    return modifiedResponse;
  }
  