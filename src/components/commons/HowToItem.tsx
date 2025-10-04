interface HowToItemProps {
  countStep: string;
  title: string;
  description: string;
}

const HowToItem: React.FC<HowToItemProps> = ({
  countStep,
  title,
  description,
}) => {
  return (
    <div className="flex z-20 max-w-64 w-full flex-col gap-4">
      <h2 className="text-9xl text-center text-[#E5E7EB] font-extralight">
        {countStep}
      </h2>
      <div className="text-center flex flex-col gap-6">
        <h3 className="lg:text-2xl text-xl text-custom-primary-black">
          {title}
        </h3>
        <p className="lg:text-base text-sm text-custom-secondary-surface">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowToItem;
