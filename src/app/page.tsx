'use client';

import PropertySearchForm from '@/components/commons/PropertySearchForm';
import QuantityItem from '@/components/commons/QuantityItem';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PiStarFourThin } from 'react-icons/pi';
import { BsLightningCharge } from 'react-icons/bs';
import { IoMdTime } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { GrSearchAdvanced } from 'react-icons/gr';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { motion, Variants } from 'motion/react';
import FeatureItem from '@/components/commons/FeatureItem';
import FeatureDetailItem from '@/components/commons/FeatureDetailItem';
import WhyChooseItem from '@/components/commons/WhyChooseItem';
import HowToItem from '@/components/commons/HowToItem';
import TestimonialItem from '@/components/commons/TestimonialItem';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const FeatureData = [
  {
    name: 'AI Matchmaking',
    highlight:
      'Post and Find the right properties in seconds with AI-powered search and filters.',
    description:
      'With AI Utilization, Velogo introduces a new way to search for and post properties. Simply tell Velogo your requirements, and the system will carry out the search or posting accurately, quickly, and efficiently. The results will only show based on your requirement, giving you a greater chance of finding the right property.',
    icon: BsLightningCharge,
    image: '/ai-matchmaking.png',
  },
  {
    name: 'CRM Leads',
    highlight:
      'Manage your potential clients, database, leads interactions from one central dashboard.',
    description:
      'Velogo helps agents manage leads more effectively. Whenever a client shows interest in a property listing you are selling, agents receive instant notifications to track potential buyers, monitor their interactions, so agent can follow up at the right time, maximizing the chances of closing deals.',
    icon: BsLightningCharge,
    image: '/crm-leads.png',
    isReverse: true,
  },
  {
    name: 'Wishlist',
    highlight:
      'Save your requirements. Velogo will automatically notify you when a suitable listing appears.',
    description:
      'Dengan utilisasi AI, Velogo menghadirkan cara baru dalam mencari maupun memposting properti. Cukup sebutkan kebutuhanmu, sistem akan melakukan pencarian atau posting secara tepat, cepat, dan efisien. Hasil yang ditampilkan pun sesuai dengan kriteria kebutuhanmu, sehingga peluang menemukan properti yang tepat menjadi lebih besar.',
    icon: BsLightningCharge,
    image: '/wishlist.png',
  },
  {
    name: 'Market Analytics',
    highlight:
      'Real-time market insights, Interactive charts help you set strategies and advise clients with confidence.',
    description:
      'Dengan utilisasi AI, Velogo menghadirkan cara baru dalam mencari maupun memposting properti. Cukup sebutkan kebutuhanmu, sistem akan melakukan pencarian atau posting secara tepat, cepat, dan efisien. Hasil yang ditampilkan pun sesuai dengan kriteria kebutuhanmu, sehingga peluang menemukan properti yang tepat menjadi lebih besar.',
    icon: BsLightningCharge,
    image: '/market-analytics.png',
    isReverse: true,
  },
];

const WhyChooseVelogoData = [
  {
    Icon: FaWhatsapp,
    title: 'Whatsapp Integration',
    description:
      'Velogo.AI is specifically designed to be accessible through WhatsApp. This approach ensures that the platform is available within the environment where users are already active, facilitating seamless adoption',
  },
  {
    Icon: GrSearchAdvanced,
    title: 'AI Auomation',
    description:
      'As an AI personal assistant that helps agents parse listings, respond quickly, and ensure no opportunities are missed.',
  },
  {
    Icon: IoMdTime,
    title: 'Time Efficiency',
    description:
      'Save hours on routine tasks, so you can serve more clients and increase your probability of closing.',
  },
  {
    Icon: FaWhatsapp,
    title: 'Whatsapp Integration',
    description:
      'Velogo.AI is specifically designed to be accessible through WhatsApp. This approach ensures that the platform is available within the environment where users are already active, facilitating seamless adoption',
  },
];

const TestimonialsData = [
  {
    image: '/ronaldo.jpg',
    name: 'Cristiano Ronaldo',
    role: 'Football Player',
    star: 5,
    review:
      '“Velogo AI helps me acquire and manage leads more effectively. With CRM Leads, we dont just gain leads , we also get database that supports our sales development.”',
  },
  {
    image: '/ronaldo.jpg',
    name: 'Cristiano Ronaldo',
    role: 'Football Player',
    star: 5,
    review:
      '“Velogo AI helps me acquire and manage leads more effectively. With CRM Leads, we dont just gain leads , we also get database that supports our sales development.”',
  },
  {
    image: '/ronaldo.jpg',
    name: 'Cristiano Ronaldo',
    role: 'Football Player',
    star: 5,
    review:
      '“Velogo AI helps me acquire and manage leads more effectively. With CRM Leads, we dont just gain leads , we also get database that supports our sales development.”',
  },
  {
    image: '/ronaldo.jpg',
    name: 'Cristiano Ronaldo',
    role: 'Football Player',
    star: 5,
    review:
      '“Velogo AI helps me acquire and manage leads more effectively. With CRM Leads, we dont just gain leads , we also get database that supports our sales development.”',
  },
  {
    image: '/ronaldo.jpg',
    name: 'Cristiano Ronaldo',
    role: 'Football Player',
    star: 5,
    review:
      '“Velogo AI helps me acquire and manage leads more effectively. With CRM Leads, we dont just gain leads , we also get database that supports our sales development.”',
  },
];

const FAQData = [
  {
    question: 'How does Velogo.AI support property agents?',
    answer:
      'Velogo.AI is currently in a closed Beta program. You can request an invite by joining our waiting list. We’re gradually onboarding new users to ensure a great experience for everyone. During the Beta, all core features are free to use.',
  },
  {
    question: 'Can individuals use Velogo too?',
    answer:
      'Velogo.AI is currently in a closed Beta program. You can request an invite by joining our waiting list. We’re gradually onboarding new users to ensure a great experience for everyone. During the Beta, all core features are free to use.',
  },
  {
    question: 'How do I join the Velogo AI, and what does it cost?',
    answer:
      'Velogo.AI is currently in a closed Beta program. You can request an invite by joining our waiting list. We’re gradually onboarding new users to ensure a great experience for everyone. During the Beta, all core features are free to use.',
  },
  {
    question: 'Is my data safe with Velogo?',
    answer:
      'Velogo.AI is currently in a closed Beta program. You can request an invite by joining our waiting list. We’re gradually onboarding new users to ensure a great experience for everyone. During the Beta, all core features are free to use.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
    },
  },
};

export default function Home() {
  return (
    <>
      <section
        id="jumbotron"
        className="relative w-full min-h-screen lg:px-30 pb-30 pt-56 px-10"
      >
        <Image
          src="/bg-jumbotron.png"
          fill
          priority
          quality={75}
          style={{ objectFit: 'cover' }}
          alt="jumbotron image"
        />
        <div className="absolute inset-0 dark:bg-[#121212]/50 bg-[#F2F2F2]/50" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative z-10 mb-14 flex flex-col space-y-4 items-center justify-center h-full text-white"
            variants={itemVariants}
          >
            <div className="flex justify-between space-x-2.5 items-center py-2 px-4 rounded-4xl backdrop-blur-xl bg-gradient-to-r from-cyan-400/10 via-cyan-400/5 to-cyan-400/10 border border-gray-400">
              <PiStarFourThin className="text-custom-primary-black md:size-5 size-4" />
              <p className="text-custom-primary-black/80 md:text-base text-sm">
                The Future of Real Estate is Here
              </p>
            </div>
            <h1 className="text-custom-primary-black font-bold lg:text-5xl md:text-4xl text-2xl text-center leading-tight">
              Your Most Powerful AI Tool to Grow Smarter,{' '}
              <br className="lg:block hidden" /> Faster, and Bigger
            </h1>
            <h2 className="text-custom-primary-black font-bold md:text-xl text-base text-center">
              AI-powered Real Estate tools designed to manage end-end journey
              from finding relevant properties and handling leads to analyzing
              market trends and driving conversions.
            </h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <PropertySearchForm />
          </motion.div>
        </motion.div>
      </section>
      <section id="early-access" className="relative w-full h-full py-28">
        <Image
          src="/world-map.png"
          fill
          priority
          quality={75}
          style={{ objectFit: 'none' }}
          sizes="(min-width: 768px) 838px, 90%"
          className="dark:opacity-30"
          alt="world map"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="z-20 relative w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="text-custom-primary-black font-bold lg:text-5xl md:text-3xl text-2xl text-center leading-tight"
          >
            Get Early Access
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex md:flex-row justify-center flex-col gap-10 my-16"
          >
            <QuantityItem
              withPlus
              value={100}
              description="Agents on the Whitelist"
            />
            <QuantityItem value={4} description="Main Features" />
            <QuantityItem withPlus value={3000} description="Active Listings" />
            <QuantityItem value={2} description="Access Channels" />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-center md:text-2xl text-base text-custom-primary-black">
              Ready to get started with Velogo?
            </p>
            <div className="flex md:flex-row flex-col gap-4">
              <Button className="bg-custom-primary-blue hover:bg-custom-primary-blue/80 text-white h-14 px-20 py-4 rounded-2xl text-base">
                Join the Waiting List
              </Button>
              <Button className="bg-white w-auto border gap-2.5 border-green-600 text-green-600 h-14 px-6 py-4 rounded-2xl text-base">
                <Image
                  src="/green-whatsapp.svg"
                  width={24}
                  height={24}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="green whatsapp logo"
                />
                Connect WhatsApp
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section
        id="main-feature"
        className="xl:px-20 px-10 lg:py-30 md:py-16 py-30"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="p-10 mb-20 rounded-4xl bg-gradient-to-r/60 border border-gray-200 from-[#E6EFFF] to-[#F9F9F9] dark:bg-gradient-to-bl dark:from-[#2BFFFF]/10 dark:via-[#2BFFFF]/2 dark:to-[#2BFFFF]/6"
        >
          <motion.p
            variants={itemVariants}
            className="text-center text-custom-secondary-hover lg:text-2xl text-base"
          >
            Powered by Velogo AI
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-center text-custom-primary-black lg:text-5xl md:text-3xl text-xl font-bold"
          >
            Main Feature
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-20 md:gap-8 gap-6"
          >
            {FeatureData.map((data, index) => (
              <FeatureItem
                key={index}
                title={data.name}
                description={data.highlight}
                Icon={data.icon}
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:p-10 flex flex-col gap-14"
        >
          {FeatureData.map((data, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureDetailItem
                isReverse={data.isReverse}
                title={data.name}
                description={data.description}
                image={data.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section
        id="why-choose-velogo"
        className="relative lg:p-30 p-10 bg-gradient-to-br from-[#2B78C5] to-[#0861BB] dark:bg-none dark:bg-custom-primary-white"
      >
        <Image
          src={'/velogo-blur.png'}
          width={351}
          height={351}
          className="absolute dark:hidden -top-32 left-0"
          alt="velogo blur"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="lg:text-5xl text-2xl  font-bold text-center text-white"
          >
            Why Choose Velogo.AI?
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="lg:text-2xl text-base mt-2 text-white text-center"
          >
            Unlock four powerful advantages you won&apos;t find elsewhere
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="relative z-20 grid md:grid-cols-2 grid-cols-1 gap-10 mt-20"
          >
            {WhyChooseVelogoData.map((data, index) => (
              <WhyChooseItem key={index} {...data} />
            ))}
          </motion.div>
        </motion.div>
        <Image
          src={'/velogo-blur.png'}
          width={351}
          height={351}
          className="absolute dark:hidden -bottom-40 right-0"
          alt="velogo blur"
        />
        <div className="dark:block w-full left-0 right-0  mx-auto h-[630px] absolute">
          <Image
            src={'/blue-light-bg.png'}
            fill
            style={{ objectFit: 'cover' }}
            alt="blue light bg"
          />
        </div>
      </section>
      <section
        id="how-it-works"
        className="relative w-full mx-auto lg:py-24 py-20 bg-custom-primary-white z-20 lg:px-30 px-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center flex flex-col gap-2"
          >
            <p className="text-custom-secondary-hover lg:text-2xl text-base">
              How It Works
            </p>
            <h3 className="text-custom-primary-black lg:text-5xl md:text-3xl text-2xl font-bold">
              Register Velogo in 3 Steps
            </h3>
            <p className="lg:text-2xl text-base text-custom-primary-black">
              Velogo is in Beta Development. Access is provided via waiting list
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex lg:flex-row mt-20 flex-col justify-center items-center lg:gap-16 gap-8"
          >
            <HowToItem
              countStep="01"
              title="Join the Waiting List"
              description="Request a Beta invite to be whitelisted"
            />
            <IoIosArrowRoundDown className="size-10 lg:-rotate-90" />
            <HowToItem
              countStep="02"
              title="Velogo Will Notify You"
              description="We'll notify you when your access is ready"
            />
            <IoIosArrowRoundDown className="size-10 lg:-rotate-90" />
            <HowToItem
              countStep="03"
              title="Start Using Velogo"
              description="Use AI search, smart posting, CRM leads, and market analytics."
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center mt-20"
          >
            <Button className="font-semibold text-white text-base h-14 lg:w-80 w-64 bg-custom-primary-blue hover:bg-custom-primary-blue/80 rounded-2xl">
              Join Waiting List Now
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <section id="testimonials" className="py-24 xl:px-30 px-10">
        <div className="p-10 bg-gradient-to-r dark:bg-gradient-to-bl border border-gray-300 rounded-4xl from-[#E6EFFF] to-[#F9F9F9] dark:from-[#2BFFFF]/10 dark:via-[#2BFFFF]/2 dark:to-[#2BFFFF]/6">
          <p className="text-center text-custom-secondary-hover lg:text-2xl text-base">
            Testimonials
          </p>
          <h4 className="text-custom-primary-black text-center lg:text-5xl md:text-3xl text-2xl font-bold">
            What Do They Say About Velogo AI?
          </h4>
          <Carousel className="pt-20">
            <CarouselContent>
              {TestimonialsData.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/3 md:basis-1/2 basis-full"
                >
                  <TestimonialItem {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <section className="relative flex items-center gap-6 justify-center mt-6">
              <CarouselPrevious className="!static !translate-none bg-transparent border border-gray-300 dark:border-cyan-300 h-12 w-12 rounded-2xl flex items-center justify-center" />
              <CarouselNext className="!static !translate-none bg-transparent border border-gray-300 dark:border-cyan-300 h-12 w-12 rounded-2xl flex items-center justify-center" />
            </section>
          </Carousel>
        </div>
      </section>
      <section id="faq" className="md:p-30 px-10 z-20 overflow-hidden py-30">
        <div className="flex flex-col gap-1">
          <p className="text-center text-custom-secondary-hover lg:text-2xl text-base">
            FAQ
          </p>
          <h4 className="text-custom-primary-black text-center lg:text-5xl md:text-3xl text-2xl font-bold">
            Frequently Asked Question
          </h4>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue={FAQData[0].question}
          className="flex flex-col my-10 gap-6"
        >
          {FAQData.map((faq) => (
            <AccordionItem
              className="h-full bg-background rounded-xl shadow-xl ring-1 ring-gray-400 dark:ring-cyan-200 "
              key={faq.question}
              value={faq.question}
            >
              <AccordionTrigger className="h-24 p-8 text-custom-primary-black md:text-base text-sm flex items-center">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex text-custom-secondary-surface md:text-base text-sm px-8 pb-8 flex-col gap-4">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="bg-custom-primary-blue rounded-2xl text-white md:w-72 w-full h-14">
          Submit another question
        </Button>
      </section>
      <section
        id="banner"
        className="flex flex-col space-y-14 md:p-30 px-10 py-30  items-center"
      >
        <h2 className="text-custom-primary-black text-center lg:text-5xl md:text-3xl text-2xl font-bold">
          Ready to Elevate Your Business with AI?
        </h2>
        <Card className="md:w-[662px] bg-custom-primary-white w-full gap-0 p-0 overflow-hidden">
          <CardHeader className="p-0">
            <VisuallyHidden>
              <CardTitle>Banner Title</CardTitle>
            </VisuallyHidden>
            <CardDescription className="bg-custom-primary-blue text-center text-white text-base font-semibold py-10 px-8">
              Don&apos;t get left behind. Join the Velogo waiting list today and
              be among the first to experience the future of real estate.
            </CardDescription>
          </CardHeader>
          <CardContent className="py-10 px-8 m-0 flex flex-col gap-8 items-center ">
            <Button className="bg-custom-primary-blue hover:bg-custom-primary-blue/80 text-white h-14 w-36 rounded-2xl">
              Join Now
            </Button>
            <p className="text-custom-secondary-hover text-base">
              Join the 1000+ others that have signed up
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
