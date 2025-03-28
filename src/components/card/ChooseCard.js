import React from 'react'
import './Card.css'
export default function ChooseCard(props) {
  return (
    <div>
        <div > 
        <center>   <img  src={props.image} alt=''></img> </center> 
        </div>
        <div>
        <center>    <h4 className='choosehead'>{props.Char}</h4></center> 
        </div>
        <div>
        <center>  <p className='choosepara'>{props.data}</p></center> 
        </div>
    </div>
  )
}
