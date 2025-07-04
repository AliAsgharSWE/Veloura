interface DescriptionTabProps {
  description: string;
}

export const DescriptionTab: React.FC<DescriptionTabProps> = ({ description }) => {
  return (
    <div className="py-8">
      <p className="text-ternary text-body leading-relaxed">
        {description}
      </p>
    </div>
  );
};