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

         注意：git push时会把本地当前分支上所有被commit的内容提交到远程仓库的分支中
         这样就可以一天中多次commit，工作结束时一次push

         git branch #查看本地分支信息，※标记的是当前所在本地分支
         git brach -vv #查看本地分支与远程分支的对应信息
         git checkout 分支名 #切换本地分支
         注意：由于不同分支代码版本不同，所以切换分支之前一定要先将修改commit。切换到其他分支后由于版本不同代码会变化要先知。


## 2025.8.20

1.  React的新语法结构：JSX，其相当于JavaScript + XML。其中XML是一种类HTML的数据传输格式

语法规则例：

  function App() { #定义App组件
 
  const names = ["Mike","Sarah","James"]

  return (
    <> #必须有唯一的根元素
      <div>
        <ul> #HTML定义结构
          {
            names.map(function(e,i){
              return <li>{e}</li>  #JS定义数据展示和交互规则
            })
          }
        </ul>
      </div>
    </>
  )
}

2.  条件渲染

function App() {

  const flag = true

  return (
    <>
      {flag?<div>show</div>:<div>hide</div>}
    </>
  )
}

3.  组件的定义与使用

方式一：函数组件

const Banner = (props) =>{
    return <div>函数式组件</div>
}

export default Banner;

方式二：类组件

import React from "react";
export default class Header extends React.Component{
    render(){
        return(
            <div>
                类组件
            </div>
        )
    }
}

使用方式：

import Header form "";

\<Header />

4.  组件通信

父组件：

\<Banner name = "jackey" age = "24"/>

子组件：

const Banner = (props) =>{

    return (
        <>
        \<div>函数式组件</div>
        \<div>今天是: {formatDate()}</div>
        \<div>名字：{props.name}</div>
        \<div>年龄：{props.age}</div>
        </>
    )
    
}

## 2025.8.21

1.  &&运算符的活用

    function Item({ name, isPacked }) {

      return (

        <li className="item">
           {name} {isPacked && '✅'} ##当isPacked为true时，✅会被渲染
        </li>
     );
}

2.  列表渲染

  假设存在以下数据：

  const people = 
  [{
  id: 0,
  name: '凯瑟琳·约翰逊',
  profession: '数学家',
}, {
  id: 1,
  name: '马里奥·莫利纳',
  profession: '化学家',
}, {
  id: 2,
  name: '穆罕默德·阿卜杜勒·萨拉姆',
  profession: '物理学家',
}, {
  id: 3,
  name: '珀西·莱温·朱利亚',
  profession: '化学家',
}, {
  id: 4,
  name: '苏布拉马尼扬·钱德拉塞卡',
  profession: '天体物理学家',
}];

通过filter筛选数据：

const chemists = people.filter(person =>
  person.profession === '化学家' 
);

通过map便利数据：

const listItems = chemists.map(
  person =>
  \<li>
     \<img
       src={getImageUrl(person)}
       alt={person.name}
     />
    \<p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       因{person.accomplishment}而闻名世界
     </p>
  </li>
);

※注意1：列表的每一项都需要一个唯一的key，而且最好不要使用索引当作key

※注意2：在任何位置，return一个组件时，都要有一个根容器，如：

   return (

    <article>
      {poem.lines.map((line, index) => #哪怕是箭头函数的隐式return，也要加根容器
       <div key={index}>
        {index>0?<hr />:''}
         <p>
          {line}
         </p>
       </div>
      )}
    </article>

  );


## 2025.8.25

1. 保持组件纯粹性

let guest = 0;

function Cup() {

  // Bad：正在更改预先存在的变量！

  guest = guest + 1;

  return \<h2>Tea cup for guest #{guest}\</h2>;

}

export default function TeaSet() {
  return (

    <>
      <Cup />
      <Cup />
      <Cup />
    </>

  );
}

如上所示，在一个组件中最好不要尝试改变组件之外的变量。

此即为组件的纯粹性

