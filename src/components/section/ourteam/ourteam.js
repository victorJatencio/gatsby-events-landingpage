import React from "react"
import Avatar from "@material-ui/core/Avatar"

const Ourteam = () => {
  return (
    <section>
      <div className="container padding-y-m">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1 className="h1">OUR TEAM</h1>
            <p className="margin-bottom-l">
              Learn more about people behind Event Festival
            </p>
          </div>
          <div className="col-xs-4">
            <div className="avatar-section">
              <div className="avatar-item">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/500?img=60"
                />
              </div>
              <h3 className="margin-bottom-xs">John Doe</h3>
              <small>Festival Director</small>
              <p className="margin-top-s">
                John is an expert in everything related to events organization
                and as a rock and electronic music fan, he became one of the
                Event Festival founders.
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="avatar-section">
              <div className="avatar-item">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/500?img=49"
                />
              </div>

              <h3 className="margin-bottom-xs">Julie Smith</h3>
              <small>Marketing Director</small>
              <p className="margin-top-s">
                Julie joined our team a few years after the emergence of our
                festival. Her exceptional marketing skills allowed us to attract
                more great artists to our event.
              </p>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="avatar-section">
              <div className="avatar-item">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/500?img=69"
                />
              </div>

              <h3 className="margin-bottom-xs">Bernard Show</h3>
              <small>Head of Artistic Management</small>
              <p className="margin-top-s">
                Julie joined our team a few years after the emergence of our
                festival. Her exceptional marketing skills allowed us to attract
                more great artists to our event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ourteam
