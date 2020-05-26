console.log('ok')

import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 创建虚拟DOM元素
 * 
 * 参数1:创建的元素,
 * 参数2: 元素的属性,对象或者null
 * 参数3:子节点
 * 参数n,其它的子节点
 */
// const myh1 = React.createElement('h1',null,'这是一个H1')
const myh1 = React.createElement('h1',{id:'h1'},'这是一个H1')
const mydiv = React.createElement('div',null,'这是一个DIV',myh1)
/**
 * 把虚拟DOM渲染到页面上
 * 参数1:要渲染的虚拟DOM,
 * 参数2: 指定页面上的DOM元素,容器
 * 
 */
ReactDOM.render(mydiv,document.getElementById('app'))