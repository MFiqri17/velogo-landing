import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FeatureDetailItemProps {
  title: string;
  description: string;
  image: string;
  isReverse?: boolean;
}

const FeatureDetailItem: React.FC<FeatureDetailItemProps> = ({
  title,
  description,
  image,
  isReverse = false,
}) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-14 gap-10 rounded-4xl border border-[#E0EFFF] dark:border-gray-300 bg-[#E0EFFF] dark:bg-transparent dark:bg-gradient-to-bl dark:from-[#2BFFFF]/10 dark:via-[#2BFFFF]/2 dark:to-[#2BFFFF]/6 items-center justify-between w-full md:p-10 p-4">
      <div
        className={cn(
          'md:w-5/12 md:text-left text-center w-full md:order-1 order-2',
          isReverse && 'md:order-2'
        )}
      >
        <h2 className="lg:text-3xl text-2xl font-bold text-custom-primary-black">
          {title}
        </h2>
        <p className="lg:text-lg text-base text-custom-secondary-surface">
          {description}
        </p>
      </div>
      <div
        className={cn(
          'relative md:order-2 order-1 border-8 border-custom-primary-blue overflow-hidden rounded-4xl md:w-7/12 w-full lg:h-[390px] md:h-[289px] h-[235px]',
          isReverse && 'md:order-1'
        )}
      >
        <Image
          src={image}
          fill
          style={{ objectFit: 'fill' }}
          alt={title + 'image'}
        />
      </div>
    </div>
  );
};

export default FeatureDetailItem;
