import React from 'react'

export default function Hello(props) {
    console.log(props)
    // return null//如果返回一个null，则表示这个组件是空的，什么都不会渲染
    //在组件中要返回一个合法的jsx虚拟DOM
    //组件中的props都只是只读的，不可以赋值
return <div>这是Hello组件--{props.name} -- {props.age} -- {props.sex}</div>
}