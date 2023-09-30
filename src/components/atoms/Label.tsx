import React from 'react';

type LabelProps = {
  text: string;
  className?: string[];
  htmlFor: string;
  id?: string;
};

export const Label = ({ text, className, htmlFor, id }: LabelProps) => {
  const classNames = className ? className.join(' ') : '';

  return (
    <label className={classNames} id={id} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
