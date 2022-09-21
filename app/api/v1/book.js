const Router = require('koa-router')
const router = new Router({
    prefix: '/v1'
})

router.post('/book/:id/:name', (ctx, next) => {
    console.log('访问图书')
    const path = ctx.params
    const query = ctx.request.query
    const header = ctx.request.header
    const body = ctx.request.body
    console.log(JSON.stringify(query))
    ctx.body = 'api book'
})

module.exports = router
