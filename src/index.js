import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ZButton = ({ text }) => {
  const styles = {
    backgroundColor: "aquamarine",
    padding: "15px",
    border: "none",
    borderRadius: "4px",
    maxWidth: "200px"
  }
  return (
    <button type="button" style={styles}>{text}</button>
  )
}