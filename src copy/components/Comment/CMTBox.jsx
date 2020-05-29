import React from 'react'
export default class CMTItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>
            <label>评论人：</label><br />
            <input type="text" ref="user" name="" id="" /><br />
            <label>评论内容：</label><br />
            <textarea cols="30" ref='content' rows="4"></textarea><br />
            <input type="button" value="发表评论" onClick={this.postComment} /><br />
        </div>
    }
    postComment = () => {
        let cmtInfo = {
            user: this.refs.user.value,
            content: this.refs.content.value,
            id: new Date().valueOf()
        }
        let list = JSON.parse(localStorage.CommentList || '[]')
        list.unshift(cmtInfo)
        localStorage.setItem('CommentList', JSON.stringify(list))
        this.props.loadList()
        this.refs.user.value = this.refs.content.value = ''
    }
}