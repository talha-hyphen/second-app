import React from 'react'
import './Home.css'
import header_image from '../../assets/images/header_image.png'
import HomeImages from '../../components/homeImages/HomeImages'
import Image1 from '../.././assets/images/agency.png'
import Image2 from '../.././assets/images/ceathas.png'
import Image3 from '../.././assets/images/creature.png'
import Image4 from '../.././assets/images/vine.png'
import Image5 from '../.././assets/images/violet.png'
import ResidenceCard from '../.././components/card/ResidenceCard'
import Residence1 from '../.././assets/images/residence1.png'
import Residence2 from '../.././assets/images/residence2.png'
import Residence3 from '../.././assets/images/residence3.png'
export default function Home() {

const ResidenceData=[
  {
    name:"Alliva Priva Jalvin",
    description: "1087 pin Quak Drive,USA",
    area:"4 Beds 2Bath 1230Sqft.",
image:Residence1
  },{
    name:"Hard line Orchar ",
    description:"1087 pin Quak Qlimston,USA",
    area:"5 Beds 2Bath 1320Sqft.",
    image:Residence2
  },{
    name:"Allpine Lenevote",
    description: "1087 pin Quak Linndman,USA",
    image:Residence3
  }
]



const images = [{
  id: 1,
  image: Image1},{
  id: 2,
  image: Image2},{
  id: 3,
  image: Image3},{
  id: 4,
  image: Image4},{
  id: 5,
  image: Image5}]
  


  return (
    <div>
      <div className='home'>
        <section>
      <header className='header_Home'>
        <div className='headerText'>
          <h1 className='header_Heading'>Perfect Way TO Buy And Sell A Home</h1>
          <p>Buy and sell a home with confidence. Buy and sell a home with confidence.Buy and sell a home with confidence. </p>
        </div>
        <div className='headerImage'>
          <img src={header_image} alt='header_image' />
        </div>
      </header>
      </section>

      <section>
        <div className='Features'>
        <div>
          <h3 className='feature' >Feature In</h3>
        </div>
        <div className='featureImages'>
         
        {images.map((image) => {
          return <HomeImages key={image.id} image={image.image

          } />
        })}
        </div></div>
      </section>


      <section>
        <h2 className='residence_heading'> Popular Residence</h2>
        <div className='ResidenceCard'>
        {ResidenceData.map((item,index)=>{
          return <ResidenceCard key={index} name={item.name} description={item.description} area={item.area} image={item.image} />
        })}
       </div>
      </section>
    </div>
    </div>
  )
}
