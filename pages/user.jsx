import React from 'react'
import UserLeft from '../components/user/userLeft/UserLeft'
import styles from '../styles/user.module.css'

const user = () => {
  return (
    <div className={`${styles.user} row`}>
      <div className="col-md-2">
        <UserLeft />
      </div>
      <div className="col-md-10">Right</div>
    </div>
  )
}

export default user