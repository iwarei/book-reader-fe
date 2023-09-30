import React from 'react';

type RadioButtonProps = {
  id?: string | undefined;
  name: string;
  value?: string | number | undefined;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = ({
  id = undefined,
  name,
  value = undefined,
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) => {
  return (
    <input
      id={id}
      name={name}
      type="radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      value={value}
      defaultChecked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
