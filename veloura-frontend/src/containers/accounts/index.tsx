'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  signInFormData, 
  registerFormData, 
  authTabs, 
  authConfig 
} from './data';
import { AuthFormData, TabData } from './types';
import InputField from '@/components/common/InputField/InputField';
import Button from '@/components/common/Button';

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('signin');
  const [tabs, setTabs] = useState<TabData[]>(authTabs);
  
  const [signInData, setSignInData] = useState<AuthFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [registerData, setRegisterData] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setTabs(prev => 
      prev.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    );
    setErrors({});
  };

  const handleInputChange = (name: string, value: string) => {
    if (activeTab === 'signin') {
      setSignInData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setRegisterData((prev: any) => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRememberMeChange = (checked: boolean) => {
    setSignInData(prev => ({
      ...prev,
      rememberMe: checked
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: any = {};
    let currentFormData;
    let currentFormConfig;

    if (activeTab === 'signin') {
      currentFormData = signInData;
      currentFormConfig = signInFormData;
    } else {
      currentFormData = registerData;
      currentFormConfig = registerFormData;
    }

    currentFormConfig.fields.forEach(field => {
      if (field.required && !currentFormData[field.name]) {
        newErrors[field.name] = `${field.placeholder} is required`;
      }
    });

    // Email validation
    if (currentFormData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentFormData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (activeTab === 'register') {
      if (registerData.password !== registerData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let submitData;
    let formType;
    
    if (activeTab === 'signin') {
      submitData = signInData;
      formType = 'Sign In';
    } else {
      submitData = registerData;
      formType = 'Register';
    }
    
    console.log(`${formType} Form Submitted:`, submitData);
    
    setIsSubmitting(false);
  };

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

  const getCurrentFormData = () => {
    if (activeTab === 'signin') {
      return { data: signInData, config: signInFormData };
    } else {
      return { data: registerData, config: registerFormData };
    }
  };

  const { data: currentData, config: currentConfig } = getCurrentFormData();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className=" p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-subheading mb-8">
              {authConfig.title}
            </h1>
            
            <div className="flex rounded-lg bg-gray-100 p-1 mt-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex-1 py-3 px-4 text-body font-medium rounded-md transition-all cursor-pointer ${
                    tab.isActive
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-ternary hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentConfig.fields.map((field) => (
              <InputField
                key={field.id}
                field={field}
                value={currentData[field.name as keyof typeof currentData] || ''}
                onChange={handleInputChange}
                error={errors[field.name]}
              />
            ))}

            {activeTab === 'signin' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={signInData.rememberMe}
                    onChange={(e) => handleRememberMeChange(e.target.checked)}
                    className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {authConfig.rememberMeText}
                  </span>
                </label>
              </div>
            )}

            <div className="pt-4">
              <Button
                variant='black'
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-md font-medium text-lg transition-all ${
                  currentConfig.submitButton.className
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'PROCESSING...' : currentConfig.submitButton.text}
              </Button>
            </div>
          </form>

          {activeTab === 'signin' && (
            <div className="mt-6 text-center">
              <button
                onClick={handleForgotPassword}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {authConfig.forgotPasswordLink}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
