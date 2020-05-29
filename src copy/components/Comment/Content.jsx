import React from 'react'
import ReactTypes from 'prop-types'
// export default class Con1 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             color: 'red'
//         }
//     }
//     render() {
//         return <div>
//             <h1>这是父组件</h1>
//             <Con2 color={this.state.color}></Con2>
//         </div>
//     }
// }
// class Con2 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }
//     render() {
//         return <div>
//             <h2>这是子组件</h2>
//             <Con3 color={this.props.color}></Con3>
//         </div>
//     }
// }
// class Con3 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }
//     render() {
//         return <div>
//             <h3 style={{color: this.props.color}}>这是孙组件</h3>
//         </div>
//     }
// }


export default class Con1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red'
        }
    }
    /**
     * getChildContextTypes
     * getChildContext
     * childContextTypes
     * contextTypes
     * context
     * 一个方法，
     * 三个属性
     */
    //必须返回一个对象,共享给所有子孙组件的
    getChildContext() {
        return {
            color: this.state.color
        }
    }
    //属性校验 静态方法
    static childContextTypes = {
        color: ReactTypes.string
    }
    render() {
        return <div>
            <h1>这是父组件</h1>
            <Con2></Con2>
        </div>
    }
}
class Con2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>
            <h2>这是子组件</h2>
            <Con3></Con3>
        </div>
    }
}
class Con3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static contextTypes = {
        color: ReactTypes.string
    }
    render() {
        return <div>
            <h3 style={{ color: this.context.color }}>这是孙组件</h3>
        </div>
    }
}