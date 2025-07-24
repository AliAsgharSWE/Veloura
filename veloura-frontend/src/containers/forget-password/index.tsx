'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/common/InputField/InputField';
import Button from '@/components/common/Button';
import { AuthFormData } from '../accounts/types';
import { forgotPasswordFormData } from '../accounts/data';

const ForgotPasswordPage: React.FC = () => {
  const router = useRouter();
  const [forgotPasswordData, setForgotPasswordData] = useState<AuthFormData>({
    email: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setForgotPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: any = {};

    forgotPasswordFormData.fields.forEach(field => {
      if (field.required && !forgotPasswordData[field.name]) {
        newErrors[field.name] = `${field.placeholder} is required`;
      }
    });

    // Email validation
    if (forgotPasswordData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotPasswordData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Forgot Password Form Submitted:', forgotPasswordData);
    
    // Redirect to reset password page
    router.push('/reset-password');
    
    setIsSubmitting(false);
  };



  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-subheading mb-8">
              {forgotPasswordFormData.title}
            </h1>
            
            <p className="text-gray-600 text-body leading-relaxed mb-6">
              {forgotPasswordFormData.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {forgotPasswordFormData.fields.map((field) => (
              <InputField
                key={field.id}
                field={field}
                value={forgotPasswordData[field.name as keyof typeof forgotPasswordData] || ''}
                onChange={handleInputChange}
                error={errors[field.name]}
              />
            ))}

            <div className="pt-4">
              <Button
                variant='black'
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-md font-medium text-lg transition-all ${
                  forgotPasswordFormData.submitButton.className
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'PROCESSING...' : forgotPasswordFormData.submitButton.text}
              </Button>
            </div>
          </form>

        
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
