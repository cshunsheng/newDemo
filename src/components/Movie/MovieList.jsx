import React from 'react'
import { Spin, Alert } from 'antd';
export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            nowpage: parseInt(props.match.params.page) || 1,
            pageSize: 14,
            total: 0,
            isLoading: true,
            movieType:props.match.params.type
        }
    }
    UNSAFE_componentWillMount() {
        //#region 
        /**
         * fetch('https://douban.uieee.com/v2/movie/in_theaters')
            .then(response => {//第一个.then中获取不到数据
                //得到的是一个Response对象，
                //通过response.json()得到一个新的promise
                return response.json()
            })
            .then(data => {
                console.log(data)
            })
         */
        //#endregion
        let start = this.state.pageSize*(this.state.nowpage -1)
        let url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`
        fetch(url)
            .then(response =>  response.json())
            .then(data => {
                console.log(data)
                setTimeout(()=>{
                    
                })
                this.setState({
                    isLoading: false,
                    movies: data.subjects,
                    total: data.total
                })
            })

    }
    render() {
        return <div>
            {this.renderList()}
        </div>
    }
    renderList = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影列表"
                    description="精彩内容，马上呈现。。。"
                    type="info"
                />
            </Spin>
        } else {
            return null
        }
    }
}

// fetch进行接口调用