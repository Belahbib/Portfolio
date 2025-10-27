import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

export function Dev({ className, width = 28, height = 28 , fill = "#ae85ef" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.5 8.33337C4.5 7.2288 5.39543 6.33337 6.5 6.33337H29.5C30.6046 6.33337 31.5 7.2288 31.5 8.33337V23.75H4.5V8.33337Z"
        fill={fill}
        fillOpacity="0.24"
      />
      <path
        d="M7 26.3334C7 25.7811 7.44772 25.3334 8 25.3334H28C28.5523 25.3334 29 25.7811 29 26.3334V28.0834C29 29.1879 28.1046 30.0834 27 30.0834H9C7.89543 30.0834 7 29.1879 7 28.0834V26.3334Z"
        fill={fill}
      />
      <path
        d="M20.6667 12.0834L23.3333 15L20.6667 17.9167"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path
        d="M15.3333 12.0834L12.6667 15L15.3333 17.9167"
        stroke="#ffffff"
        strokeWidth="2"
      />
    </svg>
  );
}
