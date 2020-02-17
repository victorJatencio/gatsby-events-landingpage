import React from "react"
import { Link } from "gatsby"

const Button = ({ text, color }) => (
  <Link
    to="/"
    style={{
      color: color,
    }}
    className="btn"
  >
    {text}
  </Link>
)

export default Button
