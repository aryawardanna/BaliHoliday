import React from 'react';

import ImageHero from 'assets/images/img-hero.png';
import ImageHero_ from 'assets/images/img-hero-frame.png';
import IconCities from 'assets/images/icons/ic_cities.svg';
import IconTraveler from 'assets/images/icons/ic_traveler.svg';
import IconTreasure from 'assets/images/icons/ic_treasure.svg';

import Button from 'components/Button';
import numberFormat from 'utils/formatNumber';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-8 pr-5" style={{ width: 530 }}>
          <h1 className=" font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light  w-75"
            style={{ lineHeight: '170%', color: 'gray-100' }}>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 50 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-4">
                {numberFormat(props.data.travelers)}{' '}
                <span className="text-grey-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-4">
                {numberFormat(props.data.treasures)}{' '}
                <span className="text-grey-500 font-weight-light">
                  treasure
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-4">
                {numberFormat(props.data.cities)}{' '}
                <span className="text-grey-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div style={{ width: 520, height: 410.63, paddingLeft: 65 }}>
            <img
              src={ImageHero}
              alt={`Room wuth couches`}
              className="img-fluid position-absolute"
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt={`Room wuth couches frame`}
              className="img-fluid position-absolute"
              style={{ margin: '0 -5px -5px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
