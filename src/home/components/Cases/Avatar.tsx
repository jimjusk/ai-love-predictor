import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  fallback?: string;
}

export default function Avatar({ src, alt, fallback }: AvatarProps) {
  const [error, setError] = React.useState(false);

  return (
    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setError(true)}
          sizes="64px"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-xl font-semibold">
          {fallback || alt.charAt(0)}
        </div>
      )}
    </div>
  );
} 