type ArrowProps = { size?: number; className?: string };

export function Arrow({ size = 16, className = "btn__arrow" }: ArrowProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 8H15M15 8L9 2M15 8L9 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />
    </svg>
  );
}
