// ProductTabs/index.tsx
'use client';

import { useState } from 'react';
import { ProductTabsProps, TabType } from './types';
import { DescriptionTab } from './DescriptionTab';
import { AdditionalInfoTab } from './AdditionalInfoTab';
import { ReviewsTab } from './ReviewsTab';

export const ProductTabs: React.FC<ProductTabsProps> = ({ data, productName }) => {
  const [activeTab, setActiveTab] = useState<TabType>('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional information' },
    { id: 'reviews', label: `Reviews(${data.reviewCount})` }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <DescriptionTab description={data.description} />;
      case 'additional':
        return <AdditionalInfoTab info={data.additionalInfo} />;
      case 'reviews':
        return (
          <ReviewsTab
            reviews={data.reviews}
            reviewCount={data.reviewCount}
            productName={productName}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white mt-14">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-black text-gray-900 text-subheading'
                  : 'border-transparent text-ternary hover:ternary hover:border-gray-300 text-subheading'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};