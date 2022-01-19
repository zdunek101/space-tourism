import React from "react";
import "../css/Technology.scss";
import Carousel, { CarouselItem } from "../settings/Carousel";

const Technology = () => {
  return (
    <>
      <h3 className="technology_title">
        <span>03</span> SPACE LAUNCH 101
      </h3>

      <Carousel sectionName={"technology"} countButton={true}>
        <CarouselItem>
          <div className="technology_container">
            <div className="technology_section-one">
              <picture>
                <source
                  srcSet={require(`../image/technology/image-launch-vehicle-portrait.jpg`)}
                  media="(min-width: 1200px)"
                />
                <source srcSet={require(`../image/technology/image-launch-vehicle-landscape.jpg`)} />
                <img
                  className="technology_section-image "
                  src={require(`../image/technology/image-launch-vehicle-landscape.jpg`)}
                  alt="Lauch Vehicle"
                />
              </picture>
            </div>

            <div className="technology_section-two">
              <div className="technology_text">
                <p>THE TERMINOLOGY…</p>
                <h3>LAUNCH VEHICLE</h3>
                <p>
                  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's
                  surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in
                  operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="technology_container">
            <div className="technology_section-one">
              <picture>
                <source
                  srcSet={require(`../image/technology/image-spaceport-portrait.jpg`)}
                  media="(min-width: 1200px)"
                />
                <source srcSet={require(`../image/technology/image-spaceport-landscape.jpg`)} />
                <img
                  className="technology_section-image "
                  src={require(`../image/technology/image-spaceport-landscape.jpg`)}
                  alt="Lauch Vehicle"
                />
              </picture>
            </div>
            <div className="technology_section-two">
              <div className="technology_text">
                <p>THE TERMINOLOGY…</p>
                <h3>SPACEPORT</h3>
                <p>
                  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport
                  for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
                  situated to take advantage of the Earth’s rotation for launch.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="technology_container">
            <div className="technology_section-one">
              <picture>
                <source
                  srcSet={require(`../image/technology/image-space-capsule-portrait.jpg`)}
                  media="(min-width: 1200px)"
                />
                <source srcSet={require(`../image/technology/image-space-capsule-landscape.jpg`)} />
                <img
                  className="technology_section-image "
                  src={require(`../image/technology/image-space-capsule-landscape.jpg`)}
                  alt="Lauch Vehicle"
                />
              </picture>
            </div>
            <div className="technology_section-two">
              <div className="technology_text">
                <p>THE TERMINOLOGY…</p>
                <h3>SPACE CAPSULE</h3>
                <p>
                  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the
                  Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It
                  includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* <CarouselItem>Item1</CarouselItem>
      <CarouselItem>Item2</CarouselItem>
      <CarouselItem>Item3</CarouselItem> */}
      </Carousel>
    </>
  );
};

export default Technology;
