import React, {ReactNode, useEffect, useRef, useState} from 'react'
import styles from './styles.module.scss'

type Props = {
    children: ReactNode
}

const Background = ({children}: Props) => {
  return (
    <>
      <div className={styles.staticBackground}></div>
      <div className={styles.colorShadow}></div>
      <div className={styles.pattern}>
        {children}
      </div>
    </>
  )
}

export default Background