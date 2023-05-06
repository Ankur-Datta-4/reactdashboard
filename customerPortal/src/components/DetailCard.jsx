// component which takes key and value. Displays it in a div
//
import React from 'react'

const DetailCard = ({title,value}) => {
  return (
    <div className='flex-col-start' style={{flexGrow:1}}>
        <p style={{fontSize:"12px", color:"#A2A3A5"}}>{title}</p>
        <p style={{fontSize:"14px", color:"#000000", maxWidth:"16rem"}}>{value}</p>
    </div>
  )
}

export default DetailCard