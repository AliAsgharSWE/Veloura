import React from 'react';
import { PrivacyPolicyProps } from './types';
import { privacyPolicyData } from './data';

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ 
  data = privacyPolicyData, 
  className = "" 
}) => {
  return (
    <div className={`max-w-4xl mx-auto py-18 px-6 mb-12 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-900 mb-4">
          {data.title}
        </h1>
        {data.lastUpdated && (
          <p className="text-sm text-gray-500">
            {data.lastUpdated}
          </p>
        )}
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {data.sections.map((section) => (
          <section key={section.id} className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              {section.title}
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-base leading-7">
                {section.content}
              </p>
              
              {section.items && section.items.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-gray-900 rounded-full mt-3"></span>
                      <span className="text-base leading-7 text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;