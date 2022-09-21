// koa
const Koa = require('koa')
// bodyParse
const bodyParse = require('koa-body')
// 初始化
const initManage = require('./app/core/initManage')
// 创建一个应用程序对象
const app = new Koa()

// bodyParse 中间件
app.use(bodyParse({
    multipart: true // 是否支持 multipart-formdate 的表单
}))

initManage.initApp(app)



// 监听端口号 8148
app.listen(8148, () => {
    console.log('服务器已经开启**********')
})
