
const http = require("http");


const server = http.createServer((req,res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>INDEX SAYFASI</h1>');
        res.write('<h2>XXX SAYFAMIZA HOSGELDINIZ</h2>');
    } else if ( url === "/about") {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>ABOUT SAYFASI</h1>');
        res.write('<h2>XXX SAYFAMIZA HOSGELDINIZ</h2>');
    } else if ( url === "/contact") {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>CONTACT SAYFASI</h1>');
        res.write('<h2>XXX SAYFAMIZA HOSGELDINIZ</h2>');
    }

    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} 'de başlatıldı.`);
});
