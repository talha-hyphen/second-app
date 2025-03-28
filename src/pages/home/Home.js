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
import ChooseCard from '../../components/card/ChooseCard'
import search_icon from '../.././assets/images/search_icon.png'
import tag_icon from '../.././assets/images/tag_icon.png'
import timer_icon from '../.././assets/images/timer_icon.png'
export default function Home() {

const ChooseData=[{
  Char:"Easy To Find",
  description:"Erna  Messa aliqa diu puslina hakaiu njau nakjhu bvfrae Messa aliqa diu puslina hakaiu njau nakjhu bvfrae iao vacfa oaiooiuj qerrqy.",
  image:search_icon
},{
  Char:"Affordable Prices",
  description:"Erna Mess  Messa aliqa diu puslina hakaiu njau nakjhu reuifjrjc iei jeijr nc cuquencd  bvfrae hakaiu njau nakjhu bvfrae iao vacfa oaiooiuj qerrqy.",
  image:tag_icon 
},{
  Char:"Quickly Process",
  description:"Erna Messa hakaiu njau  rueof re urecjq uqe8f  iur qor bvfrae iao vacfa Messa aliqa diu puslina hakaiu njau nakjhu bvfrae oaiooiuj qerrqy.",
  image:timer_icon 
}
]


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


      <section>
        <div className='Choose_Home' >
        <div><h2 className='Choose_Heading'>Why To Choose Us</h2></div>
        <div className='ChooseCard'>
{ChooseData.map((item,index)=>{
  return  <ChooseCard key={index} Char={item.Char} image={item.image} data={item.description} />
} ) }

</div>
        </div>
      </section>
    </div>
    </div>
    
  )
}
