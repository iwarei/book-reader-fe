import React from 'react';

type TextProps = {
  children: React.ReactNode;
};

export const Text = ({ children }: TextProps) => {
  return (
    <p className="mb-4 text-base text-gray-900 dark:text-white ">{children}</p>
  );
};
