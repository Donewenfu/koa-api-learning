const Koa = require('koa')

// 创建一个应用程序对象
const app = new Koa()

// koa中间件
app.use(async (ctx, next)=>{
    await next()
    console.log(ctx.r)
})

app.use(async (ctx, next) => {
    const axios = require('axios')
    const data = await axios.get('http://toutiao.itheima.net/dist/index.html#/')
    ctx.r = data
    await next()
})

// 监听端口号 8148
app.listen(8148)
