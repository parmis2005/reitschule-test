export default function Blob({
  className = "",
  color = "var(--color-gold)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M45.3,-58.3C58.4,-49.8,68.5,-35.6,72.6,-19.8C76.7,-4,74.8,13.4,67.1,27.6C59.5,41.8,46.1,52.7,31.2,60.5C16.3,68.3,-0.1,73,-16.9,70.4C-33.6,67.8,-50.6,57.9,-61.5,43.3C-72.4,28.7,-77.2,9.4,-74.5,-8.5C-71.8,-26.5,-61.6,-43.1,-47.6,-51.8C-33.6,-60.5,-16.8,-61.3,0.5,-62C17.8,-62.7,32.2,-66.8,45.3,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
