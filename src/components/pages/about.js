import React from "react";
import profilePic from "../../../static/assets/images/hunterspacex.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {" "}
      </div>
      <div className="right-column">
        <p className="about-me">
          Developing clean, elegant, code to solve complex real-world problems
          is what I live for. I love to tackle new challenges that push me to
          learn something new, even if it is just to refactor a piece of old
          code. I have experience working in both front-end and back-end
          development. I’m currently looking for a company that has a product I
          can get excited about, as well as contribute to my growth.
        </p>
      </div>
    </div>
  );
}
