

import React from 'react';
const ToggleSwitch: React.FC<{ 
  checked: boolean; 
  onChange: (checked: boolean) => void; 
  label: string;
}> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="flex items-center justify-between w-full">
              <span className="ml-3 text-body text-gray-700">{label}</span>

        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-11 h-6 rounded-full transition-colors duration-200 ${
            checked ? 'bg-[#A18A68]' : 'bg-gray-500'
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
              checked ? 'translate-x-6' : 'translate-x-0.5'
            } mt-0.5`}
          />
        </div>
      </div>
    </label>
  );
};

export default ToggleSwitch;