import React from 'react';
import { InputField as InputFieldType } from './types';

interface InputFieldProps {
  field: InputFieldType;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ field, value, onChange, error }) => {
  const baseClasses = "w-full p-4 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-400 transition-all duration-200 text-gray-700 placeholder-gray-400";
  const errorClasses = error ? "border-red-500 focus:border-red-500" : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(field.name, e.target.value);
  };

  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            value={value}
            onChange={handleChange}
            required={field.required}
            rows={6}
            className={`${baseClasses} ${errorClasses} resize-none`}
          />
        );
      
      case 'select':
        return (
          <select
            id={field.id}
            name={field.name}
            value={value}
            onChange={handleChange}
            required={field.required}
            className={`${baseClasses} ${errorClasses} appearance-none bg-white cursor-pointer`}
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={value}
            onChange={handleChange}
            required={field.required}
            className={`${baseClasses} ${errorClasses}`}
          />
        );
    }
  };

  return (
    <div className="relative">
      {renderInput()}
      {field.type === 'select' && (
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default InputField;