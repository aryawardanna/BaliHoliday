import React from 'react';
import Button from 'components/Button';

export default function MostPicked(props) {
  return (
    <section>
      <div className="container" ref={props.refMostPicked}>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}>
                <div className="card card-featured sm">
                  <div className="tag">
                    ${item.price}
                    <span className="font-weight-light">pre {item.unit}</span>
                  </div>
                  <figure className="figure img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="streched-link d-block white"
                      href={`/properties/${item._id}`}>
                      <h5>{item.name}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
