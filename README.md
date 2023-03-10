# study-wheel
本项目主要收集遇到比较有趣的技术和问题及其解决的方案，并列出了应用的例子。

## 在线预览
[https://xingge00.github.io/study-wheel/](https://xingge00.github.io/study-wheel/)
 
## 1.单例模式的下拉框组件

__描述__：该组件主要是针对了在element-plus组件库的select下拉框的使用做了优化，随着在一个页面中渲染的下拉框组件实例增加页面性能会直线下降

__性能下降原因__：初步判断是element-plus的el-select组件的弹出层使用第三方库popper.js来实现造成的，因为横向对比了Ant Design的下拉框组件自己实现的弹出层并没有出现严重的性能问题。（具体原因没有深入研究）

__解决方案__:优化的思路是正常情况下页面上通常只有一个下拉框的弹出层处于展开状态，那么就可以全局只用一个下拉框的实例，哪里需要使用到下拉框就通过Teleprot组件将实例的dom传送到目标位置实现从而实现跟常规的下拉框一样效果又能避免实例过多产生的性能问题。

__跳转__：[组件代码](https://github.com/xingge00/study-wheel/tree/master/src/package/v-select)、[应用例子](https://github.com/xingge00/study-wheel/tree/master/src/views/VirtualSelect)

## 2.跨标签页通信以及与后端同步状态

__描述__：该例子是通过sharedWorker来实现狂标签页通信，在共享线程里对接后端websoket进行通信（避免多标签页的场景下重复websocket连接），再重共享线程中同步各个标签页的状态。

__注意点__：线程的代码文件需要放在public目录下

__跳转__：[封装代码](https://github.com/xingge00/study-wheel/tree/master/src/package/communicateAcrossTabs)、[共享线程代码](https://github.com/xingge00/study-wheel/blob/master/public/worker/sharedWorker.js)、[应用例子](https://github.com/xingge00/study-wheel/blob/master/src/views/CommunicateAcrossTabs/index.vue)
## 3.vite插件实现生成路由配置
__描述__：主要思路是参考vite官网加载虚拟模块的例子，在vite中拦截处理虚拟模块，由于在vite中可以使用当前项目的运行node环境，从而可以读取到本地项目的文件结构，通过扫描src/view目录文件生成相应的路由配置，并通过读取每个页面的desc.json来丰富路由配置信息。

__该插件的作用优势__：1.不再需要编写路由配置，2.由每个当前页面desc.json控制当前页面路由信息使得路由跟页面结构更加直观，3.json配置化为实现低代码的铺路。

__跳转__：[插件代码](https://github.com/xingge00/study-wheel/blob/master/vitePlugins/autoImportRouter/index.js)

例子如下

```bash
# vite.config.js
import { autoImportRouter } from './vitePlugins/autoImportRouter'
export default defineConfig({
  plugins: [autoImportRouter()]
})

# router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from 'autoImport'
const routes = [
  {
    path: '/',
    redirect: `/${constantRoutes[0].name}`,
  },
  ...constantRoutes,
  {
    path: '/:path(.*)',
    component: () => import('@/views/404/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export { constantRoutes }
export default router

```


## 4.拖动指令

__描述__：通过一个简单v-drag指令使得元素拥有底部栏拖动的效果

__跳转__：[组件代码](https://github.com/xingge00/study-wheel/tree/master/src/package/directives/dragDirective.js)、[应用例子](https://github.com/xingge00/study-wheel/blob/master/src/views/directives/index.vue)


## Getting started

```bash
# clone the project
git clone https://github.com/xingge00/study-wheel.git

# enter the project directory
cd study-wheel

# install dependency
yarn install

# develop
yarn dev

```

This will automatically open http://localhost:8848

## Build

```bash
# build the project
yarn build

```
