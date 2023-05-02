import React from 'react'
import './section.css'

function Section(props) {
  return (
    <section style={{backgroundImage: "url( images/"+props.background+" )"}}>
        <div className='modelName'>
            <h1>{props.name}</h1>
            <p>{props.tagline}</p>
        </div>

        <div className='cta'>
            <div className='buttons'>
                <a href="#" className='left'>{props.leftBtn}</a>
                {props.rightBtn && <a href="#" className='right'>{props.rightBtn}</a>}                
            </div>
            {props.arrow && <img src="images/down-arrow.svg" alt="down arrow" />}
            
        </div>
    </section>
  )
}

export default Section