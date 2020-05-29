import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Link } from 'react-router-dom'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import MovieList from '@/components/Movie/MovieList'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routeParams: props.match.params
        }
    }
    render() {
        // console.log(this)
        return <Layout style={{ height: '100%' }}>
            <Sider width={200} style={{background:'#fff'}}>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/movie/in_theaters/1">正在上映</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to="/movie/coming_soon/1">即将上映</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link to="/movie/top250/1">Top250</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{background:'#fff' }}>
                    <Route path="/movie/:type/:page" component={MovieList}></Route>
                </Content>
            </Layout>
        </Layout>
    }
}