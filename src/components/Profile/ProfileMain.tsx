import React,{useState, useEffect} from 'react';

// import './index.css';
import ImageSlide from '@/components/common/ImageSlide/ImageSlide';
import styles from './ProfileMain.module.scss'


  function ProfileMain(){

    const [size, setSize] = useState(
      { 'width': window.innerWidth, 'height': window.innerHeight }
      );
    window.addEventListener('resize', function () {
      setSize({ 'width': window.innerWidth, 'height': window.innerHeight });
    }, true);

    function Introduction(){
      return(
        <div className={styles.profileMain__introduction}>
            <img id="topImage" src="image/profile.jpg" alt="profile"/>
            <div className={styles.profileMain__introduction__textContainer}>
                <h1>Michihiro Goto</h1>
                <h2>
                  I am from Japan, and 29 years old living in Munich. After 5 years of my career in Mechanical Engineering field in Japan and Germany, I started having the strong motivation to start new career as Web application developer. Currently, I am seeking positions of Junior Web developer in Munich and made this portfolio to present my motivation and skills of web application using modern language including React Hooks, TypeScript and Laravel. Please do not hesitate to contact me in case of any questions and interest.
                </h2>
            </div>
        </div>
      )
  }

    function Accordion(props){

      return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${props.Id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.Id}`} aria-expanded="false" aria-controls={`collapse${props.Id}`}>
                  {props.value}
                </button>
            </h2>
            <div id={`collapse${props.Id}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.Id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {props.text}
                </div>
            </div>
        </div>
      )
    }

    function Basic(){
      const text= 
        <div className={styles.basic}>
            <div className={styles.basic__textContainer}>
                <p><strong>Name:</strong>Michihiro Goto</p>
                <p><strong>Birthday:</strong>31/01/1992</p>
                <p><strong>HomeTown:</strong>Otsu,Japan. </p>
                <p><strong>Current ving place:</strong>Bogehausen, Munich, Germany</p>
                <p>I grew up in the City of Otsu, where we have the biggest lake in Japan called Lake Biwa. Otsu is adjacent to Kyoto which is well known as the ancient capital of Japan, and it is only 15 minutes by train.</p>
            </div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500943.1722930991!2d135.4402043598674!3d35.02493259430951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600174ece1b10c2d%3A0x8bccbbd569908646!2sOtsu%2C%20Shiga%2C%20Japan!5e0!3m2!1sen!2sde!4v1615105485806!5m2!1sen!2sde"  height="280"  loading="lazy" className="container col-sm-5"></iframe>
        </div>
        
      return(
          <Accordion value={"Basic of Myself"} text={text} Id={"One"}/>
      )

    }

    function Education(){
      const[index, setIndex] = useState(0)

      const PhotoList=[]

      const setIndexHandler = ()=>{
        setIndex(prev=>(prev+1)/PhotoList.length)
      }
    
      // useEffect(() => setTimeout(setIndexHandler,6000))

      const text= 
        <div className={styles.education}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Degree</th>
                <th scope="col">University</th>
                <th scope="col">Year</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Master of Sicence in Mechanical Engineering</td>
                <td>Kyoto Institute of Technology</td>
                <td>Kyoto Japan</td>
                <td>Apr.2014 - Mar.2016</td>
              </tr>
              <tr>
                <td >Bachelor of Sicence in Mechanical Engineering</td>
                <td>Kyoto Institute of Technology</td>
                <td>Kyoto Japan</td>
                <td>Apr.2010 - Mar.2014</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.education__lowerContainer}>
            <div className={styles.education__lowerContainer__text}>
                  I majored in Mechanical engineering in Kyoto institute of technology (KIT).
                  During total 6 years of bachelor and master courses in KIT, I spent the precious time to learn the basic of mechanical engineering which led to my current career as automotive engineer in Germany. Not only for this, it was definetely worth being in Kyoto which attracts many international students around the world. Over this 6 years in Kyoto, I could nourish my own international mind, and make many connections with foreign people.
            </div>
            {/* <ImageSlide
              images={PhotoList}
              index={index}
              className={styles.education__lowerContainer__image}
              /> */}
          </div>
        </div>
      return(
          <Accordion value={"Education of myself"} text={text} Id={"Two"}/>
      )
    }

    function Career(){

      const jobs = [{
        position:"Design Engineer of Bearing for Automotive application",
        company:"JTEKT Cooperation",
        description:()=>{
          return(
            <div className="d-flex flex-column">
                <div>
                  <p>-</p>
                  <p>Design and Development of bearings for Automotive chassis application, mainly for American and European customer (GM,BMW,DAIMLER)</p>
                </div>
                <div>
                    <p>-</p>
                    <p>Coordination of development activity of nominated project with related department such as Testing/Production/Cost/Sales/Purchase division, including North American and Chinese branches</p>
                </div>
                <div>
                    <p>-</p>
                    <p>Cost reduction activity</p>
                </div>
                <div>
                    <p>-</p>
                    <p>Education of trainee from foreign branches in America</p>              
                </div>
            </div>
          )
        },
        city:"Osaka, Japan",
        duration:"Apr.2016-Mar.2019"
      },
      {
        position:"Application Engineer of Bearing for Automotive application",
        company:"KOYO Deutschland GmbH JTEKT European Operation",
        description:()=>{
          return (
                  <div className="d-flex flex-column">
                      <div>
                            <p>-</p>
                            <p>Design and Development of bearings for Automotive powertrain/drive train application, such as E-motor and Transmission</p>
                      </div>
                      <div>
                            <p>-</p>
                            <p>Customer service for bearing application in European region(BMW, Volvo, FIAT, Ferrari)</p>
                      </div>
                  </div>
                  )
        },
        city:"Munich, Germany",
        duration:"Mar.2019-Current"
      }]

      const layoutForLaptop =jobs.map((job,index)=>{
        return(
              <tr>
                  <td className={styles.position}>{job.position}</td>
                  <td className={styles.company}>{job.company}</td>
                  <td className={styles.description}>
                      {job.description()}
                      <br/>
                  </td>
                  <td className={styles.city}>{job.city}</td>
                  <td className={styles.duration}>{job.duration}</td>
              </tr>
        )
      })

      const layoutForSmartphone = jobs.map((job, index)=>{
        return(
          <>
            <div>
              <b><h2>Job Experience {index+1}</h2></b>
            </div>
            <div className={styles.position}>
                  <b>Position:</b>
                  <div>
                      {job.position}
                  </div>
            </div>
            <div className={styles.company}>
                <b>Company:</b>
                <div>{job.company}</div>
            </div>
            <div className={styles.city}>
                <b>City:</b>
                <div>
                  {job.city}
                </div>
            </div>
            <div className={styles.duration}>
                <b>Duration:</b>
                <div>
                  {job.duration}
                </div>
            </div>
            <div className={styles.description}>
                <b>Description:</b>
                <div>
                  {job.description()}
                </div>
            </div>
          </>
        )
      })


      const explanation = (
              <div>
                In 2016, I kicked off my career as mechanical design engineer in Automotive field in JTEKT cooperation which is a worldwide automotive supplier of bearings/steering/drivetrain components. The main role of mine was design and development of bearings used for automotive chassis application. During 3 years in JTEKT Japan, I was in charge of many development projects of new bearing product for car makers in North America, Europe and Japan. 
                <br/>
                <br/>
                In 2019, I switched my contract to European branches of JTEKT, and I started my next career of mechanical design engineer in Munich. Until now, I have been engaged to bearing design for electric vehicle application. In addition, I work in frontloading position to support European customers in Germany, Italy, and Sweden. Since European countries are rapidly making the transformation to Electric vehicle from local to global level, the development of our product is really challlenging and tough. However, I feel really excited to be in touch with one of the top paradigm shift in the global industry.
              </div>
      )

      const text = ()=>{
        if(size.width>600){
          return(
            <div className={styles.career}>
                <table className={styles.career__table}>
                  <thead>
                    <tr>
                      <th scope="col" className={styles.position}>Position</th>
                      <th scope="col" className={styles.company}>Company</th>
                      <th scope="col" className={styles.description}>Description</th>
                      <th scope="col" className={styles.city}>City</th>
                      <th scope="col" className={styles.duration}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layoutForLaptop}
                  </tbody>
                </table>
                <br/>
                {explanation}
            </div>
          )
      }else{
          return(
            <div className={styles.career}>
              <div className={styles.career__table}>
                {layoutForSmartphone}
              </div>
              {explanation}
            </div>
          )
          }
      }
      
      return(
          <Accordion value={"Career of myself"} text={text()} Id={"Three"} />
      )
    }

    function Motivation(){
      const text = 
          <div className={styles.motivation}>
              <div className={styles.motivation__textContainer}> 
                  After 5 years experience in Mechanical Engineering in Automotive industry, I got to have some interest to switch my career in different engineering field. Due to Covid situation since last year and spending most of my free time at home, I started learning coding languages by myself. For the first 3 month, I learned HTML/CSS/JavaScript/PHP/MySQL to roughly understand how web application works. Then, I made a goal to make portfolio to introduce my favourite places and photos in the world which are my life hobbies. During the process of making this portfolio, I learned modern coding language such as React.js, TypeScript, Laravel, and Module CSS to integrate them into the coding of my portfolio. 
              </div>
              <div className={styles.motivation__imageContainer}>
                <b>What I have learned and used for my portfolio:</b><br/>
                <img src="image/html.png" alt="html"/>
                <img src="image/css.png" alt="css"/>
                <img src="image/javascript.png" alt="javascript"/>
                <img src="image/react.png" alt="react"/>
                <img src="image/typescript.png" alt="typescript"/>
                <img src="image/laravel.png" alt="laravel"/>
                <img src="image/mysql.png" alt="mysql"/>
              </div>
          </div>

          return(
        <div>
          <Accordion value={"Motivation to start career as Web developer"} text={text} Id={"Six"}/>
        </div>
      )
    }

    return(
      <div className={styles.profileMain}>
          <Introduction/>
          <div>
              <Basic/>
              <Motivation/>
              <Education/>
              <Career/>
          </div>
      </div>
    )
  }

export default ProfileMain


