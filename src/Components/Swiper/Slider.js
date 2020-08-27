import styles from './index.module.sass';
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const MOVE_BUFFER_RADIUS = 10;
const MAX_VERTICAL_DISTANCE = 75;
const MAX_VERTICAL_RATIO = 0.3;
const MIN_HORIZONTAL_DISTANCE = 30;

function getCoordinates(event) {
  const originalEvent = event.originalEvent || event;
  const touches =
    originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
  const e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];

  return {
    x: e.clientX,
    y: e.clientY,
  };
}

const Slider = ({
  mass = 1,
  dots = null,
  tension = 195,
  friction = 25,
  arrows = false,
  children = null,
  activeClass = '',
  slidesToShow = 5,
  infinite = false,
  elementClass = '',
  parentClass = '',
  inactiveClass = '',
  slidesToScroll = 5,
  nextArrow: NextArrow = null,
  prevArrow: PrevArrow = null,
  leftInactiveElementsClass = '',
  rightInactiveElementsClass = '',
}) => {
  const max = children.length;
  const sectionWidth = max / slidesToShow;
  const containerWidth = sectionWidth * ((infinite && 3) || 1);
  const itemWidth = 100 / slidesToShow / containerWidth;
  const initialTranslate = infinite ? (100 / 3) * -1 : 0;
  const [oldPosition, setOldPosition] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [state, setState] = useState({
    totalX: 0,
    totalY: 0,
    deltaX: 0,
    deltaY: 0,
    type: null,
    position: 0,
    direction: 0,
    active: false,
    lastPos: null,
    startCoords: null,
  });

  const { deltaX, position, type, direction } = state;
  const rangeDelta = infinite ? children.length : 0;
  const range = [position + rangeDelta, position + rangeDelta + slidesToShow - 1];

  const [transformProps, setTransformProps] = useSpring(() => ({
    immediate: false,
    config: {
      mass,
      tension,
      friction,
      clamp: true,
    },
    transform: `translateX(calc(${initialTranslate - itemWidth * position}% - ${deltaX * -1}px))`,
  }));

  const last = max - 1;
  const isFirstMove = !!(
    type === 'end' &&
    position === last &&
    direction === 1 &&
    position !== oldPosition
  );
  const isFinalMove = !!(
    type === 'end' &&
    position === 0 &&
    direction === -1 &&
    position !== oldPosition
  );

  const els = ((infinite && [...children, ...children, ...children]) || children).map(
    (el, index) => {
      let computedIndex;
      if (isFinalMove) {
        computedIndex = index - 3;
      } else if (isFirstMove) {
        computedIndex = index + 3;
      } else computedIndex = index;

      const isElementVisibleInViewport = computedIndex >= range[0] && range[1] >= computedIndex;
      const isLeftElement = !isElementVisibleInViewport && computedIndex < range[0];
      const isRightElement = !isElementVisibleInViewport && computedIndex > range[1];

      return (
        <div
          key={index}
          className={`${styles.element} ${elementClass} ${computedIndex} ${
            (isElementVisibleInViewport && activeClass) || inactiveClass
          } ${isLeftElement && leftInactiveElementsClass} ${
            isRightElement && rightInactiveElementsClass
          } ${position === oldPosition && type === 'end' && styles.avoidAnimation}`}
          style={{ width: `${itemWidth}%` }}>
          {el}
        </div>
      );
    },
  );

  const onTouchStart = (event) => {
    if (!isActive) return;
    const coords = getCoordinates(event);
    setIsActive(false);
    setState((state) => ({
      ...state,
      totalX: 0,
      totalY: 0,
      deltaX: 0,
      deltaY: 0,
      type: 'start',
      active: true,
      lastPos: coords,
      startCoords: coords,
    }));
  };

  const onTouchCancel = () => {
    setIsActive(true);
    setState((state) => ({
      ...state,
      totalX: 0,
      totalY: 0,
      deltaX: 0,
      deltaY: 0,
      active: false,
      lastPos: null,
      type: 'cancel',
      startCoords: null,
    }));
  };

  const onTouchMove = (event) => {
    const { totalX, totalY, active, lastPos, startCoords } = state;
    if (!active || !startCoords || !lastPos) return;

    const coords = getCoordinates(event);
    const newState = {
      totalX: totalX + Math.abs(coords.x - lastPos.x),
      totalY: totalY + Math.abs(coords.y - lastPos.y),
    };

    if (newState.totalX >= MOVE_BUFFER_RADIUS || newState.totalY >= MOVE_BUFFER_RADIUS) {
      if (newState.totalY > newState.totalX) {
        return onTouchCancel();
      } else {
        newState.deltaX = coords.x - lastPos.x;
        newState.deltaY = coords.y - lastPos.y;
        event.preventDefault();
      }
    }

    setState((state) => ({
      ...state,
      ...newState,
      type: 'move',
    }));
  };

  const validSwipe = (coords) => {
    const startCoords = state.startCoords;
    if (!startCoords) return false;
    const deltaY = Math.abs(coords.y - startCoords.y);
    const deltaX = Math.abs(coords.x - startCoords.x);
    return {
      isValid:
        state.active &&
        deltaY < MAX_VERTICAL_DISTANCE &&
        deltaX > 0 &&
        deltaX > MIN_HORIZONTAL_DISTANCE &&
        deltaY / deltaX < MAX_VERTICAL_RATIO,
      direction: Math.sign(coords.x - startCoords.x),
    };
  };

  const onTouchEnd = (event) => {
    if (!state.active) return true;
    const { isValid, direction } = validSwipe(getCoordinates(event));

    setState((state) => {
      const naturalPosition = state.position + direction * -1 * slidesToScroll;
      const modulePosition = (naturalPosition + max) % max;
      const cropPosition = Math.max(Math.min(max - slidesToScroll, naturalPosition), 0);
      const position = isValid ? (infinite ? modulePosition : cropPosition) : state.position;

      return {
        ...state,
        position,
        direction,
        deltaX: 0,
        deltaY: 0,
        type: 'end',
        active: false,
      };
    });

    return true;
  };

  const navRef = useRef(null);

  useEffect(() => {
    const element = navRef && navRef.current;
    if (element) {
      element.addEventListener('touchmove', onTouchMove, { passive: false });
      return () => {
        element.removeEventListener('touchmove', onTouchMove);
      };
    }
  });

  useEffect(() => {
    const finalPosition = (isFinalMove && max) || (isFirstMove && -1) || position;

    setTransformProps({
      immediate: ['move'].includes(type),
      transform: `translateX(calc(${initialTranslate - itemWidth * finalPosition}% - ${
        deltaX * -1
      }px))`,
      onRest: () => {
        if (isFinalMove || isFirstMove) {
          setTransformProps({
            immediate: true,
            transform: `translateX(calc(${
              initialTranslate - itemWidth * ((isFirstMove && last) || 0)
            }% - ${deltaX * -1}px))`,
          });
        }
        if (type === 'end') {
          setIsActive(true);
          setOldPosition(position);
        }
      },
    });
  }, [
    initialTranslate,
    itemWidth,
    position,
    deltaX,
    type,
    direction,
    oldPosition,
    max,
    setTransformProps,
    last,
    isFinalMove,
    isFirstMove,
  ]);

  function handlePrev() {
    if (!(isActive && ((!infinite && state.position > 0) || !!infinite))) return;
    const naturalPosition = state.position - 1 * slidesToScroll;
    const modulePosition = (naturalPosition + max) % max;
    const cropPosition = Math.max(Math.min(max - slidesToScroll, naturalPosition), 0);
    const position = infinite ? modulePosition : cropPosition;

    setIsActive(false);

    setState((state) => {
      return {
        ...state,
        position,
        type: 'end',
        direction: 1,
      };
    });
  }

  function handleNext() {
    if (!(isActive && ((!infinite && state.position < max - 1) || !!infinite))) return;
    const naturalPosition = state.position + 1 * slidesToScroll;
    const modulePosition = (naturalPosition + max) % max;
    const cropPosition = Math.max(Math.min(max - slidesToScroll, naturalPosition), 0);
    const position = infinite ? modulePosition : cropPosition;

    setIsActive(false);
    setState((state) => {
      return {
        ...state,
        position,
        type: 'end',
        direction: -1,
      };
    });
  }

  function handleBulletClick(index) {
    setIsActive(false);
    setState((state) => {
      return {
        ...state,
        type: 'end',
        direction: 0,
        position: index,
      };
    });
  }

  return (
    <div>
      {arrows && (
        <PrevArrow
          className={
            (isActive && ((!infinite && position > 0) || !!infinite) && styles.isActive) ||
            styles.isInactive
          }
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
          onClick={handlePrev}
        />
      )}

      <nav
        ref={navRef}
        className={`${styles.carousel} ${parentClass}`}
        onTouchStart={onTouchStart}
        onTouchCancel={onTouchCancel}
        onTouchEnd={onTouchEnd}>
        <animated.div
          className={styles.container}
          style={{
            ...transformProps,
            width: `${containerWidth * 100}%`,
          }}>
          {els}
        </animated.div>

        {dots &&
          React.createElement(dots, {
            realPosition: position,
            position: Math.ceil(position / slidesToScroll),
            steps: Math.ceil(max / slidesToScroll),
            onClick: handleBulletClick,
          })}
      </nav>

      {arrows && (
        <NextArrow
          className={
            (isActive &&
              ((!infinite && state.position < max - 1) || !!infinite) &&
              styles.isActive) ||
            styles.isInactive
          }
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
          onClick={handleNext}
        />
      )}
    </div>
  );
};

export default Slider;
