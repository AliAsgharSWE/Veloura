
import { ProductSpecification } from "./types";

interface AdditionalInfoTabProps {
  info: ProductSpecification;
}

export const AdditionalInfoTab: React.FC<AdditionalInfoTabProps> = ({ info }) => {
  return (
    <div className="py-8">
      <div className="space-y-4">
        <div className="flex items-start">
          <span className=" font-medium w-32 flex-shrink-0">Weight:</span>
          <span className="text-ternary">{info.weight}</span>
        </div>
        
        <div className="flex items-start">
          <span className=" font-medium w-32 flex-shrink-0">Dimensions:</span>
          <span className="text-ternary">{info.dimensions}</span>
        </div>
        
        <div className="flex items-start">
          <span className=" font-medium w-32 flex-shrink-0">Colours:</span>
          <span className="text-ternary">{info.colours.join(', ')}</span>
        </div>
        
        <div className="flex items-start">
          <span className="font-medium w-32 flex-shrink-0">Material:</span>
          <span className="text-ternary">{info.material}</span>
        </div>
      </div>
    </div>
  );
};