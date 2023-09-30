import React from 'react';

type BlockProps = {
  children: React.ReactNode;
  shadow?: boolean;
  addClass?: string;
};

export const Block = ({ children, shadow = true, addClass }: BlockProps) => {
  return (
    <div
      className={`p-4 my-8 bg-white border border-gray-200 rounded-lg${
        shadow ? ' shadow-md' : ''
      } sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ${addClass ?? ''}`}
    >
      {children}
    </div>
  );
};
