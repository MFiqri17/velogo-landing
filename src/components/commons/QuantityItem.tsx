interface QuantityItemProps {
  value: number;
  description: string;
  withPlus?: boolean;
}

const QuantityItem = ({
  value,
  description,
  withPlus = false,
}: QuantityItemProps) => {
  return (
    <div className="flex text-center flex-col space-y-2">
      <p className="md:leading-[5.1875rem] font-bold lg:text-6xl text-4xl text-custom-primary-black">
        {value}
        {withPlus && '+'}
      </p>
      <p className="lg:text-2xl text-base text-custom-primary-black">
        {description}
      </p>
    </div>
  );
};

export default QuantityItem;
