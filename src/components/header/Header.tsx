import classes from './Header.module.scss'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  const {t} = useTranslation()

  function NavigationText(){
    const textItems = [
      {
        text: t('header.navigation.top'),
        href:'/'
      },
      {
        text: t('header.navigation.profile'),
        href:'/profile'
      },
      {
        text: t('header.navigation.profile'),
        href:'https://goto-travels.herokuapp.com/'
      }, 
    ]
    return(
      <>
        {textItems.map((textItem,index) => {
          return(
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

  function NavigationIcon(){
    const icons = [
      {
        href:"https://github.com/gtoootg0131",
        icon:faGithub
      },
      {
        href:"https://www.linkedin.com/in/%E5%80%AB%E5%AE%8F-%E5%BE%8C%E8%97%A4-37b905218/",
        icon:faLinkedinIn
      }
    ]

    return(
      <>
        {icons.map((icon,index)=>{
          return(
            <div className={classes.header_container_navigation_icon}>
              <Link key={index} href={icon.href}>
                <FontAwesomeIcon
                  icon={icon.icon}
                  style={{ fontSize: 50, color: "white" }}
                />
              </Link>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_container_brand}>
          <h1>Michihiro Goto`s Gallery</h1>
        </div>
        <div className={classes.header_container_navigation}>
          <NavigationText/>
          <NavigationIcon/>
        </div>
      </div>
    </div>
  )
}