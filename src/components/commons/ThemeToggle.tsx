'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { PiSunDimLight, PiMoonLight } from 'react-icons/pi';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        className="h-12 w-12 rounded-2xl bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-cyan-400/10 border border-gray-400 dark:border-cyan-400/30 hover:border-cyan-400/50
                dark:hover:border-cyan-300/60  hover:from-cyan-400/30 hover:via-cyan-400/20 hover:to-cyan-400/30"
        size="icon"
      >
        <span className="size-5" />
      </Button>
    );
  }
  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      type="button"
      variant="outline"
      className="h-12 w-12 rounded-2xl bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-cyan-400/10 border border-gray-400 dark:border-cyan-400/30 hover:border-cyan-400/50
                dark:hover:border-cyan-300/60  hover:from-cyan-400/30 hover:via-cyan-400/20 hover:to-cyan-400/30"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      size="icon"
    >
      {isDark ? (
        <PiMoonLight className="size-5" />
      ) : (
        <PiSunDimLight className="size-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
