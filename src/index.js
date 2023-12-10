import React from 'react'
import styles from './styles.module.css'

export const HolidayButtons = (props) => {
  // return <button className={props.type}>{props.children}</button>
  return (
    <button className={`${styles.btn} ${styles[props.type]}`}>
      {props.children}
    </button>
  )
}
