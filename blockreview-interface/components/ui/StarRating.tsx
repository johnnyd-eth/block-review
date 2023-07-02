import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';
import { twMerge } from 'tailwind-merge';

interface StarProps {
  filled: boolean;
  hoverFilled: boolean;
  onClick: () => void;
  onMouseEnter: () => void; 
  onMouseLeave: () => void;
  partialFill: number;
}

const Star: React.FC<StarProps> = ({ filled, hoverFilled, onClick, onMouseEnter, onMouseLeave, partialFill }) => {
  return (
    <span 
      className={`star${filled ? ' filled' : hoverFilled ? ' hover-filled' : ''}`} 
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} 
    >
      <StarIcon fillColor={filled ? "#5777EB" : hoverFilled ? '#EFF1FE' : ''} fillPercent={(filled || hoverFilled) ? 100 : partialFill} />
    </span>
  )
};


interface StarRatingProps {
  initialRating: number;
  onStarClick?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  initialRating,
  onStarClick,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleStarClick = (newRating: number) => {
    if (!onStarClick) return
    setRating(newRating);
    if (onStarClick) {
      onStarClick(newRating);
    }
  };

  return (
    <div className={twMerge(
      "star-rating w-48",
      onStarClick ? 'cursor-pointer' : 'cursor-default'
    )}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          filled={index <= rating}
          hoverFilled={index <= hoverRating}
          partialFill={index === Math.ceil(rating) ? (rating % 1) * 100 : 0}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => onStarClick && setHoverRating(index)} 
          onMouseLeave={() => onStarClick && setHoverRating(0)}
        />
      ))}
    </div>
  );
};
