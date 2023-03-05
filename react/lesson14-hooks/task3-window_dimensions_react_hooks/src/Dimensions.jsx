import React, { useState, useEffect } from 'react';

function Dimensions() {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const {innerHeight, innerWidth} = window;
    setDimensions({width: innerWidth, height: innerHeight});

    const handleResize = e => {
          const { innerHeight, innerWidth } = e.target;
    setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
          window.removeEventListener('resize', handleResize);

    }
  }, []);

  const {width, height} = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
}
export default Dimensions;
