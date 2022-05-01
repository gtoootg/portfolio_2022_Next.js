import { StaticImageData } from 'next/image'
import Image from 'next/image'

import {useState, useEffect} from 'react'

import styles from './ImageSlide.module.scss'

interface ImageSlideProps {
  images: StaticImageData[] | string[]
}

export default function ImageSlide({images}: ImageSlideProps) {
  const [index, setIndex] = useState(0)
  const setIndexHandler = ()=>{
    setIndex(prev=> (prev + 1) % (images.length))
  }
  useEffect(() => {
    const interval = setInterval(
      setIndexHandler
    , 6000);
    return () => clearInterval(interval);
  },[])
 
  return (
    <div>
    {images.map((image, i)=>{
        return(
            <div 
              className={ i ===index? styles.image_fadeIn: styles.image_fadeOut} 
              key={i} 
            >
             <Image src={image} width={3} height ={2} layout="responsive"  priority loading='eager'/>
            </div>
        )
      }
    )}
   </div>
  )
}
