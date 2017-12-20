# 目录结构

* bin/start：启动脚本

  # 该项目必须安装 Redis,并且开启 Redis 服务才能启动

* config/：存放配置文件的目录，default.scheme.js 为 koa-scheme 所用
* lib/：存放一般代码文件的目录
* models/：存放模型文件的目录
* routes/：存放路由文件的目录
* theme/：存放主题模版文件的目录
* test/：存放测试文件的目录

# 模块配置

* koa-bodyparser：请求体解析中间件，相当于 express 中的 body-parser
* koa-flash：相当于 connect-flash
* koa-generic-session：通用的 session 中间件，可结合 mongodb、redis 等使用
* koa-generic-session-mongo：结合 koa-generic-session，将 session 存储到 mongodb 的中间件
* koa-static-cache：静态文件缓存中间件
* merge-descriptors：合并两个对象的工具模块
* mongoose：mongodb 驱动模块
* validator：参数验证工具模块
