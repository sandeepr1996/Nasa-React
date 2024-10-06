import React from 'react'

export default function Main({data,handleToggleModal}) {
    
  return (
    <div className="imgContainer">
            <img src={data.hdurl} alt={data.title} className="bgImg"/>
        </div>
  )
}
