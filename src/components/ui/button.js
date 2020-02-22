import React from "react"
import { Link } from "gatsby"

const Button = ({
  text,
  color,
  fontSize,
  padding,
  border,
  background,
  className,
}) => (
  <Link
    to="/"
    style={{
      color: color,
      fontSize: fontSize,
      padding: padding,
      background: background,
      border: border,
    }}
    className={className}
  >
    {text}
  </Link>
)

export default Button
