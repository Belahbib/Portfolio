import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

export function EmojiIcon({
  className,
  width = 28,
  height = 28,
  fill = "#ae85ef",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      //   class="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M22 0c0 16.9-9.1 32-22 32c12.9 0 22 15.1 22 32c0-16.9 9.1-32 22-32c-12.9 0-22-15.1-22-32"
          fill="#ffe54d"
        />

        <path
          d="M53 0c0 8.4-4.6 16-11 16c6.4 0 11 7.6 11 16c0-8.4 4.6-16 11-16c-6.4 0-11-7.6-11-16"
          fill="#ffe54d"
        />

        <path
          d="M48 32c0 8.4-4.6 16-11 16c6.4 0 11 7.6 11 16c0-8.4 4.6-16 11-16c-6.4 0-11-7.6-11-16"
          fill="#ffe54d"
        />
      </g>
    </svg>
  );
}
