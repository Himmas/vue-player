# 目录结构
``` bash
.                  
├── build                           # 构建脚本
│   ├── dev-server.js               # development server script
│   ├── webpack.base.conf.js        # shared base webpack config
│   ├── webpack.dev.conf.js         # development webpack config
│   ├── webpack.prod.conf.js        # production webpack config
│   └── ...
├── node_modules                    # node模块依赖
├── models                                  
├── route                           # 路由 
├── src
│   ├── components                  # 组件文件夹
│   │        ├── a.vue              # 单文件组件
│   │        ├── b.vue
│   │        └── ... 
│   ├── asserts                     # 资源文件夹
│   │        ├── images             # 图片
│   │        ├── css                # 样式表
│   │        ├── fonts              # 字体
│   │        └── js                 # 脚本
│   │
│   ├── main.js                     # webpack入口
│   └── ...
│
│
│
├── static                          # 静态资源目录 用绝对路径访问                                          
├── dist                            # 产出目录
├── test                            # 测试   
├── app.js                          # 服务端入口文件
├── .babelrc                        # babel 配置
└── package.json                    
``` 
