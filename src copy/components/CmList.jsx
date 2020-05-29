import React from 'react'

import CmItem from './CmItem'

export default class CmList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                {
                    id: 0, user: '小二', content: '哈哈哈哈0'
                },
                {
                    id: 1, user: '小二', content: '哈哈哈哈1'
                },
                {
                    id: 2, user: '小二', content: '哈哈哈哈2'
                },
                {
                    id: 3, user: '小二', content: '哈哈哈哈3'
                },
                {
                    id: 4, user: '小二', content: '哈哈哈哈4'
                },
                {
                    id: 5, user: '小二', content: '哈哈哈哈5'
                },
            ]
        }
    }
    render() {
        return <div>
            <h1 style={{color:'red',textAlign: 'center'}}>评论页面</h1>
            {this.state.CommentList.map(item => <CmItem {...item} key={item.id}></CmItem>)}
        </div>
    }
}