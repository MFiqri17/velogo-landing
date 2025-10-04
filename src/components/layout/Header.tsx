'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerClose,
} from '@/components/ui/drawer';
import NextThemeImage from '@/components/commons/NextThemeImage';
import ThemeToggle from '@/components/commons/ThemeToggle';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const NavMenu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Features',
    href: '/',
  },
  {
    name: 'How It Works',
    href: '/',
  },
  {
    name: 'Testimonials',
    href: '/',
  },
  {
    name: 'FAQ',
    href: '/',
  },
];

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            'h-12 w-12 rounded-2xl bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-cyan-400/10 border border-gray-400 dark:border-cyan-400/30 hover:border-cyan-400/50 dark:hover:border-cyan-300/60  hover:from-cyan-400/30 hover:via-cyan-400/20 hover:to-cyan-400/30',
            className
          )}
          size="icon"
          aria-label="hamburger-menu"
        >
          <HiOutlineMenuAlt2 className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="h-screen !w-full rounded-none top-0 mt-0 right-0  pb-12 px-10"
      >
        <DrawerHeader className="flex px-0 py-6 flex-row shadow-sm justify-between items-center">
          <NextThemeImage
            lightSrc="/velogo-logo-dark.svg"
            darkSrc="/velogo-logo-light.svg"
            width={50}
            height={50}
            alt="velogo logo"
          />
          <VisuallyHidden>
            <DrawerTitle>Mobile Nav Menu</DrawerTitle>
          </VisuallyHidden>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              className="h-12 w-12 rounded-2xl bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-cyan-400/10 border border-gray-400 dark:border-cyan-400/30 hover:border-cyan-400/50
                dark:hover:border-cyan-300/60  hover:from-cyan-400/30 hover:via-cyan-400/20 hover:to-cyan-400/30"
              size="icon"
            >
              <IoMdClose className="size-5" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <section className="w-full h-full flex flex-col justify-between mt-14">
          <nav className="flex flex-col text-center space-y-10 items-center justify-center">
            {NavMenu.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="text-custom-primary-black hover:font-bold text-base"
              >
                {menu.name}
              </Link>
            ))}
            <Button
              size="lg"
              className="bg-custom-primary-blue px-10 h-14 text-base text-white font-semibold rounded-2xl"
            >
              Log In
            </Button>
          </nav>
          <div className="w-full flex justify-end">
            <ThemeToggle />
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
};

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      setShow(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed z-50 flex items-center  justify-between w-full h-26 lg:px-30 px-10',
        scrolled
          ? 'bg-custom-primary-white shadow-xl'
          : 'bg-transparent shadow-none'
      )}
    >
      <NextThemeImage
        lightSrc="/velogo-logo-dark.svg"
        darkSrc="/velogo-logo-light.svg"
        width={50}
        height={50}
        alt="velogo logo"
      />
      <nav className="md:flex hidden items-center space-x-8">
        {NavMenu.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className="text-custom-primary-black font-normal lg:text-base md:text-xs text-base"
          >
            {menu.name}
          </Link>
        ))}
      </nav>
      <div className="md:flex hidden items-center space-x-4">
        <ThemeToggle />
        <Button
          size="lg"
          className="bg-custom-primary-blue px-10 h-14 text-base text-white font-semibold rounded-2xl"
        >
          Log In
        </Button>
      </div>

      <Link
        href="/"
        className="md:hidden block text-custom-primary-black text-2xl font-bold"
      >
        Velogo
      </Link>
      <MobileNav className="md:hidden inline-flex" />
    </motion.header>
  );
};

export default Header;
