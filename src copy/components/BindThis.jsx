import React from 'react'
export default class BindThis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg:'默认的msg值'
        }
        this.msgChange2 = this.msgChange2.bind(this,'val3','val4')//有返回值，返回新的函数，新函数this指向参数1，不修改原函数
    }
    /**
     * 第一种：用bind修改this指向、
     * 第二种：在构造函数里修改this指向
     * 第三种：箭头函数
     */
    render() {
        return <div>
            <h1>关于this的绑定问题</h1>
            {/* 用bind第一个参数修改this的指向， */}
            <input type="button" value="this绑定以及传值一" onClick={this.msgChange1.bind(this,';val1','val2')}/>
            <input type="button" value="this绑定以及传值二" onClick={this.msgChange2}/>
            <input type="button" value="this绑定以及传值三" onClick={() => this.msgChange3('val5','val6')}/>
            <h3>{this.state.msg}</h3>

            {/* react 只是单项数据流绑定 */}
            {/* 如果给表单元素提供了value属性绑定，则需要给input提供，readOnly或者change事件 */}
            {/* readOnly表示input为只读，不可修改；change表示可以修改，但是修改逻辑需要自己定义 */}
            <input type="text" ref="txt" style={{width: '100%'}} name="" id="" value={this.state.msg} onChange={(e) => this.inputChange(e)}/>
            {/* 当参数除了事件e时，DOM元素上可以用this.方法名的方式书写，方法定义为箭头函数*/}
            {/* 但当有其他参数时，DOM元素上要用箭头函数 ，方法定义为普通函数*/}
            {/* <input type="text" ref="txt" style={{width: '100%'}} name="" id="" value={this.state.msg} onChange={(e) => this.inputChange(e)}/> */}
        </div>
    }
    msgChange1(val1,val2){
        this.setState({
            msg: '修改msg的值'+val1+val2
        })
    }
    msgChange2(val1,val2){
        this.setState({
            msg: '修改msg的值'+val1+val2
        })
    }
    msgChange3(val1,val2){
        this.setState({
            msg: '修改msg的值'+val1+val2
        })
    }
    inputChange(e){
        
        /**
         * 获取文本的三种方式
         * 1、document.getElementById
         * 2、使用ref
         * console.log(this.refs.txt.value)
         * 3、事件参数e，e.target表示事件对象
         */
        console.log(e)
        this.setState({
            msg: e.target.value
        })
    
    }
}