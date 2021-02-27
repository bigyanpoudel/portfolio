const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handdle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    const PORT = process.env.PORT || 3000;
    server.use(express.json());

    server.get('*', (req, res) => {
        return handdle(req, res);
    });
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`server is running at ${PORT}`);
    });
});