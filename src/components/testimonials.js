import React from "react";
import "../styles/testimonials.css";

export const Testimonials = () => {
  return (
    <div className="testimonial-content">
      <img
        className="testimonial-image"
        src={require("../image/person1.jpg")}
        alt="Emma_picture"
      />

      <div className="content-testimonials-text">
        <p className="testimonial-name">Emma Bostian from Dubai</p>
        <p className="testimonial-position">Software engineer at spotify</p>
        <p className="testimonial-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five.
        </p>
      </div>
    </div>
  );
};
