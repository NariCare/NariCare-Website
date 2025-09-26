import React, { useState, useRef, useEffect } from 'react';
import { useNetworkOptimization } from '../hooks/useNetworkOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  placeholder?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height,
  srcSet,
  sizes,
  placeholder,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { isSlowConnection, saveData } = useNetworkOptimization();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: isSlowConnection ? '50px' : '200px', // Load earlier on slow connections
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading, isSlowConnection]);

  // Don't load images on very slow connections with data saver
  const shouldLoadImage = !saveData || loading === 'eager';

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
  };

  // Show placeholder for slow connections or while loading
  if (!shouldLoadImage || (!inView && loading !== 'eager')) {
    return (
      <div 
        ref={imgRef}
        className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
        style={{ width, height }}
      >
        {placeholder ? (
          <img src={placeholder} alt={alt} className="opacity-50" />
        ) : (
          <div className="text-gray-400 text-sm">Loading...</div>
        )}
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          {placeholder ? (
            <img src={placeholder} alt={alt} className="opacity-50" />
          ) : (
            <div className="text-gray-400 text-sm">Loading...</div>
          )}
        </div>
      )}
      
      {(inView || loading === 'eager') && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          width={width}
          height={height}
          srcSet={srcSet}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {imageError && (
        <div 
          className={`${className} bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300`}
          style={{ width, height }}
        >
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};