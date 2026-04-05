import { useEffect, useState } from "react";

function SmartImage({ src, fallbackSrc, alt, className = "", ...rest }) {
  // This keeps placeholder visuals visible even if a real file path is missing.
  const [activeSrc, setActiveSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setActiveSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <img
      {...rest}
      alt={alt}
      className={className}
      onError={() => {
        if (activeSrc !== fallbackSrc) {
          setActiveSrc(fallbackSrc);
        }
      }}
      src={activeSrc}
    />
  );
}

export default SmartImage;
