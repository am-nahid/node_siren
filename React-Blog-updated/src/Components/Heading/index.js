import React from 'react'
import './genericheader.css' 

function GeneralHeading({HeaderText}) {
  return (
    <div className='genericheader'>
      <h1 className='genericheadertext'>{HeaderText}
      </h1 >

    < hr  className="generichr" />
    </div>
    
  )
}

export default GeneralHeading