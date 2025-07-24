'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/common/InputField/InputField';
import Button from '@/components/common/Button';

const ResetPasswordPage: React.FC = () => {
  const router = useRouter();
  const [resetData, setResetData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  type InputFieldType = {
    id: string;
    name: string;
    type: 'select' | 'textarea' | 'text' | 'email' | 'password';
    placeholder: string;
    required: boolean;
  };

  const resetPasswordFields: InputFieldType[] = [
    {
      id: 'newPassword',
      name: 'newPassword',
      type: 'password',
      placeholder: 'New Password',
      required: true
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm New Password',
      required: true
    }
  ];

  const handleInputChange = (name: string, value: string) => {
    setResetData(prev => ({
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

    resetPasswordFields.forEach(field => {
      if (field.required && !resetData[field.name as keyof typeof resetData]) {
        newErrors[field.name] = `${field.placeholder} is required`;
      }
    });

    // Password validation
    if (resetData.newPassword && resetData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (resetData.newPassword !== resetData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
    
    console.log('Reset Password Form Submitted:', resetData);
    
    // Redirect to sign in page with success message
    router.push('/auth?message=password-reset-success');
    
    setIsSubmitting(false);
  };

  const handleBackToSignIn = () => {
    router.push('/auth');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-subheading mb-8">
              Reset Your Password
            </h1>
            
            <p className="text-gray-600 text-body leading-relaxed mb-6">
              Enter your new password below to reset your account password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {resetPasswordFields.map((field) => (
              <InputField
                key={field.id}
                field={field}
                value={resetData[field.name as keyof typeof resetData] || ''}
                onChange={handleInputChange}
                error={errors[field.name]}
              />
            ))}

            <div className="pt-4">
              <Button
                variant='black'
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-md font-medium text-lg transition-all bg-black text-white hover:bg-gray-800 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'PROCESSING...' : 'RESET PASSWORD'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={handleBackToSignIn}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
