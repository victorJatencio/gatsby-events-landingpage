import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Header = () => (
  <header
    style={{
      background: `#212121`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faGooglePlus} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
      <div>
        <button>buy tickets</button>
      </div>
    </div>
  </header>
)

export default Header
