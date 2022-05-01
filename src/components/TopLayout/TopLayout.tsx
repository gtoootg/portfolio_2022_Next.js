import { useState, useEffect } from 'react'
import ImageSlide from '../common/ImageSlide/ImageSlide'
import styles from './TopLayout.module.scss'

import croatia from '/public/assets/photo/croatia.jpg'
import desert from '/public/assets/photo/desert.jpg'
import kyoto from '/public/assets/photo/kyoto.jpg'
import { useTranslation } from 'next-i18next'

export default function TopLayout() {
  const { t } = useTranslation()

  const [index, setIndex] = useState<number>(0)
  const setIndexHandler = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }
  useEffect(() => {
    const interval = setInterval(setIndexHandler, 6000)
    return () => clearInterval(interval)
  }, [])

  const images = [croatia, desert, kyoto]

  const descriptions: string[]=[
    t<string>('topLayout.description1'),
    t<string>('topLayout.description2'),
    t<string>('topLayout.description3'),
  ]

  return (
    <div className={styles.topLayout}>
      <div className={styles.topLayout_text}>
        <h1 className={styles.topLayout_text_title}>
          {t<string>('topLayout.title1')}
        </h1>
        <h1 className={styles.topLayout_text_title}>
        {t<string>('topLayout.title2')}
        </h1>
        {descriptions.map((description,index)=>
        <h4 className={styles.topLayout_text_description}>
          {description}
        </h4>
        )}
      </div>
      <div className={styles.topLayout_imageSlide}>
        <ImageSlide images={images} index={index}/>
      </div>
      
    </div>
  )
}
