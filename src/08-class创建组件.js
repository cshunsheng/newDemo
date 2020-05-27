import React from 'react'
import ReactDOM from 'react-dom'


/**
 * class创建组件有自己的私有属性和生命周期函数（有状态组件）
 * function 创建的组件是没有自己的似有属性和生命周期函数的（无状态组件）
 * 如何选择？组件有无私有属性，
 * 无状体组件运行效率更高
 * 
 * props与state区别
 *  props外界传递过来的，只读，不可重新赋值
 *  state是私有的 可读可写
 */
const user = {
    name: 'xiaoming',
    age: 45
}
//用class定义组件需要继承自React.Component 
//不需要porps接收 ，用this.porps来访问



class Header extends React.Component {
    constructor(){
        super()
        //state上的数据是可读可写的，props是只读的
        this.state = {
            msg:'这是class创建的组件'
        }
    }
    //在组件内部必须有render函数,渲染当前组件对应的jsx虚拟DOM结构
    render(){
        //render函数中，必须返回合法的jsx虚拟DOM结构
        return <div>
            {/* 在组件内部，this，表示当前组件 */}
            {this.state.msg}--{this.props.name}--{this.props.age} {this.props.sex}
        </div>
    }
}

ReactDOM.render(<div>
    123
    {/* Header标签，其实是Header类对的一个实例 */}
    <Header {...user}></Header>
</div>, document.getElementById('app'))