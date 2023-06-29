import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';
import { twMerge } from 'tailwind-merge';

interface StarProps {
  filled: boolean;
  onClick: () => void;
  partialFill: number;
}

const Star: React.FC<StarProps> = ({ filled, onClick, partialFill }) => (
  <span className={`star${filled ? ' filled' : ''}`} onClick={onClick}>
    <StarIcon fillColor="#5777EB" fillPercent={filled ? 100 : partialFill} />
  </span>
);

interface StarRatingProps {
  initialRating: number;
  onStarClick?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  initialRating,
  onStarClick,
}) => {
  const [rating, setRating] = useState(initialRating);

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
          partialFill={index === Math.ceil(rating) ? (rating % 1) * 100 : 0}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};
