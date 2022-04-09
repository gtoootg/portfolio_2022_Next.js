/* eslint-disable @next/next/link-passhref */
import type { NextPage } from 'next'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './MainNavigation.module.scss'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import MainNavigationDrawer from './MainNavigationDrawer'
import { useWindowSize } from './useWindowSize'

function NavigationItem():JSX.Element {
  const { t } = useTranslation()
  const { locale, pathname } = useRouter()
  return(
    <div>
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

function MainNavigation():JSX.Element {
  const {width} = useWindowSize()
  
  const [isNavigationHidden, setIsNavigationHidden ] = useState (false)

  return (
    <div data-testid="main-navigation" className={classes.navigation}>
      <div className={classes.navigation__container}>
        <div className={classes.navigation__container__brand}>
          <h5>Title</h5>
        </div>
        <div className={classes.navigation__container__menu}>
            {isNavigationHidden ?
            <MainNavigationDrawer
            navigationItem={NavigationItem()} 
            anchor='right'
            />
            :
            <NavigationItem/>
}
           </div>
      </div>
    </div>
  )
}

export default MainNavigation