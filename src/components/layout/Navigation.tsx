/* eslint-disable @next/next/link-passhref */
import type { NextPage } from 'next'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './Navigation.module.scss'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import NavigationDrawer from './NavigationDrawer'

function NavigationItem():JSX.Element {
  const { t } = useTranslation()
  const { locale, pathname } = useRouter()
  return(
    <div className = {classes.navigation_item}>
      <Link href="/" locale={locale}>
        <a>Home</a>
      </Link>
      <Link href="/" locale={locale}>
        <a>Use-Cases</a>
      </Link>
      <Link href="/" locale={locale}>
        <a>gome</a>
      </Link>
      <Link href="/" locale={locale}>
        <a>Blog</a>
      </Link>
      <Link href={pathname} locale={changeLocale(locale)}>
        <a data-testid="locale">{changeLocale(locale).toUpperCase()}</a>
      </Link>
    </div>
  )
}

function changeLocale(locale: any ): string {
  if (locale === 'ja') {
    return 'en'
  } else {
    return 'ja'
  }
}

export default function Navigation():JSX.Element {
  
  return (
    <div className={classes.navigation}>
      <div className = {classes.navigation_pc}>
        <NavigationItem/>
      </div>
      <div className = {classes.navigation_tablet}>
        <NavigationDrawer
          navigationItem={NavigationItem()} 
          anchor='right'
          className={classes.navigation_tablet}
        />
      </div>
    </div>
  )
}
