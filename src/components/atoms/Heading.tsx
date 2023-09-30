import React from 'react';

type HeadingProps = {
  divClassName?: string | undefined;
  text: string;
};

const H1 = ({ divClassName, text }: HeadingProps) => {
  return (
    <div className={divClassName ?? 'mb-6'}>
      <h1 className="text-5xl font-extrabold dark:text-white">{text}</h1>;
    </div>
  );
};

const H2 = ({ divClassName, text }: HeadingProps) => {
  return (
    <div className={divClassName ?? 'mb-6'}>
      <h2 className="text-4xl font-bold dark:text-white">{text}</h2>
    </div>
  );
};

const H3 = ({ divClassName, text }: HeadingProps) => {
  return (
    <div className={divClassName ?? 'mb-6'}>
      <h3 className="text-3xl font-bold dark:text-white">{text}</h3>
    </div>
  );
};

const H4 = ({ divClassName, text }: HeadingProps) => {
  return (
    <div className={divClassName ?? 'mb-4'}>
      <h4 className="text-2xl font-bold dark:text-white">{text}</h4>
    </div>
  );
};

const H5 = ({ divClassName, text }: HeadingProps) => {
  return (
    <div className={divClassName ?? 'mb-3'}>
      <h5 className="text-xl font-bold dark:text-white">{text}</h5>
    </div>
  );
};

const H6 = ({ divClassName, text }: HeadingProps) => {
  return (
    <div className={divClassName ?? 'mb-2'}>
      <h6 className="text-lg font-bold dark:text-white">{text}</h6>
    </div>
  );
};

export const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
