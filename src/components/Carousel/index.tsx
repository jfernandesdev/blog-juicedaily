import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import { Container, Inner, WrapperCarouselItem, Indicators } from './styles';

export const CarouselItem = ({ children }) => {
  return <WrapperCarouselItem>{children}</WrapperCarouselItem>;
};

export const Carousel: React.FC = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <Container
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Inner translateX={`-${activeIndex * 100}%`}>
        {React.Children.map(
          children,
          (child: React.ReactElement<any>, index) => {
            return React.cloneElement(child);
          }
        )}
      </Inner>

      <Indicators>
        {React.Children.map(
          children,
          (child: React.ReactElement<any>, index) => {
            return (
              <button
                className={`${index === activeIndex && 'active'}`}
                onClick={() => {
                  updateIndex(index);
                }}
              />
            );
          }
        )}
      </Indicators>
    </Container>
  );
};
