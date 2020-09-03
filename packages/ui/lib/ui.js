const Koa = require('koa');
const Vue = require('vue')

const chalk = require('chalk');
const app = new Koa();

app.use(ctx => {

    const app = new Vue({
        data: {
            url: ctx.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`

    })

    const renderer = require('vue-server-renderer').createRenderer({
        template: require('fs').readFileSync('./html/index.template.html', 'utf-8')
      })
      
      renderer.renderToString(app, (err, html) => {
        ctx.body = html
      })
});

app.listen(3000, () => {
    chalk.blueBright(console.log('UI server running on http://localhost:3000'))
});

module.exports = app
