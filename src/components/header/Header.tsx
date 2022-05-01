import classes from './Header.module.scss'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'


interface NavigationIconProps{
  icon: IconDefinition,
  href: string,
  fontSize: number,
  color: string
}

export function Icon({icon,href,fontSize,color}: NavigationIconProps) {
 
  return (
          <div className={classes.header_container_navigation_icon}>
            <Link href={href}>
              <FontAwesomeIcon
                icon={icon}
                style={{ fontSize: fontSize, color: color }}
              />
            </Link>
          </div>
  )
}
export default function Header() {
  const { t } = useTranslation()
  const {route, locale} = useRouter()

  function NavigationText() {
    const textItems = [
      {
        text: t('header.navigation.top'),
        href: '/',
      },
      {
        text: t('header.navigation.profile'),
        href: '/profile',
      },
      {
        text: t('header.navigation.portfolio'),
        href: 'https://goto-travels.herokuapp.com/',
      },
    ]

    return (
      <>
        <div className={classes.header_container_navigation_text}>
          <Link href={locale ==='en'? `/${route}`: `/en/${route}`} >
            <h3>{locale ==='en'? '日本語': 'EN'}</h3>
          </Link>
        </div>
        {textItems.map((textItem, index) => {
          return (
            <div className={classes.header_container_navigation_text}>
              <Link key={index} href={textItem.href}>
                <h3>{textItem.text}</h3>
              </Link>
            </div>
          )
        })}
 
      </>
    )
  }

  const icons = [
    {
      href: 'https://github.com/gtoootg0131',
      icon: faGithub,
    },
    {
      href: 'https://www.linkedin.com/in/%E5%80%AB%E5%AE%8F-%E5%BE%8C%E8%97%A4-37b905218/',
      icon: faLinkedinIn,
    },
  ]
  return (
    <div className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_container_brand}>
          <h1>Michihiro Goto`s Gallery</h1>
        </div>
        <div className={classes.header_container_navigation}>
          <NavigationText />
          {icons.map((icon,map) => <Icon icon={icon.icon} href={icon.href} color="white" fontSize={35}/>)}
        </div>
      </div>
    </div>
  )
}
