import React from 'react';

type ProgressProps = {
  percent: string | number;
  size?: 'small' | 'default' | 'large' | 'extraLarge';
  showStatus?: boolean;
};

export const Progress = ({
  percent,
  size = 'default',
  showStatus = true,
}: ProgressProps) => {
  const strPer =
    typeof percent === 'string' ? percent : `${percent.toFixed()}%`;

  return (
    <div className={`w-full bg-gray-200 rounded-full ${size} mb-4`}>
      <div
        className={`bg-blue-600 ${size} font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{
          width: strPer,
        }}
      >
        {showStatus && strPer}
      </div>
    </div>
  );
};
