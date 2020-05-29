import React from 'react'
/**
 * HashRouter 路由根节点，所有的路由相关东西都在HashRouter里面，一个项目中只需要使用一次
 * Route 路由规则，有两个重要属性：path component
 * Link表示一个路由链接，to 属性 和vue中router-link类似
 */
import {HashRouter,Route,Link} from 'react-router-dom'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        //启用路由
        //HashRouter中只能有一个根节点
        //在一个项目中，只需要使用一次HashRouter
        return <HashRouter>
            <div>
                <h1>这是项目跟组件</h1>

                <DatePicker></DatePicker>
                <hr/>


                <Link to="/home">首页</Link>&nbsp;&nbsp;
                <Link to="/movie/top250/10">电影</Link>&nbsp;&nbsp;
                <Link to="/about">关于</Link>


                <hr/>

                {/* Route创建的标签就是路由的规则（起到占位符的作用），path要匹配的路由，component要展示的组件 */}
                {/* Route：1、路由匹配规则； 2.占位符，以后匹配的路由都在这个位置 */}
                <Route path="/home" component={Home}></Route>
                <hr/>
                {/* 默认情况下是模糊匹配的，如果路由部分匹配就展示这个组件，添加exact属性精确匹配 */}
                {/* 如果要匹配参数可以用：表示 */}
                <Route exact path="/movie/:type/:id" component={Movie} ></Route>
                <hr/>
                <Route path="/about" component={About}></Route>
                <hr/>
            </div>
        </HashRouter>
    }
}