import http from 'node:http';
import {OBJETO} from './mjs/data.mjs';



const SERVER = http.createServer((req, res) => {
	console.log('Request received');

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
        <title>${OBJETO.titulo}</title>
        </head>
        <body>
        <h1>${OBJETO.subtitulo}</h1>
        <p>${OBJETO.descripcion}</p>
        </body>
        </html>
    `);

    res.end();
	
});

SERVER.listen(3000, () => {
	console.log(`Server listening on port http://localhost:3000`);
});