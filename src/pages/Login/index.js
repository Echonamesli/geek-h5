import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'

export default function Login() {
  return (
    <div className={styles.root}>
      <div className='left'>
        <Icon type="iconfanhui" className={styles.left}></Icon>
      </div>
      <div className='title'>标题</div>
      <div className='right'>右侧内容</div>
    </div>
  )
}
