import { useTransition, animated} from '@react-spring/web'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import croatia from '/public/assets/photo/croatia.jpg'
// interface ImageSlideProps {
//   images: StaticImageData[],
//   index : number

// }

export default function ImageSlide({images,index}) {

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
    config: { duration: 300 }
  })

  return (
    <div>
      {transitions((style, index) => (
          <animated.img 
              src={images[index]}
              style={{
                ...style,
                width:"100%",
                // height:"auto",
                position:"absolute"      
            }}
          />      
      ))}
    </div>
  )
}