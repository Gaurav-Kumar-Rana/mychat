import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ClientApp from '../components/App';

const app = express();

// Serve static files for client
app.use(express.static('dist/client'));

app.get('*', (req, res) => {
  const appHTML = ReactDOMServer.renderToString(<ClientApp />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${appHTML}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
