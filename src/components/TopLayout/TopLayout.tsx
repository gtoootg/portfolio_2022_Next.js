import {useState, useEffect} from 'react'
import ImageSlide from "../common/ImageSlide/ImageSlide"

import croatia from '/public/assets/photo/croatia.jpg'
import prague from '/public/assets/photo/prague.jpg'
import { StaticImageData } from "next/image"

export default function TopLayout(){
  const [index, setIndex] = useState(0)


  const setIndexHandler = ()=>{
    if(index===3){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }

  const a = setInterval(setIndexHandler,6000)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndexHandler
  //   }, 6000);
  //   return () => clearInterval(interval);
  // })

  const images  = [
    '/assets/photo/croatia.jpg',
    '/assets/photo/prague.jpg',
    '/assets/photo/croatia.jpg',
    '/assets/photo/prague.jpg'
  ]

  return(
    <ImageSlide images={images} index={index}/>
  )
}