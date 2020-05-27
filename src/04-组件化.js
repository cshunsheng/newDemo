import React from 'react'
import ReactDOM from 'react-dom'

//后缀名一般不能省略，省略的话需要webpack配置
import Hello from '@/components/Hello'
/**
 * 创建组建的两种方式
 * 组件的首字母需要大写
 * 父组件数据的传递，子组件的数据接收
 */
//第一种

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