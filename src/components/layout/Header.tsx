import React from 'react'
import classes from './Header.module.scss'
import Navigation from './Navigation'


export default function Header():JSX.Element {

  return (
    <div className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_container_brand}>
          <h5>Title</h5>
        </div>
        <div className={classes.header_container_navigation}>
          <Navigation/>
        </div>
      </div>
    </div>
  )
}