import React from 'react'
import ReactDOM from 'react-dom'
let a = 2
let str = '这是一个字符串'
let boo = true
let title = 'p标签'
const h1 = <h1>这是H1标签</h1>
const arr = [
    <div>111</div>,
    <div>222</div>,
    <div>333</div>,
    <div>444</div>,
]
const arr2 = ['111', '2222', '33333']
const arr2Name = []
arr2.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>
    arr2Name.push(temp)
})
/**
 * jsx
 * 渲染Number
 * 渲染String
 * 渲染布尔类型
 * 为属性绑定值
 * 渲染jsx元素
 * 渲染jsx元素数组
 * 将普通字符串数组，转为jsx数组渲染到页面上(两种方式)
 * jsx元素上class需要写成className
 * 
 * 什么时候用{},当我们需要在jsx控制的区域内，写js表达式来了，则需要把js代码写到{}中
 */
ReactDOM.render(
    // 要有唯一的根元素
    <div>
        {a}
        <hr />
        {str}
        <hr />
        {boo ? 'true' : 'false'}
        <hr />
        <p title={title}>这是p标签</p>
        <hr />
        {/* {arr} */}
        {
            //这也是注释
        }
        <hr />
        {arr2Name}
        <hr />
        {arr2.map(item => <h5 key={item}>{item}</h5>)}
        <p className='class-name'>className</p>
    </div>,
    document.getElementById('app'))