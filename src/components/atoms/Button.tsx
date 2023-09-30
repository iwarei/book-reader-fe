import React, { ReactNode } from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  className?: string[];
  addClass?: string[];
  id?: string | undefined;
  name?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const PrimaryButton = ({
  type = 'button',
  text,
  className = [
    'text-white',
    'bg-blue-700',
    'hover:bg-blue-800',
    'focus:outline-none',
    'focus:ring-4',
    'focus:ring-blue-300',
    'font-medium',
    'rounded-full',
    'text-sm',
    'px-5',
    'py-2.5',
    'text-center',
    'mx-2',
    'mb-2',
    'dark:bg-blue-600',
    'dark:hover:bg-blue-700',
    'dark:focus:ring-blue-800',
  ],
  addClass = [],
  id,
  name,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classNames = [...className, ...addClass].join(' ');

  return (
    <button
      type={type}
      className={classNames}
      name={name ?? ''}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const CommonButton = ({
  type = 'button',
  text,
  className = [
    'py-2.5',
    'px-5',
    'mr-2',
    'mb-2',
    'text-sm',
    'font-medium',
    'text-gray-900',
    'focus:outline-none',
    'bg-white',
    'rounded-full border',
    'border-gray-200',
    'hover:bg-gray-100',
    'hover:text-blue-700',
    'focus:z-10',
    'focus:ring-4',
    'focus:ring-gray-200',
  ],
  addClass = [],
  id,
  name,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classNames = [...className, ...addClass].join(' ');
  return (
    <button
      type={type}
      className={classNames}
      name={name ?? ''}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const DangerButton = ({
  type = 'button',
  text,
  className = [
    'text-white',
    'bg-red-700',
    'hover:bg-red-800',
    'focus:outline-none',
    'focus:ring-4',
    'focus:ring-red-300',
    'font-medium',
    'rounded-full',
    'text-sm',
    'px-5',
    'py-2.5',
    'text-center',
    'mr-2',
    'mb-2',
    'dark:bg-red-600',
    'dark:hover:bg-red-700',
    'dark:focus:ring-red-900',
  ],
  addClass = [],
  id,
  name,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classNames = [...className, ...addClass].join(' ');
  return (
    <button
      type={type}
      className={classNames}
      name={name ?? ''}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const LinkButton = ({
  type = 'button',
  text,
  className = [
    'font-medium',
    'text-blue-600',
    'dark:text-blue-500',
    'hover:underline',
    'mx-2',
    'mb-2',
  ],
  addClass = [],
  id,
  name,
  disabled = false,

  onClick,
}: ButtonProps) => {
  const classNames = [...className, ...addClass].join(' ');

  return (
    <button
      type={type}
      className={classNames}
      name={name ?? ''}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// ButtonProps + children
type RoundButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  className?: string[];
  addClass?: string[];
  id?: string;
  name?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

export const RoundButton = ({
  type = 'button',
  text,
  className = [
    'text-blue-700',
    'border border-blue-700',
    'hover:bg-blue-700',
    'hover:text-white',
    'focus:ring-4',
    'focus:outline-none',
    'focus:ring-blue-300',
    'font-medium',
    'rounded-full',
    'text-sm',
    'p-2.5',
    'text-center',
    'inline-flex',
    'items-center',
  ],
  addClass = [],
  id,
  name = '',
  disabled = false,
  children,
  onClick,
}: RoundButtonProps) => {
  const classNames = [...className, ...addClass].join(' ');

  return (
    <button
      type={type}
      className={classNames}
      name={name}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};
