const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.request.header = {
        'content-type': 'text/html'
    }
  ctx.body = `
    <body style="background: rgba(0,0,0,.8)">
        <div>
            Hello World
        </div>
    </body>
  `;
});

app.listen(3000);

module.exports = app
