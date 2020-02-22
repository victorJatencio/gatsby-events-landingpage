import React, { Component } from "react"
import "./counter.scss"

class Counter extends Component {
  state = {}

  render() {
    return (
      <div className="countdown-wrapper">
        <div className="countdown">
          <div className="countdown_item">
            <div className="countdown_tag">Days</div>
            <div className="countdown_time">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
          <div className="countdown_item">
            <div className="countdown_tag">Hours</div>
            <div className="countdown_time">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
          <div className="countdown_item">
            <div className="countdown_tag">Minutes</div>
            <div className="countdown_time">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
          <div className="countdown_item">
            <div className="countdown_tag">Seconds</div>
            <div className="countdown_time">
              <span>0</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
