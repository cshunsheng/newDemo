import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 创建组建的两种方式
 * 组件的首字母需要大写
 * 父组件数据的传递，子组件的数据接收
 */
//第一种
function Hello(props) {
    console.log(props)
    // return null//如果返回一个null，则表示这个组件是空的，什么都不会渲染
    //在组件中要返回一个合法的jsx虚拟DOM
    //组件中的props都只是只读的，不可以赋值
return <div>这是Hello组件--{props.name} -- {props.age} -- {props.sex}</div>
}
const person = {
    name: 'people',
    age: 30,
    sex: '男'
}
ReactDOM.render(<div>
    123
    {/* 把组件的名字以标签的形式书写 */}
    <Hello name={person.name} age={person.age} sex={person.sex}></Hello>
    <Hello {...person}></Hello>
</div>, document.getElementById('app'))