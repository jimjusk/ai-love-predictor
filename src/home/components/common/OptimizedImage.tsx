import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useInView } from 'react-intersection-observer';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  withBlur?: boolean;
}

export default function OptimizedImage({ 
  withBlur = true,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden
        ${withBlur && !isLoaded ? 'blur-sm' : 'blur-0'}
        transition-all duration-300
      `}
    >
      {inView && (
        <Image
          {...props}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          sizes={props.sizes || '(max-width: 768px) 100vw, 50vw'}
        />
      )}
    </div>
  );
} 