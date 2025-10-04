import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface TestimonialItemProps {
  image: string;
  name: string;
  role: string;
  star: number;
  review: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  image,
  name,
  role,
  star,
  review,
}) => {
  return (
    <div className="flex rounded-2xl flex-col gap-6 p-8 shadow-md border border-gray-300 dark:border-cyan-400  bg-gradient-to-bl dark:bg-gradient-to-b from-white/3 via-[#118EEA]/2 to-white/6 dark:from-[#0861BB]/3 dark:via-[#0861BB]/5 dark:to-[#0861BB]/7">
      <section className="flex md:flex-row flex-col md:items-center gap-6">
        <Image
          src={image}
          width={78}
          height={78}
          alt={name + '- image'}
          className="w-[78px] h-[78px] object-cover rounded-full"
        />
        <div>
          <p className="font-bold text-custom-primary-black text-base">
            {name}
          </p>
          <p className="my-1 text-custom-primary-black text-base">{role}</p>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: star }).map((_, i) => (
              <FaStar key={i} className="text-custom-secondary-orange size-5" />
            ))}
          </div>
        </div>
      </section>
      <p className="text-custom-primary-black text-base">{review}</p>
    </div>
  );
};

export default TestimonialItem;
