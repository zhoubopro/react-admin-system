# react-admin-system
## react后台管理系统-全家桶
### 核心库
```
|-- react: ^16.8.3
|-- react-router-dom: ^4.3.1
|-- antd: ^3.13.6
|-- axios: ^0.18.0
|-- less: ^3.9.0
|-- less-loader: ^4.1.0
|-- babel-plugin-import: ^1.11.0
|-- webpack: ^4.28.3
```
### 目录结构说明
```
|-- config           # webpack配置文件        
|-- public           # 公共资源文件
|    |-- index.html  # 静态页面模板
|-- scripts          # 打包脚本
|-- src              #    
|    |-- assets      # 静态资源
|    |-- components  # 组件
|    |-- config      # 配置文件
|    |-- pages       # 页面
|    |-- styles      # 样式
|    |-- test        # 测试
|    |-- utils       # 公共工具
|    |-- App.js      # 
|    |-- index.js    # 入口文件
|-- .gitignore       # git不提交配置文件
|-- package.json     # 包管理文件
|-- README.md        # 说明文件
|-- yarn.lock        # 
|-- yarn-error.log   #    
|-- .babelrc         # babel配置文件
```
### 一、git排除.idea文件

##### 1.在`.gitignore`文件中添加
```
# IntelliJ project files
.idea/
.idea
*.iml
out
gen

echo '.idea' >> .gitignore
```

##### 2.将`.gitignore`文件上传到远程仓库

```git
 git pull
 git add .gitignore
 git commit -m 'edit .gitignore'
 git push origin master
```
##### 3.删除git的.idea文件
```git
git rm --cached -r .idea
```
##### 4.同步到远程仓库
```git
git commit -m 'delete .idea'
git push origin master
```

## 问题
### webpack 
 - [react暴露后，webpack4.19.1实现按需加载antd](https://juejin.im/post/5c3964986fb9a049b41cb040)
 - [antd less按需加载遇到的坑：.bezierEasingMixin()](https://blog.csdn.net/weixin_40814356/article/details/84676903)