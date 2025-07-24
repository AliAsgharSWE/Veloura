import React, { useState } from 'react';
import { Comment } from '@/containers/blog-detail/types';
import Image from 'next/image';

interface CommentItemProps {
  comment: Comment;
  onReply?: (commentId: string, replyContent: string) => void;
  depth?: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onReply, depth = 0 }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyContent.trim()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (onReply) {
        onReply(comment.id, replyContent);
      }
      
      setReplyContent('');
      setShowReplyForm(false);
    } catch (error) {
      console.error('Error submitting reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm);
    if (showReplyForm) {
      setReplyContent('');
    }
  };

  return (
    <div className={`flex space-x-4 py-6 ${depth > 0 ? 'ml-8 border-l-2 border-gray-100 pl-6' : ''} border-b border-gray-100 last:border-b-0`}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={comment.avatar}
          alt={comment.author}
            width={70}
            height={70}
          className="w-[70px] h-[70px] rounded-lg object-cover bg-gray-200"
        />
      </div>

      {/* Comment Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <h4 className="font-medium text-gray-900">{comment.author}</h4>
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>
          
          <button
            onClick={handleReplyClick}
            className="text-sm font-semibold text-gray-600 hover:text-gray-700 transition-colors duration-200 flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            <span>{showReplyForm ? 'Cancel' : 'Reply'}</span>
          </button>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">{comment.content}</p>

        {/* Reply Form */}
        {showReplyForm && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="space-y-3">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder={`Reply to ${comment.author}...`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
                required
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleReplySubmit}
                  disabled={isSubmitting || !replyContent.trim()}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Posting...' : 'Post Reply'}
                </button>
                <button
                  onClick={() => setShowReplyForm(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4">
            {comment.replies.map((reply) => (
              <CommentItem 
                key={reply.id} 
                comment={reply} 
                onReply={onReply} 
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
