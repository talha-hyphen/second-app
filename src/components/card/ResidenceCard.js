import React from 'react'

export default function ResidenceCard(props) {
  return (
    <div>
        <div>
            <img src={props.image} alt="" ></img>
            </div>
        <div>
            <h5>{props.name}</h5>
            </div>
        <div>
            <p>{props.description}</p>
        </div>
        <div>
            <p>{props.area}</p>
        </div>
    </div>
  )
}
