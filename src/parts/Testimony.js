import React from 'react';
import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg';
import Star from 'components/Star';
import Button from 'components/Button';

export default function Testimony(props) {
  return (
    <section className="container" key={`testimony-${props._id}`}>
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={props.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial frame"
              className="position-absolute"
              style={{ margin: `-30px 0 0 -30px` }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{props.name}</h4>
          <Star value={props.rate} width={35} height={35} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {props.content}
          </h5>
          <span className="text-gray-500">
            {props.familyName}, {props.familyOccupation}
          </span>
          <div className="">
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${props._id}`}>
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
