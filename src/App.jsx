import React from 'react'
/**
 * HashRouter 路由根节点，所有的路由相关东西都在HashRouter里面，一个项目中只需要使用一次
 * Route 路由规则，有两个重要属性：path component
 * Link表示一个路由链接，to 属性 和vue中router-link类似
 */
import { HashRouter, Route, Link } from 'react-router-dom'
import HomeContainer from '@/components/Home/HomeContainer'
import MovieContainer from '@/components/Movie/MovieContainer'
import AboutContainer from '@/components/About/AboutContainer'
import { Layout, Menu, Breadcrumb } from 'antd';

import appstyle from '@/css/app.scss'
const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    UNSAFE_componentWillMount() {
        console.log(this.props)
        console.log(window.location.hash.split('/'))
    }
    render() {

        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>
                <Header>
                    <div className={appstyle.logo} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.split('/')[1]}>
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/top250/10">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ background: "#fff", flex: 1 }}>
                    <Route path="/home" component={HomeContainer}></Route>
                    <Route exact path="/movie/:type/:id" component={MovieContainer} ></Route>
                    <Route path="/about" component={AboutContainer}></Route>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </HashRouter>
    }
}