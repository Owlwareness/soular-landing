export function StarBackground() {
  return (
    <div className="galaxy-bg">
      {/* Foreground stars - drift faster */}
      <div className="stars-layer stars-drift-fast" />
      {/* Middle stars - medium drift */}
      <div className="stars-layer-2 stars-drift-medium" />
      {/* Background stars - barely moves */}
      <div className="stars-layer-3 stars-drift-slow" />
    </div>
  );
}
