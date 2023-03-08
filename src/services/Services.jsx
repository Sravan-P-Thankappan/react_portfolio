
import React from 'react'
import './Services.css'
import HeartEmoji from '../images/heartemoji.png'
import Glasses from '../images/glasses.png'
import Humble from '../images/humble.png'

const Services = () => {
    return (

        <div className="services">

            {/* left side */}
        
            <div className="awesome">
               <span>My Awesome </span>
               <span>services</span>
               <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi, totam deserunt aspernatur iste voluptatem debitis quod,
                <br />
                 ipsa ipsum mollitia sequi odit sit fugit repellendus perferendis, quas rem obcaecati neque?
               </span>
               <button className='button s-button'>
                Download CV
               </button>

               <div className='blur s-blur' 
               style={{background:'#ABF1FF94'}}>
                 
               </div>
            </div>



            {/* right side */}

            <div className="card">
                 <p>right</p>
            </div>

        </div>
    )
}

export default Services