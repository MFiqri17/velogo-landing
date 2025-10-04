import { IconType } from 'react-icons/lib';

interface WhyChooseItemProps {
  Icon: IconType;
  title: string;
  description: string;
}

const WhyChooseItem: React.FC<WhyChooseItemProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 p-8 rounded-2xl  dark:border dark:border-cyan-400 bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-[#0861BB]/3 dark:via-[#0861BB]/5 dark:to-[#0861BB]/7">
      <div className="flex items-center gap-2">
        <Icon className="size-7 text-custom-primary-blue" />
        <h4 className="text-custom-primary-black font-semibold md:text-xl text-base">
          {title}
        </h4>
      </div>
      <p className="text-custom-primary-black text-sm">{description}</p>
    </div>
  );
};

export default WhyChooseItem;
