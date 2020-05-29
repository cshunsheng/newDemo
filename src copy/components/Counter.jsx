import React from 'react'
import ReactTypes from 'prop-types'

class Son extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div>
            <h1>这是子组件----{this.props.count}</h1>
        </div>
    }
    UNSAFE_componentWillReceiveProps(newProps){
        //组件初始化时，不会触发
        //只有props里面的数据改变后，才会触发，
        //newProps里面才能拿到最新的值，this.props为旧值
        console.log(this.props.count,newProps.count,'UNSAFE_componentWillReceiveProps')
    }
}
/**
 * 生命周期函数解析
 */
//defaultProps设置组件默认值
export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg:'ok',
            count: props.initCount//基数
        }
    }
    static  defaultProps= {
        initCount: 0
    }
    //数据校验(需要prop-types依赖包)
    static propTypes={
        initCount: ReactTypes.number
    }
    UNSAFE_componentWillMount(){
    // componentWillMount(){//在vue中和created类似
        //此时无法获取页面上的Dom元素，也不能操作Dom
        // console.log(document.getElementById('h1as'))
        console.log(this.props.initCount,'componentWillMount')
        // console.log(this.state.msg)
        // this.myselfFunc()

    }
    //渲染虚拟DOM，这个函数执行完毕，虚拟DOM渲染完成，但是还没挂载到页面上
    render(){
        //return 之前还是虚拟DOM还是不存在
        //组件更新之前DOM还是旧的，组件初始化时不存在DOM
        console.log(this.refs.h3&&this.refs.h3.innerHTML,'render')
        return <div>
            <h1 id="h1as">简单的计算器组件</h1>
            <hr/>
            <input type="button" value="+1" id="btn" onClick={(e)=>this.increment(e,3)}/>
            <h3 ref='h3'>当前的数量是：{this.state.count}</h3>
            <h4>{this.state.msg}</h4>
            <Son count={this.state.count}></Son>
        </div>
        //return 之后，虚拟DOM渲染完成，当时页面上没有DOM元素
    }
    increment=(e,val)=>{
        // console.log(e,val)
        this.setState({
            count: ++this.state.count
        })
    }
    //页面挂载到页面之后执行，页面上可以看到元素了
    componentDidMount(){
        //可以操作DOM了
        // 类似与mounted
        console.log('componentDidMount')
        /**
         * 原生注册事件
         */
        // document.getElementById('btn').onclick = () => {
        //     console.log('点击按钮')
        //     this.setState({
        //         count: ++this.state.count
        //     })
        // }
    }
    
    shouldComponentUpdate(nextProps,nextState){
        //必须返=返回一个布尔值，如果为false后续生命周期函数不会被执行，组件回到了运行中，render函数不会调用，页面不会更新，但是state状态改变了
        // console.log(this.state.count,'=======',nextState.count)
        // return this.state.count%2 === 0?true:false
        console.log('shouldComponentUpdate')
        return true
    }
    //将要更新，还未更新，虚拟DOM为旧的，页面也是旧的

    UNSAFE_componentWillUpdate(nextProps,nextState){
    // componentWillUpdate(nextProps,nextState){
        //此时页面上的节点都是旧，此时DOM操作要谨慎，
        console.log(this.refs.h3.innerHTML,'componentWillUpdate')
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log(this.refs.h3.innerHTML,'componentDidUpdate')
    }
    myselfFunc(){
        console.log('这是我自己定义的函数，和生命周期函数无关')
    }
} 