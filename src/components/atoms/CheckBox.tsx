import React from 'react';

type CheckBoxProps = {
  id?: string | undefined;
  name: string;
  value?: string | number | undefined;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox = ({
  id,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}: CheckBoxProps) => {
  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      value={value}
      defaultChecked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
