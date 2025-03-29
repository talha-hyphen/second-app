import React from 'react'
import '../.././pages/home/Home.css'
export default function Footer_Data(props) {
  return (
    <div>
        <ul className='list'>
            <li><h2>{props.heading}</h2> </li>
            <li>{props.point1} </li>
            <li>{props.point2}</li>
            <li>{props.point3}</li>
            <li>{props.point4}</li>
        </ul>
    </div>
  )
}
