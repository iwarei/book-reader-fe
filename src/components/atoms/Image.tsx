import React from 'react';

type SquareImageProps = {
  id?: string;
  src: string;
  alt?: string;
  addClass?: string[];
};

export const SquareImage = ({
  id = '',
  src,
  alt = '...',
  addClass = [],
}: SquareImageProps) => {
  const classNames = [...addClass].join(' ');

  return (
    <div>
      <img
        src={src}
        className="object-cover w-full h-full"
        style={{ aspectRatio: '1/1' }}
        alt={alt}
      />
    </div>
  );
};
