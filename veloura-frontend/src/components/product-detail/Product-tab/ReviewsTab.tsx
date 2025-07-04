'use client';

import { useState } from 'react';
import { Review, ReviewFormData } from './types';
import Button from '../../common/Button';

interface ReviewsTabProps {
  reviews: Review[];
  reviewCount: number;
  productName: string;
}

export const ReviewsTab: React.FC<ReviewsTabProps> = ({ 
  reviews, 
  reviewCount, 
  productName 
}) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    rating: 0,
    comment: '',
    saveInfo: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
  };

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, index) => (
      <button
        key={index}
        type={interactive ? 'button' : undefined}
        onClick={interactive ? () => handleRatingClick(index + 1) : undefined}
        className={`${
          index < rating ? 'text-black' : 'text-gray-300'
        } ${interactive ? 'hover:text-black cursor-pointer' : ''} text-lg`}
      >
        ★
      </button>
    ));
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reviews List */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {reviewCount} Reviews for {productName}
          </h3>
          
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex items-start gap-4 mb-2">
                  <h4 className="font-medium text-gray-900">{review.author}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Form */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">Add a Review</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-sm text-gray-600">
              Your Email Address Will Not Be Published. Required Fields Are Marked *
            </p>
            
            <div>
              <label htmlFor="comment" className="block text-sm text-gray-700 mb-2">
                Your Review*
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={formData.comment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Enter your name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Enter your Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
              />
              <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Your Rating*
              </label>
              <div className="flex">
                {renderStars(formData.rating, true)}
              </div>
            </div>
            
            <Button
            variant='black'
              type="submit"
              className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-medium"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};