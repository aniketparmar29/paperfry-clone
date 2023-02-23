import { useState } from "react";
const RatingBar = ({ rating }) => {
  
  const [currentRating, setCurrentRating] = useState(rating);
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="flex items-center z-0">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 fill-current ${
            i < currentRating ? 'text-yellow-500' : 'text-gray-300'
          } cursor-pointer`}
          onClick={() => handleRatingChange(i + 1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0l3.09 6.31L20 7.24l-4.47 4.35 1.06 6.16L10 15.88l-5.59 2.87 1.06-6.16L0 7.24l6.91-.93L10 0z" />
        </svg>
      ))}
    </div>
  );
};
export default RatingBar;