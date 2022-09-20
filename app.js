const Koa = require('koa')

// 创建一个应用程序对象
const app = new Koa()

// koa中间件
// app.use((ctx, next)=>{
//     // ctx 上下文
//     console.log('1')
//     // 如果要执行下一个中间件 需要执行 next参数
//     let a = next()
//     console.log(a)
//     console.log('2')
// })

app.use(async (ctx, next) => {
    // console.log('3')
    // next()
    // console.log('4')
    const axios = require('axios')
    const start = Date.now()
    const data = await axios.get('https://talelin.com/')
    const end = Date.now()
    console.log(end-start)
    console.log(data)
})

// 监听端口号 8148
app.listen(8148)
