import React from 'react'
import FooterLogo from './FooterLogo'
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className='footerflex'>

        <div className='footerfirstbox'>
          {/* <div><FooterLogo /></div> */}
          <div className='Flogo'>The Siren</div>
          <div className='content'>An All in one blog, bringing you the best of entertainment, knowledge
            and inspiration</div>
          <div className='content reserve'> <span>©</span>2023.The Siren. All Rights reserved</div>
        </div>

{/* <div className='secondcommoncontainer'> */}
        <div className='footersecondbox'>
          <div ><h3>Contact</h3>
            <div className='content'>
              <span className="LocEmoji">📍</span> 101, Vijayanagar, Bangalore.
            </div>
            <div className='content'>
              <span className="PhoneEmoji">📞</span> +91 76767676 00
            </div>
            <div className='content'>
              <pre><span className="MailEmoji">✉ </span>  support@thesiren.com</pre>
            </div>
          </div>
        </div>


        <div className='footerthirdbox'>
          <div><h3 className="reference">References</h3>
            <div className="TheFBollywood"><a className="Flinks" href="https://www.bollywoodhungama.com/movies/top-100-movies/">Bollywood</a></div>
            <div className="TheFHollywood"><a className="Flinks" href="https://www.themoviedb.org/movie">Hollywood</a></div>
            <div className="TheFTechnology"><a className="Flinks" href="https://www.cnet.com/news/">Technology</a></div>
            <div className="TheFFitness"><a className="Flinks" href="https://www.precisionnutrition.com/blog">Fitness</a></div>
            <div className="TheFFood"><a className="Flinks" href="https://pinchofyum.com/blog">Food</a></div></div>
        </div>
      </div>
    </div>
  // </div>
  )
}

export default Footer