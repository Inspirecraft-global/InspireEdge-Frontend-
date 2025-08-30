export default function DashboardSkeleton({
  width,
  height,
  circle = false,
  className = '',
}) {
  return (
    <div
      className={`skeleton-loader ${
        circle ? 'skeleton-circle' : ''
      } ${className}`}
      style={{ width, height }}
    ></div>
  );
}
