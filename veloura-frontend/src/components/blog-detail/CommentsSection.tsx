import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { Comment, FormData, FormErrors } from '@/src/containers/blog-detail/types';
import InputField from '../common/InputField/InputField';
import { formFields } from '@/src/containers/blog-detail/data';
import Button from '../common/Button';

interface CommentsSectionProps {
  comments: Comment[];
  onAddComment?: (comment: Omit<Comment, 'id'>) => void;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments, onAddComment }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    comment: '',
    saveInfo: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commentsData, setCommentsData] = useState<Comment[]>(comments);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, saveInfo: e.target.checked }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.comment.trim()) {
      newErrors.comment = 'Comment is required';
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid URL (starting with http:// or https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newComment: Comment = {
        id: Date.now().toString(),
        author: formData.name,
        avatar: '/blogs/avatar1.png', 
        date: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        content: formData.comment,
        replies: [],
      };

      // Add to local state
      setCommentsData(prev => [...prev, newComment]);

      if (onAddComment) {
        onAddComment(newComment);
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        website: '',
        comment: '',
        saveInfo: false,
      });

    } catch (error) {
      alert('Error submitting comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addReplyToComment = (comments: Comment[], parentId: string, reply: Comment): Comment[] => {
    return comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies ? [...comment.replies, reply] : [reply]
        };
      }
      if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToComment(comment.replies, parentId, reply)
        };
      }
      return comment;
    });
  };

  const handleReply = (commentId: string, replyContent: string) => {
    const newReply: Comment = {
      id: Date.now().toString(),
      author: 'Current User', // You would get this from auth context
      avatar: '/blogs/avatar1.png',
      date: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      content: replyContent,
      replies: [],
    };

    setCommentsData(prev => addReplyToComment(prev, commentId, newReply));
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Comment Form */}
      <div className="mb-12">
        <h3 className="text-2xl font-light mb-8">Leave a Reply</h3>
        
        <p className="text-body text-ternary mb-8">
          Your email address will not be published. Required fields are marked *
        </p>

        <div onSubmit={handleSubmit} className="space-y-6">
          {formFields.map((field) => (
            <InputField
              key={field.id}
              field={field}
              value={formData[field.name as keyof FormData] as string}
              onChange={handleInputChange}
              error={errors[field.name]}
            />
          ))}

          {/* Save Info Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="saveInfo"
              checked={formData.saveInfo}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
            />
            <label htmlFor="saveInfo" className="text-body text-ternary">
              Save my name, email, and website in this browser for the next time I comment
            </label>
          </div>

          {/* Submit Button */}
          <Button
            variant='black'
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'POSTING...' : 'POST COMMENT'}
          </Button>
        </div>
      </div>

      {/* Comments List */}
      <div>
        <h3 className="text-2xl font-light mb-8">
          Comments({commentsData.length})
        </h3>

        {commentsData.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <div className="space-y-0">
            {commentsData.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onReply={handleReply}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;