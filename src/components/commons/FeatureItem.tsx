import { type IconType } from 'react-icons/lib';

interface FeatureItemProps {
  Icon: IconType;
  title: string;
  description: string;
}

const FeatureItem = ({ Icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-1 shadow-lg flex-col space-y-6 rounded-2xl bg-gradient-to-bl dark:bg-gradient-to-b from-white/3 via-[#118EEA]/2 to-white/6 dark:from-[#0861BB]/3 dark:via-[#0861BB]/5 dark:to-[#0861BB]/7 border border-gray-300 dark:border-cyan-300 p-8">
      <div className="flex mx-auto justify-center items-center w-14 h-14 bg-custom-primary-blue border border-gray-500 rounded-2xl">
        <Icon className="size-6 text-white" />
      </div>
      <h2 className="font-semibold text-center text-xl text-custom-primary-black">
        {title}
      </h2>
      <p className="text-base text-center text-custom-primary-black">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
