import React from 'react'
import { Icon } from '../header/Header'

import ContactForm from './ContactForm'

import styles from './Footer.module.scss'

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

function FooterLeft() {
  return (
    <div className={styles.footer_left}>
      <ContactForm />
    </div>
  )
}

function FooterRight() {
  const { t } = useTranslation()

  const icons = [
    {
      href: 'https://github.com/gtoootg',
      icon: faGithub,
    },
    {
      href: 'https://www.linkedin.com/in/michihiro-goto-37b905218/',
      icon: faLinkedinIn,
    },
  ]

  const profiles: string[] = [
    t<string>('footer.profile1'),
    t<string>('footer.profile2'),
    t<string>('footer.profile3'),
    t<string>('footer.profile4'),
  ]

  return (
    <div className={styles.footer_right}>
      <div className={styles.footer_right_text}>
        <h2>{t<string>('footer.name')}</h2>
        {profiles.map((profile, i) => (
          <h4>{profile}</h4>
        ))}
      </div>
      <div className={styles.footer_right_icons}>
        {icons.map((icon, i) => (
          <Icon
            icon={icon.icon}
            href={icon.href}
            color="#2a3139"
            fontSize={35}
          />
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div style={{backgroundColor:'whitesmoke'}}>
      <div className={styles.footer}>
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  )
}

export default Footer
