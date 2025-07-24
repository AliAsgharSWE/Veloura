'use client';
import React, { useState } from 'react';
import { contactFormData } from './data';
import InputField from '@/components/common/InputField/InputField';
import { ContactFormData } from './types';
import Button from '@/components/common/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    contactFormData.fields.forEach(field => {
      if (field.required && !formData[field.name as keyof ContactFormData]) {
        newErrors[field.name as keyof ContactFormData] = `${field.placeholder} is required`;
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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
    
    console.log('Contact Form Submitted:', formData);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className=" p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-subheading mb-4">
              {contactFormData.title}
            </h1>
            <p className="text-ternary text-lg leading-relaxed max-w-2xl mx-auto">
              {contactFormData.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactFormData.fields.slice(0, 2).map((field) => (
                <InputField
                  key={field.id}
                  field={field}
                  value={formData[field.name as keyof ContactFormData]}
                  onChange={handleInputChange}
                  error={errors[field.name as keyof ContactFormData]}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10" >
              {contactFormData.fields.slice(2, 4).map((field) => (
                <InputField
                  key={field.id}
                  field={field}
                  value={formData[field.name as keyof ContactFormData]}
                  onChange={handleInputChange}
                  error={errors[field.name as keyof ContactFormData]}
                />
              ))}
            </div>

            {contactFormData.fields.slice(4).map((field) => (
              <InputField
                key={field.id}
                field={field}
                value={formData[field.name as keyof ContactFormData]}
                onChange={handleInputChange}
                error={errors[field.name as keyof ContactFormData]}
              />
            ))}

            <div className=" max-w-md mx-auto">
              <Button
              variant='black'
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-md font-medium text-lg transition-all ${
                  contactFormData.submitButton.className
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'SENDING...' : contactFormData.submitButton.text}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
