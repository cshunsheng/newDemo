import React from 'react'
import styles from './styles'

export default function CmItem(props) {
    return <div style={styles.item}>
        <h3 style={styles.user}>评论人：{props.user}</h3>
        <h4 style={styles.content}>评论内容{props.content}</h4>
    </div>
}