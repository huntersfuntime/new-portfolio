import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../../../static/assets/images/auth/authpageimage.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {" "}
      </div>
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">https://www.linkedin.com/in/hunterorges</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">hunterorges@gmail.com</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Salt Lake City, Utah</div>
          </div>
        </div>
      </div>
    </div>
  );
}
