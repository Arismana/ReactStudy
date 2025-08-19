# React study

## 2025.8.19

1. How to create a react project（Vite）

    npm create vite@latest my-app -- --template react

2. How run it

    npm install

    npm run dev

3. Project Architecture

         my-app/
            node_modules/  # Dependencies
            public/ # Public Static Assets
            src/ # Main Code
              assets/ # Static Assets (images, fonts, CSS, etc.)
              components/ # Reusable Components
              App.jsx # Root Component
              main.jsx # Mount the Root Component to the Template HTML
              xx.css  # Style Files, written separately in a single file (different from Vue)
            index.html # Project Template HTML
            package.json # Records Information about the Project’s Dependency Packages
            package-lock.json # Dependency Lock File
            vite.config.js # Vite Configuration File
            .gitignore # Manage Git Commits and Pushes

4. Git study node

    (1). git 用于多人协作开发时的代码版本控制工具。其将代码存储区分为三个区域
  
         工作区：也就是整个工程文件夹下
         暂存区：在工作区使用git init指令之后即形成暂存区，暂存区会和工作区的文件内容进行哈希值计算
           当哈希值不同时，即工作区的内容还未更新到暂存区时，这些未更新到暂存区的改动在vscode中会有非常明显的标志
         本地仓库：存放着代码的各个版本

    (2). 常用的git指令与对应的解释

         git init #初始化git
         git add 文件名1 文件名2 #添加文件到暂存区
         git add . #将当前目录及其子目录下所有变动都添加
         git add -A #把所有变动都添加
         git commit -m "描述信息" #提交到本地仓库
         git status #查看当前状态
         git log #查看提交记录

         以下仅在初次连接远程仓库时使用：
         git remote add origin https://github.com/username/my-project.git #将本地仓库连接到远程仓库 origin是远程仓库名
         git branch -M main #创建仓库分支main
         git push -u origin main #将代码上传到远程仓库

         后续改动与上传：
         git add
         git commit -m ""
         git push

         git push -u origin 分支名 #将代码推送到远程仓库的新分支中，并且此后一直与此分支保持连接
         git checkout -b 分支名 #创建并切换到本地新分支

         注意，git push时会把本地当前分支上所有被commit的内容提交到远程仓库的分支中
         这样就可以一天中多次commit，工作结束时一次push





