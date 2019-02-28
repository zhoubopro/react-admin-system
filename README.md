# react-admin-system
## react后台管理系统-全家桶
### 一、Git排除 `.idea` 文件

##### 1. 在 `.gitignore` 文件中添加
```git
echo '.idea' >> .gitignore
```
##### 2.将.gitignore文件上传到远程仓库

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
