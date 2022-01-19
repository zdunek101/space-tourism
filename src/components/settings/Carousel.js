import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, sectionName, countButton }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  //   const CarouselButton = ({ children, sectionName, activeIndex, updateIndex, countButton }) => {
  //     return (

  //       // <p>Bleble</p>
  //     );
  //   };

  return (
    <div {...handlers} className={`${sectionName}_carousel carousel`}>
      <div className={`${sectionName}_inner inner`} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return <>{React.cloneElement(child, { width: "100%" })}</>;
        })}
      </div>
      <div className={`${sectionName}_indicators`}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${sectionName}_button ${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {countButton === true ? index + 1 : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <div className={`${sectionName}_indicators`}>
  {React.Children.map(children, (child, index) => {
    return (
      <button
        className={`${sectionName}_button ${index === activeIndex ? "active" : ""}`}
        onClick={() => {
          updateIndex(index);
        }}
      >
        {countButton === true ? index + 1 : ""}
      </button>
    );
  })}
</div>; */
}
