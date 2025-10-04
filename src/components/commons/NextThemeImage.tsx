'use client';

import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface NextThemeImageProps extends Omit<ImageProps, 'src'> {
  lightSrc: string;
  darkSrc: string;
}

const NextThemeImage: React.FC<NextThemeImageProps> = ({
  lightSrc,
  darkSrc,
  alt,
  className,
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image className={cn(className)} src={lightSrc} alt={alt} {...props} />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Image
      className={cn(className)}
      src={isDark ? darkSrc : lightSrc}
      alt={alt + isDark ? 'dark' : 'light'}
      {...props}
    />
  );
};

export default NextThemeImage;
