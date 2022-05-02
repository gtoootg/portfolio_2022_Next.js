import React, { useState, useEffect } from 'react'
import Image from 'next/image';

import ImageSlide from '@/components/common/ImageSlide/ImageSlide'
import styles from './ProfileMain.module.scss'
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

import profile from '/public/assets/photo/profile.jpg'

interface SingleAccordionProps {
  title:string,
  description:JSX.Element
}
function SingleAccordion({title, description}:SingleAccordionProps) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Basic() {
  const {t} = useTranslation()
    
  const basics = [
    {key:t("profile.basic.name.key"), description:t("profile.basic.name.description")},
    {key:t("profile.basic.birthday.key"), description:t("profile.basic.birthday.description")},
    {key:t("profile.basic.home.key"), description:t("profile.basic.home.description")},
    {key:t("profile.basic.address.key"), description:t("profile.basic.address.description")},
  ]

  return(
    <div className={styles.basic}>
      <div className={styles.basic__textContainer}>
        {basics.map((basic, i) => {
          return(
            <p>
              <strong>{basic.key}:</strong>{basic.description}
            </p>
          )
        })}
        <p>
          {t<string>('profile.basic.detail')}
        </p>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500943.1722930991!2d135.4402043598674!3d35.02493259430951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600174ece1b10c2d%3A0x8bccbbd569908646!2sOtsu%2C%20Shiga%2C%20Japan!5e0!3m2!1sen!2sde!4v1615105485806!5m2!1sen!2sde"
        height="280"
        loading="lazy"
        className="container col-sm-5"
      ></iframe>
    </div>
  )
}


interface tableRowProps{
  row: string[]
}

interface TableProps{
  tableHead: string[],
  rows:string[][]
}

function Table({tableHead, rows}:TableProps){
  return(
    <table className="table">
    <thead>
        <tr>
          {tableHead.map((head, i )=>
            <th scope="col">{head}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row,i)=>
          <TableRow row={row}/>
        )}
    </tbody>
  </table>
  )
}

function TableRow({row}:tableRowProps){
  return(
    <tr>
      {row.map((list,i) =>
        <td>{list}</td>
        )}
    </tr>
  )
}

function Education() {
  const {t} = useTranslation()
  const [index, setIndex] = useState(0)

  const PhotoList = []

  // const setIndexHandler = () => {
  //   setIndex((prev) => (prev + 1) / PhotoList.length)
  // }
  // useEffect(() => {
  //   const interval = setInterval(setIndexHandler, 6000)
  //   return () => clearInterval(interval)
  // }, [])

  const educationHead:string[] = [
    t("profile.education.head.degree"),
    t("profile.education.head.university"),
    t("profile.education.head.city"),
    t("profile.education.head.year")
  ]

  const master:string[]  = [
    t(`profile.education.master.degree`),
    t(`profile.education.master.university`),
    t(`profile.education.master.city`),
    t(`profile.education.master.year`),
  ]
  const bachelor:string[]  = [
    t(`profile.education.bachelor.degree`),
    t(`profile.education.bachelor.university`),
    t(`profile.education.bachelor.city`),
    t(`profile.education.bachelor.year`),
  ]

  return(
    <div className={styles.education}>
      <Table tableHead={educationHead} rows={[master,bachelor]}/>
      <div className={styles.education__lowerContainer}>
        <div className={styles.education__lowerContainer__text}>
          {t<string>('profile.education.detail')}
        </div>
        {/* <ImageSlide
            images={PhotoList}
            index={index}
            className={styles.education__lowerContainer__image}
            /> */}
      </div>
    </div>
  )
}

function Career(){
  const {t} = useTranslation()
  const careerHead:string[] = [
    t<string>('profile.career.head.position'),
    t<string>('profile.career.head.company'),
    t<string>('profile.career.head.place'),
    t<string>('profile.career.head.year')
  ]

  const JJP: string[] = [
    t<string>('profile.career.jjp.position'),
    t<string>('profile.career.jjp.company'),
    t<string>('profile.career.jjp.place'),
    t<string>('profile.career.jjp.year')
  ]

  const KD : string[] = [
    t<string>('profile.career.kd.position'),
    t<string>('profile.career.kd.company'),
    t<string>('profile.career.kd.place'),
    t<string>('profile.career.kd.year')
  ]

  const MSG : string[] = [
    t<string>('profile.career.msg.position'),
    t<string>('profile.career.msg.company'),
    t<string>('profile.career.msg.place'),
    t<string>('profile.career.msg.year')
  ]

  return(
    <>
      <Table tableHead={careerHead} rows={[MSG,KD,JJP]}/>
      <div className={styles.motivation__textContainer}>
        {t<string>('profile.career.detail')}
      </div>
    </>
   
  )
}

function AccordionGroup(){
  const items = [
    {title:"Basic of myself", description: <Basic/>},
    {title:"Education", description:<Education/>},
    {title:"Career", description:<Career/>}
  ]

  return (
    <>
      {items.map((item,i)=>
        <SingleAccordion title={item.title} description={item.description}/>
      )}
    </>

  )

}


function ProfileMain() {
 

  function Introduction() {
    return (
      <div className={styles.profileMain__introduction}>
        <div  className={styles.profileMain__introduction_image}>
          <Image src={profile} width={400} height={500}/>
        </div>
        {/* <img id="topImage" src="image/profile.jpg" alt="profile" /> */}
        <div className={styles.profileMain__introduction__textContainer}>
          <h1>Michihiro Goto</h1>
          <h2>
            I am from Japan, and 29 years old living in Munich. After 5 years of
            my career in Mechanical Engineering field in Japan and Germany, I
            started having the strong motivation to start new career as Web
            application developer. Currently, I am seeking positions of Junior
            Web developer in Munich and made this portfolio to present my
            motivation and skills of web application using modern language
            including React Hooks, TypeScript and Laravel. Please do not
            hesitate to contact me in case of any questions and interest.
          </h2>
        </div>
      </div>
    )
  }

  interface AccordionProps{
    Id:number,
    text:string,
    value:string
  }

  function Accordion({ Id, text, value }: AccordionProps) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${Id}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${Id}`}
            aria-expanded="false"
            aria-controls={`collapse${Id}`}
          >
            {value}
          </button>
        </h2>
        <div
          id={`collapse${Id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${Id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{text}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.profileMain}>
      <Introduction />
      <div className="accordion"> 
        <AccordionGroup/>
      </div> 
    </div>
  )
}

export default ProfileMain
