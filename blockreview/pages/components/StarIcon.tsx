import React from 'react';

interface StarIconProps {
  fillColor: string;
  fillPercent: number;
}

const StarIcon: React.FC<StarIconProps> = ({ fillColor, fillPercent }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-star-fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id={`starGradient${fillPercent}`}>
        <stop offset={`${fillPercent}%`} stopColor={fillColor} />
        <stop offset={`${fillPercent}%`} stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      stroke="lightgray" // Add this line to set a border for the star shape
      strokeWidth="0.5" // Adjust the border thickness as needed
      fill={`url(#starGradient${fillPercent})`}
      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.956l4.898-.696L7.538.668C7.62.289 8.064.289 8.146.668l2.184 4.748 4.898.696c.441.068.612.642.283.956l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.388 2.256z"
    />
  </svg>
);

export default StarIcon;
