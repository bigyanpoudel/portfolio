import React from 'react'
const ProgressBar = ({skill,value}) => {
    return (
       <div className="ProgressBar">
           <div className="ProgressBar__fill" style={{width:`${value}%`}}>
               <div className="ProgressBar__text">{skill}</div>
           </div>
           <span>{value}%</span>
        </div>
    )
}

export default ProgressBar
