interface StarRatingProps {
  rate: number;
}

const StarRating = ({ rate }: StarRatingProps) => {
  const fullStars = Math.floor(rate);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex gap-[0.2rem]">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-[#ffbc0b]">
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="text-[#E5E7EB]">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
