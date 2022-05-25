const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    let url = ctx.url;
    if (url === '/index') {
        ctx.type = 'html';
        ctx.body = 'Index Sayfası <br> <h1>XXX Sayfamıza Hosgeldiniz</h1>';
    } else if (url === '/contact') {
        ctx.type = 'html';
        ctx.body = 'Contact Sayfası <br> <h1>XXX Sayfamıza Hosgeldiniz</h1>'
    } else if (url === '/about') {
        ctx.type = 'html';
        ctx.body = 'About Sayfası <br> <h1>XXX Sayfamıza Hosgeldiniz</h1>'
    } else {
        ctx.type = 'html';
        ctx.body= '404 Sayfa Bulunamadı.m'
    }
  });



const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu portu ${port}'da başlatıldı. `)
});