import React from "react"
import "./about.scss"

import Music from "../../../images/music.svg"
import Headphone from "../../../images/headphones.svg"
import Popcorn from "../../../images/popcorn.svg"

const About = () => {
  return (
    <section>
      <div className="container padding-y-m">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <h1 className="h1 margin-bottom-l">WHAT YOU WILL EXPERIENCE</h1>
          </div>

          <div className="col-xs-4">
            <div className="margin-bottom-m">
              <img src={Music} alt="Music" width="72" />
            </div>
            <div>
              <small>Best artists</small>
              <h3 className="margin-top">Unique lineup</h3>
              <p>
                Event Festival offers you a wide selection of more than 200
                musicians, groups, and DJs from year to year. All of them are
                distinguished by outstanding sound and performance.
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="margin-bottom-m">
              <img src={Headphone} alt="Headphone" width="72" />
            </div>
            <div>
              <small>Nine different stages</small>
              <h3 className="margin-top">Listen to what you like</h3>
              <p>
                Tastes differ and that’s why we offer you several stages with a
                variety of artists performing all 5 days of the festival. From
                EDM and Bass to Rock and Pop Music, you can freely enjoy the
                performances you prefer.
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="margin-bottom-m">
              <img src={Popcorn} alt="Popcorn" width="72" />
            </div>
            <div>
              <small>Accommodation & catering</small>
              <h3 className="margin-top">Enjoy your stay</h3>
              <p>
                We understand how important it is to have rest between
                performances of your favorite artists and we are ready to offer
                a range of accommodation and catering options at affordable
                price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
