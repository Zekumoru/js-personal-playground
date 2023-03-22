type ArrowLongRightIconProps = {
  className?: string;
  strokeWidth?: number;
};

const ArrowLongRightIcon = ({
  className,
  strokeWidth,
}: ArrowLongRightIconProps = {}) => {
  return (
    <svg
      className={className ?? ''}
      strokeWidth={strokeWidth ?? 1.5}
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export default ArrowLongRightIcon;
