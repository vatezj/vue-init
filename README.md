## veu-init 脚手架

### 介绍

vue-init 脚手架 封装了axios,以及常用的一些js方法

### 特性：

* axios封装
* localstorage封装
* vuex使用结束
* 动态路由
* 常用方法封装
* ........





### 安装使用

```console
    git clone https://github.com/vatezj/vue-init.git  project_name
```

#### 安装依赖

```console
    cd project_name
    npm install 
```

#### 配置vue.config.js使其在开发环境下跨域

```js
const HOST = '127.0.0.1';
const PORT = '8045';
const DEV_URL = 'http://api.taoquan.ink/';
```

####  开发实时编译

```console
npm run serve
```

### Links

[vue](https://cn.vuejs.org/)

[vuex](https://vuex.vuejs.org/zh/)

[vue-router](https://router.vuejs.org/zh/)

[License MIT](./LICENSE)
