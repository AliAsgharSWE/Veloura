'use client'
import React, { useState } from "react";
import Image from "next/image";
import { BlogPost, Comment } from "./types";
import CommentsSection from "@/src/components/blog-detail/CommentsSection";

interface BlogDetailProps {
  blog: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
    const [comments, setComments] = useState<Comment[]>(blog.comments);

  const handleAddComment = (newComment: Omit<Comment, 'id'>) => {
    const commentWithId: Comment = {
      ...newComment,
      id: Date.now().toString(),
    };
    
    setComments(prev => [...prev, commentWithId]);
  };
  return (
    <div className="px-6 py-12">
      <article>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-normal mb-2">{blog.title}</h1>
          <p className="text-sm text-gray-600">
            by {blog.author} - {blog.date}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            className="w-full h-auto rounded-lg"
            width={800}
            height={400}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="mb-8">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Top Trends Section */}
          <div className="mb-8">
            <div className="mb-6">
              <Image
                src={blog.imageDetail}
                alt={blog.imageDetailAlt}
                className="w-full h-auto rounded-lg"
                width={700}
                height={200}
              />
            </div>

            <h3 className="text-xl font-normal mb-4">Top trends</h3>

            <ul className="space-y-2 mb-6">
              {blog.topTrendsList.map((trend, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{trend}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 flex justify-between items-center text-subheading text-gray-600">
            <div>
              <span className="font-medium">Tags</span>
              <div className="border border-gray-600 w-12 inline-block mx-4"></div>
              <span>{blog.tags.join(", ")}</span>
            </div>

            <div className="flex items-center">
              <span className="font-medium mr-2">Share</span>
              <div className="border border-gray-600 w-12 inline-block mx-2"></div>
              <div className="flex space-x-4">
                {blog.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="hover:opacity-70 transition-opacity"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </article>
         <CommentsSection
        comments={comments}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default BlogDetail;
