#demo
![](http://7xt8hz.com1.z0.glb.clouddn.com/neteasy%281%29.gif)

#usage

```bash
$ git clone https://github.com/Himmas/vue-player.git

$ npm install

$ npm run dev

$ node app.js

```


#todos

####播放器

- ~~播放器播放&暂停~~
- ~~歌词滚动~~
- ~~进度条拖拽~~
- ~~搜索列表~~
- ~~搜索列表滑动分页~~
- ~~小播放器~~
- ~~推荐页面轮播~~
- ~~推荐页热门歌单~~
- ~~歌单~~
- ~~播放列表页面~~
- ~~播放列表下层禁止滚动~~
- 播放列表逻辑
- 热门歌手
- 新碟上架
- 用户歌单与收藏
- 歌曲图片与歌曲信息
- 音量调节
- 搜索分类
- 版权提示
- 登录与登出

####接口
- ~~搜索~~
- ~~热门歌单~~
- ~~用户歌单~~
- ~~fm~~
- ~~搜索~~
- ~~根据id获取歌单~~
- ~~根据歌手id获取专辑~~
- ~~根据id获取专辑~~
- ~~根据id获取lrc~~
- ~~获取歌曲信息~~
- ~~用户登录~~
- ~~热门歌手~~
- ~~新碟上架~~
- 每日推荐

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
│   │        └── fonts              # 字体
│   │
│   ├── main.js                     # webpack entry
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
