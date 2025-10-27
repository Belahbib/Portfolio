import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

export function Skills({
  className,
  width = 28,
  height = 28,
  fill = "#ae85ef",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="17"
        height="14"
        rx="2"
        stroke="#ffffff"
        strokeWidth="0.5"
      />
      <path
        d="M5 6L7 8L5 10"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10H14"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
