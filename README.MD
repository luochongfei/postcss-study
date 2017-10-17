## postcss基本配置与cssnext常用语法
---
### 本示例使用环境
- node v8.0.0
- npm v5.0
- visual studio code v1.17.1
- postcss-cli v4.1.1

### 运行本示例
``` bash
$ npm install postcss-cli -g  //安装全局postcss
```

``` bash
$ npm install //安装依赖插件
```

``` bash
$ npm run dev //运行自动监控
```


### css源文件使用的.sss后缀，visual studio code安装 postcss-sugarss-language插件即可实现语法高亮

### 关键命令
```bash
postcss index.sss -o index-new.css -c postcss.config.js -w
```
#### 命令解析：
- index.sss是源文件
- -o index-new.css 指定输出文件(output)
- -c postcss.config.js 指定postcss配置文件(config)
- -w 实时监控变化(watch)
