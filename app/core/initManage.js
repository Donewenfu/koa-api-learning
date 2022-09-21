// require导入插件
const requireDirectory = require('require-directory')
// koa-router
const Router = require('koa-router')

class InitManage {
    static initApp (app) {
        InitManage.app = app
        // 调用组合路由方法
        InitManage.initRouter()
    }
    // 组合路由
    static initRouter () {
        // process.cwd()方法可以获取项目的根路径
        const directPath = `${process.cwd()}/app/api`

        requireDirectory(module, directPath,{visit:ModuleLoad})

        function ModuleLoad (obj) {
            // instanceof 实例化 obj 是否为Router的实例对象
            if (obj instanceof Router) {
                InitManage.app.use(obj.routes())
            }
        }
    }
}
module.exports = InitManage
