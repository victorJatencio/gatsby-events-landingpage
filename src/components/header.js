import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Button from "../components/ui/button"

import "./header.module.scss"
import logo from "../images/FiestaFest-small.png"

const Header = () => (
  <header className="container-fluid">
    <nav className="row middle-xs">
      <div className="col-xs-4">
        <Link to="/" className="logo">
          <img src={logo} alt="FiestaFest" />
        </Link>
      </div>
      <div className="col-xs-4">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon icon={faGooglePlus} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-xs-4">
        <Button
          text="Buy tickets"
          color="#fff"
          fontSize="0.8em"
          padding="0.5em 1em"
          className="btn"
        />
      </div>
    </nav>
  </header>
)

export default Header
