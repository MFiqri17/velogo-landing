import Image from 'next/image';
import Link from 'next/link';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';

const FooterMenu = [
  {
    name: 'Beranda',
    href: '/',
  },
  {
    name: 'Fitur',
    href: '/',
  },
  {
    name: 'Cara Kerja',
    href: '/',
  },
  {
    name: 'Testimoni',
    href: '/',
  },
  {
    name: 'FAQ',
    href: '/',
  },
];

const SocialMedia = [
  {
    name: 'Facebook',
    href: '/',
    icon: IoLogoFacebook,
  },
  {
    name: 'Instagram',
    href: '/',
    icon: IoLogoInstagram,
  },
  {
    name: 'Linkedin',
    href: '/',
    icon: IoLogoLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#121212] z-20 w-full h-full">
      <section className="flex md:flex-row flex-col  gap-y-16 w-full h-full justify-between lg:px-45 px-10 py-20">
        <div className="flex flex-col w-70 space-y-9">
          <Image
            src="/velogo-logo-light.svg"
            width={71}
            height={71}
            alt="velogo logo light"
          />
          <p className="text-white lg:text-base text-sm opacity-65">
            Velogo adalah platform berbasis teknologi Artificial Intelligence
            (AI) yang dirancang untuk memudahkan semua orang dalam industri
            properti.
          </p>
        </div>
        <nav className="flex flex-col space-y-2 lg:text-base text-sm">
          {FooterMenu.map((menu) => (
            <Link key={menu.name} href={menu.href} className="text-white">
              {menu.name}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-6">
          {SocialMedia.map((social) => (
            <a key={social.name} className="text-white">
              <social.icon className="size-7" />
            </a>
          ))}
        </div>
      </section>
      <p className="text-neutral-100 lg:text-base text-sm text-center py-4">
        Copyright © 2025 Velogo AI. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
