import { useState, useEffect } from 'react'
import ImageSlide from '../common/ImageSlide/ImageSlide'

import croatia from '/public/assets/photo/croatia.jpg'
import prague from '/public/assets/photo/prague.jpg'
import { StaticImageData } from 'next/image'
import kyoto from '/public/assets/photo/kyoto.jpg'
import hongkong from '/public/assets/photo/hongkong.jpg'

export default function TopLayout() {
  const [index, setIndex] = useState(0)

  const images = [croatia, prague, kyoto, hongkong]

  const setIndexHandler = () => {
    if (index === 3) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <>
      <ImageSlide images={images} />
    </>
  )
}
