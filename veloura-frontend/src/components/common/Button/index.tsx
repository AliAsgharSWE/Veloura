import { forwardRef } from 'react';
import { ButtonProps } from './types';

// Use forwardRef to support ref forwarding (useful for forms, animations, etc.)
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className, children, onClick, ...props }, ref) => {
        // Base styles for all buttons
        const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 cursor-pointer z-10 shadow-[var(--primary-light)]';

        // Variant-specific styles using theme variables directly
        const variantStyles = {
            primary: 'bg-[var(--primary)] text-white not-hover:bg-[var(--primary)] hover:bg-[var(--primary-dark)]',
            secondary: 'bg-transparent border border-[var(--primary)] text-[var(--primary)] not-hover:bg-transparent hover:bg-[var(--secondary)] hover:text-white',
            ternary: 'bg-[var(--pink)] text-white border border-[var(--pink)] hover:bg-white hover:text-[var(--text-pink)]',
            'toggle-active': 'bg-[var(--primary)] text-white',
            'toggle-inactive': 'bg-transparent text-[var(--text-medium)]',
            custom:''
        };

        // Size-specific styles using dynamic utilities
        const sizeStyles = {
            default: 'px-6 py-3',
            sm: variant.includes('toggle') ? 'px-4 py-2' : 'px-4 py-2',
            md: variant.includes('toggle') ? 'px-6 py-2' : 'px-6 py-3',
            lg: variant.includes('toggle') ? 'px-8 py-3' : 'px-8 py-4',
        };

        // Combine all styles
        const combinedStyles = [
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className,
        ].join(' ');

        return (
            <button
                ref={ref}
                className={combinedStyles}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        );
    }
);

// Set display name for better debugging
Button.displayName = 'Button';

export default Button;