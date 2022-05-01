import { StaticImageData } from 'next/image'
import Image from 'next/image'

import styles from './ImageSlide.module.scss'

interface ImageSlideProps {
  images: StaticImageData[] | string[],
  index: number
}

export default function ImageSlide({ images, index }: ImageSlideProps) {


  return (
    <div>
      {images.map((image, i) => {
        return (
          <div
            className={i === index ? styles.image_fadeIn : styles.image_fadeOut}
            key={i}
          >
            <Image
              src={image}
              width={3}
              height={2}
              layout="responsive"
              priority
              loading="eager"
            />
          </div>
        )
      })}
    </div>
  )
}
