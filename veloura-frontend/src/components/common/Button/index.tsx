import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { ButtonProps } from './types';

const buttonStyles = {
  base: `
    font-medium 
    transition-all 
    duration-200 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    cursor-pointer 
    disabled:opacity-50 
    disabled:cursor-not-allowed
    tracking-wider
    uppercase
    text-sm
  `.replace(/\s+/g, ' ').trim(),

  variants: {
    primary: `
      bg-white 
      text-black 
      border 
      border-black 
      hover:bg-gray-50 
      focus:ring-gray-500
    `.replace(/\s+/g, ' ').trim(),
    
    secondary: `
      bg-transparent 
      text-black 
      border 
      border-gray-300 
      hover:bg-gray-50 
      focus:ring-gray-400
    `.replace(/\s+/g, ' ').trim(),
    
    outline: `
      bg-transparent 
      text-black 
      border 
      border-black 
      hover:bg-black 
      hover:text-white 
      focus:ring-gray-500
    `.replace(/\s+/g, ' ').trim(),
    
    black: `
      bg-black 
      text-white 
      border 
      border-black 
      hover:bg-gray-800 
      focus:ring-gray-500
    `.replace(/\s+/g, ' ').trim(),
    
    white: `
      bg-white 
      text-black 
      border 
      border-white 
      hover:bg-gray-100 
      focus:ring-gray-300
    `.replace(/\s+/g, ' ').trim(),
    
    custom: ''
  },

  sizes: {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
    full: 'w-full px-6 py-3 text-sm'
  }
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    children, 
    onClick, 
    loading = false,
    disabled = false,
    fullWidth = false,
    ...props 
  }, ref) => {
    
    const combinedStyles = [
      buttonStyles.base,
      buttonStyles.variants[variant],
      size === 'full' || fullWidth ? buttonStyles.sizes.full : buttonStyles.sizes[size],
      loading ? 'opacity-75 cursor-wait' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={combinedStyles}
        onClick={onClick}
        disabled={disabled || loading}
        style={{ 
          fontFamily: 'var(--font-poppins, "Poppins", sans-serif)'
        }}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {loading && (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          {children}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;