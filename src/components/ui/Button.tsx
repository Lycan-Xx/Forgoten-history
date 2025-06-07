import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses = 'btn focus:outline-none inline-flex items-center justify-center font-medium transition-all duration-300 ease-custom rounded-md';
  
  const variantClasses = {
    primary: 'bg-copper text-white hover:bg-copper-light focus:ring-2 focus:ring-copper-light focus:ring-opacity-50',
    outline: 'border border-copper text-copper hover:bg-copper hover:text-white focus:ring-2 focus:ring-copper focus:ring-opacity-50',
    ghost: 'text-copper hover:bg-copper-light/10 focus:ring-2 focus:ring-copper focus:ring-opacity-30'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;