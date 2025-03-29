import React from 'react'
import './Home.css'
import logo from '../.././assets/images/logo.png'
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
import coma_icon from '../.././assets/images/coma_icon.png'
import arrow_icon from '../.././assets/images/arrow_icon.png'
import find_home from '../.././assets/images/find_home.png'
import find_tab from '../.././assets/images/find_tab.png'
import Footer_Home from '../../components/footer-home/Footer-Home'
import fb_logo from '../../assets/images/fb_logo.png'
import yt_logo from '../../assets/images/yt_logo.png'
import insta_logo from '../../assets/images/insta_logo.png'
import tw_logo from '../../assets/images/tw_logo.png'
import Footer_Data from '../../components/footer-data/Footer-Data'
export default function Home() {

const footer_logo =[fb_logo,insta_logo,tw_logo,yt_logo]

const footer_Data =[{
  heading:"Project",
  point1:"Houses",
  point2:"Rooms",
  point3:"Flats",
  point4:"Appartments"
},{
  heading:"Company",
  point1:"How we work?",
  point2:"Capital",
  point3:"Security",
  point4:""
},{
  heading:"Movement",
  point1:"How are we",
  point2:"Support us",
  point3:"",
  point4:""
},{
  heading:"Help",
  point1:"Privacy",
  point2:"Condiion",
  point3:"Blog",
  point4:"FAQs"
}]


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
        <hr/>
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



      <section>
        <hr/>
        <div className='CEO-Descrip' >
          <div>
            <img src={coma_icon}  alt=''></img>
          </div>
          <div> 
            <p className='ceo-para' > 
Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor.
Elena Pravo
Ceo, Upstate</p>
          </div>
          <div className='ceo-name' >
            <div><h4 >Elena Pravo </h4>
            <p>Ceo Upstate</p></div>
            <div>
              <img src={arrow_icon} alt=''></img>
            </div>
          </div>
        </div>
      </section>


      <section>
        <hr/>
        <div className='find_home'>
          <div className='home_img' >
            <img  src={find_home} alt=''></img>
          </div>
          <div>
            <img src ={find_tab} alt=''></img>
          </div>
          <div className='find_home_descrip' >
            <center><h3 className='find_heading' >We help people to find homes</h3></center>
            <p className='find_para' >Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
          </div>
        </div>
      </section>


      <section>
        <hr/>
         <div className='idl_list'>
          <div className='img_descrip_logo'>
            <img src={logo}  alt='' ></img>
            
           <p className='footer_para'>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
            
            <div className='footer_logo'>
            {footer_logo.map((logo,index) => {
              return <Footer_Home key={index} logo={logo} />
            })}
            </div>
            </div>

            
            <div className='footer_datalist'>
              {footer_Data.map((Data,index)=>{
                return <Footer_Data key={index} 
                heading={Data.heading}  point1={Data.point1}
                point2={Data.point2} point3={Data.point3}
                point4={Data.point4} />
              })}
              </div>
              </div>
              
              <hr/>

              <center><h6 className='ending'>HAPPY CODING!</h6></center>
        
      </section>
    </div>
    </div>
    
  )
}
