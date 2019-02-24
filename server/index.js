const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const content = 'this will bee react app';
    const html = `
        <html>
            <head></head>
            <body>${content}</body>
            <script src="bundle.js"></script>
        </html>
    `;
    res.send(html);
});

app.listen('8000', () => {
   console.log('Listening port 8000');
});