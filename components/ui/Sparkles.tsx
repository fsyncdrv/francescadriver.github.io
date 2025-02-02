// TODO: Are we keeping this?
import React from 'react';

interface SparkleProps {
  fillColor: string;
  width: number;
  height: number;
  alt?: string;
  style?: React.CSSProperties;
  onMouseEnter: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const Sparkles: React.FC<SparkleProps> = ({ fillColor, width, height, style, onMouseEnter }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      style={style}
      onMouseEnter={onMouseEnter}
    >
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M2513 4565 c-17 -7 -38 -26 -46 -42 -8 -15 -56 -174 -107 -353 -51
        -179 -110 -368 -132 -420 -154 -379 -479 -704 -859 -859 -52 -21 -248 -82
        -437 -136 -364 -104 -383 -113 -397 -175 -9 -41 19 -95 58 -113 18 -8 178 -56
        357 -107 179 -51 367 -110 419 -131 381 -156 704 -479 859 -859 22 -52 81
        -241 132 -420 51 -179 99 -339 107 -357 18 -39 72 -67 113 -58 62 14 71 33
        175 397 104 365 146 482 222 615 159 278 421 520 703 651 106 49 194 78 543
        177 326 93 348 103 362 165 7 34 -15 89 -44 107 -11 7 -163 53 -338 103 -429
        123 -511 154 -663 247 -296 183 -524 448 -649 754 -21 52 -80 240 -131 419
        -51 179 -99 338 -107 353 -13 27 -66 58 -95 57 -7 -1 -27 -7 -45 -15z"/>
      </g>
    </svg>
  );
}

export default Sparkles;
